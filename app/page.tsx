import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { HotelCard } from './components/HotelCard';
import { SearchBar } from './components/SearchBar';
import { ColorPalette } from './components/ColorPalette';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function App() {
  const hotelData = [
    {
      name: 'BARCELONA BEACH VIBES',
      location: 'Barcelona, España',
      image: 'https://images.unsplash.com/photo-1559599238-1e4e49392c53?w=800&h=600&fit=crop',
      price: 35,
      rating: 4.8,
      reviews: 342,
      badge: 'OFERTA',
      badgeColor: 'yellow' as const,
      amenities: ['wifi', 'cafe', 'social']
    },
    {
      name: 'BERLIN URBAN SPOT',
      location: 'Berlín, Alemania',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      price: 42,
      rating: 4.9,
      reviews: 521,
      badge: 'POPULAR',
      badgeColor: 'pink' as const,
      amenities: ['wifi', 'social']
    },
    {
      name: 'PARIS CENTRAL HUB',
      location: 'París, Francia',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop',
      price: 48,
      rating: 4.7,
      reviews: 289,
      badge: 'NUEVO',
      badgeColor: 'blue' as const,
      amenities: ['wifi', 'cafe']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-24 text-center">
          <div className="inline-flex items-center gap-3 bg-secondary border-4 border-black px-6 py-3 rounded-xl mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles className="w-5 h-5 text-black" strokeWidth={3} />
            <span className="text-sm font-black text-black uppercase tracking-wider">Sistema Neobrutalista</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 uppercase leading-none tracking-tighter">
            TU AVENTURA
            <br />
            <span className="text-primary">EUROPEA</span>
            <br />
            COMIENZA AQUÍ
          </h1>

          <p className="text-xl md:text-2xl font-bold mb-16 max-w-3xl mx-auto leading-tight">
            Hoteles ULTRA modernos y vibrantes para jóvenes que buscan experiencias ÉPICAS en Europa.
          </p>

          <div className="max-w-5xl mx-auto">
            <SearchBar />
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
            <h2 className="text-5xl md:text-6xl font-black uppercase">HOTELES TOP</h2>
            <div className="flex gap-3">
              <Badge variant="pink">NUEVOS</Badge>
              <Badge variant="yellow">HOT</Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelData.map((hotel) => (
              <HotelCard key={hotel.name} {...hotel} />
            ))}
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase">Paleta de Colores</h2>
          <ColorPalette />
        </section>

        <section className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase">Botones</h2>
          <div className="bg-muted p-10 rounded-2xl border-4 border-black">
            <div className="space-y-10">
              <div>
                <h3 className="font-black mb-6 text-sm uppercase tracking-wider">Variantes</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">PRIMARY</Button>
                  <Button variant="secondary">SECONDARY</Button>
                  <Button variant="outline">OUTLINE</Button>
                  <Button variant="black">BLACK</Button>
                </div>
              </div>

              <div>
                <h3 className="font-black mb-6 text-sm uppercase tracking-wider">Tamaños</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="sm">SMALL</Button>
                  <Button variant="primary" size="md">MEDIUM</Button>
                  <Button variant="primary" size="lg">LARGE</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-5xl md:text-6xl font-black mb-12 uppercase">Badges</h2>
          <div className="bg-muted p-10 rounded-2xl border-4 border-black">
            <div className="flex flex-wrap gap-4">
              <Badge variant="yellow">OFERTA</Badge>
              <Badge variant="pink">NUEVO</Badge>
              <Badge variant="blue">COOL</Badge>
              <Badge variant="green">ECO</Badge>
              <Badge variant="purple">PREMIUM</Badge>
              <Badge variant="orange">HOT</Badge>
            </div>
          </div>
        </section>

        <section className="bg-primary border-4 border-black rounded-3xl p-12 md:p-16 text-center mb-24 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <div className="absolute top-8 right-8 w-32 h-32 bg-secondary rounded-full border-4 border-black opacity-50"></div>
          <div className="absolute bottom-8 left-8 w-24 h-24 bg-accent-blue rounded-full border-4 border-black opacity-50"></div>

          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-6">
              <Zap className="w-12 h-12 text-white" strokeWidth={3} />
              <TrendingUp className="w-12 h-12 text-white" strokeWidth={3} />
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 text-white uppercase leading-tight">
              ¿LISTO PARA<br />LA AVENTURA?
            </h2>

            <p className="text-2xl md:text-3xl mb-10 font-bold text-white">
              Únete a miles de jóvenes explorando Europa con ESTILO
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <Button variant="secondary" size="lg">
                VER HOTELES
              </Button>
              <Button variant="outline" size="lg" className="bg-white">
                SABER MÁS
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
