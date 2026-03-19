'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const WEEKDAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

function pad2(n) {
  return String(n).padStart(2, '0');
}

/** @param {Date} d */
export function toISODateLocal(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

/** @param {string | null | undefined} iso */
export function parseISODateLocal(iso) {
  if (!iso) return null;
  const parts = iso.split('-').map(Number);
  const [y, m, d] = parts;
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
}

/** Monday = 0 … Sunday = 6 */
function weekdayMondayFirst(date) {
  const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return (day + 6) % 7;
}

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function startOfToday() {
  const t = new Date();
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

/**
 * Custom round-trip date picker matching Air India panel styling (maroon glass + gold accent).
 */
export default function BookingCalendar({
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
  minDate,
}) {
  const today = useMemo(() => startOfToday(), []);
  const min = useMemo(() => {
    if (!minDate) return today;
    const p = parseISODateLocal(minDate);
    return p && p > today ? p : today;
  }, [minDate, today]);

  const initialView = useMemo(() => {
    const d = parseISODateLocal(departureDate) || min;
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }, [departureDate, min]);

  const [viewMonth, setViewMonth] = useState(initialView);

  useEffect(() => {
    if (!departureDate) return;
    const d = parseISODateLocal(departureDate);
    if (!d) return;
    setViewMonth((prev) => {
      const next = new Date(d.getFullYear(), d.getMonth(), 1);
      return prev.getTime() === next.getTime() ? prev : next;
    });
  }, [departureDate]);

  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const minISO = toISODateLocal(min);

  const grid = useMemo(() => {
    const total = daysInMonth(year, month);
    const lead = weekdayMondayFirst(viewMonth);
    const cells = [];

    for (let i = 0; i < lead; i += 1) {
      cells.push({ type: 'empty', key: `e-${i}` });
    }
    for (let day = 1; day <= total; day += 1) {
      const date = new Date(year, month, day);
      cells.push({
        type: 'day',
        key: `d-${day}`,
        day,
        iso: toISODateLocal(date),
        date,
      });
    }
    return cells;
  }, [year, month, viewMonth]);

  const goPrev = () => {
    setViewMonth((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  };

  const goNext = () => {
    setViewMonth((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));
  };

  const handleDayClick = (iso) => {
    if (iso < minISO) return;

    if (!departureDate) {
      onDepartureDateChange(iso);
      onReturnDateChange('');
      return;
    }

    if (!returnDate) {
      if (iso < departureDate) {
        onDepartureDateChange(iso);
        onReturnDateChange('');
        return;
      }
      // Allow return on the same day as departure (same-day round trip)
      onReturnDateChange(iso);
      return;
    }

    // Both set: start a new selection from this day
    onDepartureDateChange(iso);
    onReturnDateChange('');
  };

  const handleClear = () => {
    onDepartureDateChange('');
    onReturnDateChange('');
  };

  const handleToday = () => {
    const iso = toISODateLocal(today);
    if (iso < minISO) return;
    onDepartureDateChange(iso);
    onReturnDateChange('');
    setViewMonth(new Date(today.getFullYear(), today.getMonth(), 1));
  };

  const monthLabel = viewMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const cellClass = (iso) => {
    const isPast = iso < minISO;
    const isToday = iso === toISODateLocal(today);
    const isDep = iso === departureDate;
    const isRet = iso === returnDate;
    const inRange =
      departureDate &&
      returnDate &&
      departureDate !== returnDate &&
      iso > departureDate &&
      iso < returnDate;

    const base =
      'relative flex h-9 w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-150 select-none';

    if (isPast) {
      return `${base} cursor-not-allowed text-white/20`;
    }

    let extra = 'cursor-pointer text-white/90 hover:bg-white/10 hover:text-white';

    if (inRange) {
      extra = 'cursor-pointer bg-(--primary)/15 text-(--primary) hover:bg-(--primary)/25';
    }

    if (isToday && !isDep && !isRet) {
      extra += ' ring-1 ring-(--primary)/60 ring-inset';
    }

    if (isDep || isRet) {
      extra = `cursor-pointer bg-(--primary) text-(--navy-deep) font-bold shadow-[0_0_0_1px_rgba(235,190,105,0.35)] hover:bg-(--primary-dark) hover:text-white`;
    }

    return `${base} ${extra}`;
  };

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
      {/* Month navigation */}
      <div className="mb-4 flex items-center justify-between gap-2 border-b border-white/10 pb-3">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-(--primary)/40 hover:bg-white/5 hover:text-(--primary)"
          aria-label="Previous month"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <span className="font-airindia-sans text-center text-sm font-semibold tracking-wide text-(--primary)">
          {monthLabel}
        </span>
        <button
          type="button"
          onClick={goNext}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/70 transition-colors hover:border-(--primary)/40 hover:bg-white/5 hover:text-(--primary)"
          aria-label="Next month"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>

      {/* Weekday headers */}
      <div className="mb-2 grid grid-cols-7 gap-1">
        {WEEKDAYS.map((d, i) => (
          <div
            key={`${d}-${i}`}
            className="text-center text-[10px] font-bold uppercase tracking-widest text-(--primary)/90"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1">
        {grid.map((cell) => {
          if (cell.type === 'empty') {
            return <div key={cell.key} className="h-9" />;
          }
          const { iso, day } = cell;
          return (
            <button
              key={cell.key}
              type="button"
              onClick={() => handleDayClick(iso)}
              disabled={iso < minISO}
              className={cellClass(iso)}
            >
              {day}
            </button>
          );
        })}
      </div>

      {/* Footer actions */}
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
        <button
          type="button"
          onClick={handleClear}
          className="text-xs font-semibold uppercase tracking-widest text-white/50 transition-colors hover:text-(--primary)"
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleToday}
          className="text-xs font-semibold uppercase tracking-widest text-(--primary) transition-colors hover:text-white"
        >
          Today
        </button>
      </div>

      <p className="mt-3 text-center text-[10px] leading-relaxed text-white/45">
        {!departureDate && 'Select departure date'}
        {departureDate && !returnDate && 'Select return date (same day allowed)'}
        {departureDate && returnDate && 'Tap a date to change departure'}
      </p>
    </div>
  );
}
