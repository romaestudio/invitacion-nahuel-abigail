import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface WelcomeScreenProps {
  onEnter: () => void;
}

export default function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-wedding-beige via-white to-wedding-beige">
      <div className="max-w-md w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="space-y-4">
          <Heart className="w-16 h-16 mx-auto text-wedding-olive animate-pulse-slow" />
          
          <h1 className="font-playfair font-bold text-5xl md:text-6xl text-wedding-oliveDark leading-tight">
            Nahuel & Abigail
          </h1>
          
          <p className="font-montserrat text-lg md:text-xl text-wedding-oliveDark/80 italic px-4">
            "El camino es más divertido si lo recorremos juntos"
          </p>
        </div>

        <div className="pt-8">
          <Button
            onClick={onEnter}
            className="bg-wedding-olive hover:bg-wedding-oliveLight text-white font-montserrat font-semibold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Ingresar
          </Button>
        </div>

        <div className="flex justify-center gap-2 pt-4">
          <div className="w-2 h-2 rounded-full bg-wedding-olive animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 rounded-full bg-wedding-olive animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full bg-wedding-olive animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}