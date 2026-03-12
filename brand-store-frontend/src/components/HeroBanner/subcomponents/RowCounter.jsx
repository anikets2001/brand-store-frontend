'use client';

import { Plus, X } from "lucide-react";

function RowCounter({ title, subtitle, value, onMinus, onPlus }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <span className="text-white font-medium text-sm">{title}</span>
        <p className="text-white/50 text-xs mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={onMinus}
          className="cursor-pointer w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all"
          type="button"
        >
          <X size={16}/>
        </button>
        <span className="text-white font-display text-lg w-8 text-center">{value}</span>
        <button
          onClick={onPlus}
          className="cursor-pointer w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-all"
          type="button"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default RowCounter;