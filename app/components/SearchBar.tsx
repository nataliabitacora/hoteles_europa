'use client';

import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './Button';

export function SearchBar() {
  return (
    <div className="bg-white border-4 border-black rounded-2xl p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <label className="flex items-center gap-3 bg-muted border-4 border-black rounded-xl px-4 py-3">
          <MapPin className="w-5 h-5 text-black flex-shrink-0" strokeWidth={3} />
          <input
            type="text"
            placeholder="Destino"
            className="bg-transparent outline-none font-bold w-full placeholder:text-black/60"
          />
        </label>

        <label className="flex items-center gap-3 bg-muted border-4 border-black rounded-xl px-4 py-3">
          <Calendar className="w-5 h-5 text-black flex-shrink-0" strokeWidth={3} />
          <input
            type="text"
            placeholder="Check-in"
            className="bg-transparent outline-none font-bold w-full placeholder:text-black/60"
          />
        </label>

        <label className="flex items-center gap-3 bg-muted border-4 border-black rounded-xl px-4 py-3">
          <Users className="w-5 h-5 text-black flex-shrink-0" strokeWidth={3} />
          <input
            type="text"
            placeholder="Personas"
            className="bg-transparent outline-none font-bold w-full placeholder:text-black/60"
          />
        </label>

        <Button variant="primary" size="md" className="w-full">
          <Search className="w-5 h-5 mr-2" strokeWidth={3} />
          Buscar
        </Button>
      </div>
    </div>
  );
}
