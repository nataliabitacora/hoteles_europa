import { Star, Wifi, Coffee, Users, MapPin } from 'lucide-react';
import { Badge } from './Badge';
import { Button } from './Button';

type BadgeColor = 'yellow' | 'pink' | 'blue' | 'green' | 'purple' | 'orange';

interface HotelCardProps {
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: BadgeColor;
  amenities?: string[];
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="w-4 h-4" strokeWidth={3} />,
  cafe: <Coffee className="w-4 h-4" strokeWidth={3} />,
  social: <Users className="w-4 h-4" strokeWidth={3} />
};

export function HotelCard({
  name,
  location,
  image,
  price,
  rating,
  reviews,
  badge,
  badgeColor = 'yellow',
  amenities = []
}: HotelCardProps) {
  return (
    <article className="bg-white border-4 border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={name} className="w-full h-56 object-cover border-b-4 border-black" />
        {badge && (
          <div className="absolute top-4 left-4">
            <Badge variant={badgeColor}>{badge}</Badge>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black uppercase mb-2 tracking-tight leading-tight">{name}</h3>

        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-4 h-4 text-black" strokeWidth={3} />
          <span className="text-sm font-bold">{location}</span>
        </div>

        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-1 bg-secondary border-2 border-black rounded-lg px-2 py-1">
            <Star className="w-4 h-4 text-black fill-black" strokeWidth={3} />
            <span className="text-sm font-black">{rating}</span>
          </div>
          <span className="text-sm font-bold">({reviews} reseñas)</span>
        </div>

        {amenities.length > 0 && (
          <div className="flex gap-2 mb-5">
            {amenities.map((amenity) => (
              <div
                key={amenity}
                className="w-9 h-9 bg-muted border-2 border-black rounded-lg flex items-center justify-center"
                title={amenity}
              >
                {amenityIcons[amenity]}
              </div>
            ))}
          </div>
        )}

        <div className="flex items-end justify-between pt-5 border-t-4 border-black">
          <div>
            <span className="text-3xl font-black">{price}€</span>
            <span className="text-sm font-bold ml-1">/noche</span>
          </div>
          <Button variant="black" size="sm">Reservar</Button>
        </div>
      </div>
    </article>
  );
}
