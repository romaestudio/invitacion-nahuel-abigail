import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-04-11T17:00:00').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-wedding-olive/20">
        <div className="text-3xl md:text-4xl font-playfair font-bold text-wedding-olive">
          {timeLeft.days}
        </div>
        <div className="text-xs md:text-sm font-montserrat text-wedding-oliveDark uppercase mt-1">
          Días
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-wedding-olive/20">
        <div className="text-3xl md:text-4xl font-playfair font-bold text-wedding-olive">
          {timeLeft.hours}
        </div>
        <div className="text-xs md:text-sm font-montserrat text-wedding-oliveDark uppercase mt-1">
          Horas
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-wedding-olive/20">
        <div className="text-3xl md:text-4xl font-playfair font-bold text-wedding-olive">
          {timeLeft.minutes}
        </div>
        <div className="text-xs md:text-sm font-montserrat text-wedding-oliveDark uppercase mt-1">
          Min
        </div>
      </div>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 border-wedding-olive/20">
        <div className="text-3xl md:text-4xl font-playfair font-bold text-wedding-olive">
          {timeLeft.seconds}
        </div>
        <div className="text-xs md:text-sm font-montserrat text-wedding-oliveDark uppercase mt-1">
          Seg
        </div>
      </div>
    </div>
  );
}