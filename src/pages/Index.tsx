import { useState, useRef, useEffect } from 'react';
import WelcomeScreen from '@/components/WelcomeScreen';
import Countdown from '@/components/Countdown';
import PhotoCarousel from '@/components/PhotoCarousel';
import InfoSection from '@/components/InfoSection';
import { Calendar, MapPin, Clock, Shirt, Plane, Heart } from 'lucide-react';

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fotos para reemplazar: subir a /public/fotos/
  // /images/HeroImage.jpg - foto principal
  // /images/photo1768841824.jpg, /images/photo1768841823.jpg, /images/Carousel.jpg, /images/Carousel.jpg - primer carrusel
  // /images/photo1768841822.jpg, /images/Carousel.jpg, /images/carousel.jpg - segundo carrusel
  
  const carouselImages1 = [
    '/images/Carousel.jpg',
    '/images/Carousel.jpg',
    '/images/Carousel.jpg',
    '/images/photo1768841825.jpg',
  ];

  const carouselImages2 = [
    '/images/photo1768841822.jpg',
    '/images/Carousel.jpg',
    '/images/Carousel.jpg',
  ];

  useEffect(() => {
    audioRef.current = new Audio('/Música/Elvis Presley - Can\'t Help Falling In Love (Official Audio).mp3');
    audioRef.current.loop = true;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleEnter = () => {
    setShowWelcome(false);
    
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Audio playback failed:', error);
      });
    }
  };

  if (showWelcome) {
    return <WelcomeScreen onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-wedding-beige via-white to-wedding-beige">
      {/* Hero Section with Photo */}
      <section className="pt-12 pb-8 px-6">
        <div className="max-w-md mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8 animate-in fade-in slide-in-from-top duration-1000">
            <img
              src="/images/Couple.jpg"
              alt="Nahuel & Abigail"
              className="w-full aspect-square object-cover"
            />
          </div>
          
          <h1 className="font-playfair font-bold text-4xl md:text-5xl text-center text-wedding-oliveDark mb-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            ¡NOS CASAMOS!
          </h1>
          
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <Countdown />
          </div>
        </div>
      </section>

      {/* Special Message */}
      <section className="py-12 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="font-playfair text-2xl md:text-3xl text-wedding-olive italic leading-relaxed">
            EL DÍA MÁS ESPERADO DE NUESTRAS VIDAS ESTÁ LLEGANDO...
          </p>
        </div>
      </section>

      {/* Date Section */}
      <section className="py-12 px-6 bg-white/50">
        <InfoSection
          icon={<Calendar className="w-16 h-16 text-wedding-olive" />}
          title="¿CUÁNDO?"
          content="11 DE ABRIL 2026"
          animationType="pulse"
        />
      </section>

      {/* First Photo Carousel */}
      <section className="py-12">
        <PhotoCarousel images={carouselImages1} />
      </section>

      {/* Location Section */}
      <section className="py-12 px-6 bg-white/50">
        <InfoSection
          icon={<MapPin className="w-16 h-16 text-wedding-olive" />}
          title="¿DÓNDE?"
          content="Don Arnold km 13 Ruta 13"
          animationType="bounce"
        />
      </section>

      {/* Time Section */}
      <section className="py-12 px-6">
        <InfoSection
          icon={<Clock className="w-16 h-16 text-wedding-olive" />}
          title="¿A QUÉ HORA?"
          content="17:00 HORAS"
          animationType="rotate"
        />
      </section>

      {/* Love Message */}
      <section className="py-12 px-6 bg-white/50">
        <div className="max-w-md mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 text-wedding-olive animate-pulse-slow" />
          <p className="font-playfair text-2xl md:text-3xl text-wedding-olive italic leading-relaxed">
            SEAN PARTE DE NUESTRA HISTORIA DE AMOR
          </p>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="py-12 px-6">
        <InfoSection
          icon={<Shirt className="w-16 h-16 text-wedding-olive" />}
          title="CÓDIGO DE VESTIMENTA"
          content={
            <p className="uppercase">
              VESTITE CÓMODO/A PARA DISFRUTAR LA FIESTA<br />
              RECORDANDO EVITAR EL BLANCO Y COLORES SIMILARES
            </p>
          }
          animationType="swing"
        />
      </section>

      {/* Honeymoon Section */}
      <section className="py-12 px-6 bg-white/50">
        <InfoSection
          icon={<Plane className="w-16 h-16 text-wedding-olive" />}
          title="LUNA DE MIEL"
          content={
            <p className="uppercase">
              NUESTRO MEJOR REGALO ES QUE ESTÉS CON NOSOTROS EN NUESTRO DÍA,<br />
              PERO SI QUIERES HACERNOS UN OBSEQUIO,<br />
              PUEDES CONTRIBUIR A NUESTRA LUNA DE MIEL EN EFECTIVO
            </p>
          }
          animationType="float"
        />
      </section>

      {/* Second Photo Carousel */}
      <section className="py-12">
        <PhotoCarousel images={carouselImages2} />
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <Heart className="w-8 h-8 mx-auto text-wedding-olive" />
          <p className="font-playfair text-xl text-wedding-oliveDark">
            Nahuel & Abigail
          </p>
          <p className="font-montserrat text-sm text-wedding-oliveDark/60">
            11 de Abril 2026
          </p>
        </div>
      </footer>
    </div>
  );
}