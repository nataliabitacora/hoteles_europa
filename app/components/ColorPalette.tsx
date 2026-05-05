interface Swatch {
  name: string;
  className: string;
  hex: string;
  textClass: string;
}

const swatches: Swatch[] = [
  { name: 'Primary', className: 'bg-primary', hex: '#FF3366', textClass: 'text-white' },
  { name: 'Secondary', className: 'bg-secondary', hex: '#FFE53D', textClass: 'text-black' },
  { name: 'Accent Blue', className: 'bg-accent-blue', hex: '#3DA9FC', textClass: 'text-black' },
  { name: 'Accent Pink', className: 'bg-accent-pink', hex: '#FF6FB5', textClass: 'text-black' },
  { name: 'Accent Green', className: 'bg-accent-green', hex: '#3DDC97', textClass: 'text-black' },
  { name: 'Accent Purple', className: 'bg-accent-purple', hex: '#A78BFA', textClass: 'text-black' },
  { name: 'Accent Orange', className: 'bg-accent-orange', hex: '#FF8C42', textClass: 'text-black' },
  { name: 'Black', className: 'bg-black', hex: '#000000', textClass: 'text-white' }
];

export function ColorPalette() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {swatches.map((s) => (
        <div
          key={s.name}
          className={`${s.className} border-4 border-black rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] aspect-square flex flex-col justify-between`}
        >
          <span className={`font-black uppercase text-sm tracking-wider ${s.textClass}`}>{s.name}</span>
          <span className={`font-black ${s.textClass}`}>{s.hex}</span>
        </div>
      ))}
    </div>
  );
}
