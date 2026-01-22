'use client';

function ClassOption({ active, icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        'p-4 border rounded-lg transition-all text-center group',
        active
          ? 'border-[color:var(--primary)] bg-[color:var(--primary)]/10'
          : 'border-white/10 hover:border-[color:var(--primary)]/50',
      ].join(' ')}
      type="button"
    >
      <span className="material-symbols-outlined text-white/40 group-hover:text-[color:var(--primary)] text-2xl mb-2 block">
        {icon}
      </span>
      <span className="text-white text-xs font-medium uppercase tracking-wider block">{label}</span>
    </button>
  );
}

export default ClassOption;