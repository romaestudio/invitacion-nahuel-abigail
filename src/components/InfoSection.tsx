import { ReactNode } from 'react';

interface InfoSectionProps {
  icon: ReactNode;
  title: string;
  content: string | ReactNode;
  animationType?: 'bounce' | 'rotate' | 'pulse' | 'swing' | 'float';
}

export default function InfoSection({ icon, title, content, animationType = 'bounce' }: InfoSectionProps) {
  const getAnimationClass = () => {
    switch (animationType) {
      case 'rotate':
        return 'animate-rotate-slow';
      case 'pulse':
        return 'animate-pulse-slow';
      case 'swing':
        return 'animate-swing';
      case 'float':
        return 'animate-float';
      case 'bounce':
      default:
        return 'animate-bounce-slow';
    }
  };

  return (
    <div className="max-w-md mx-auto text-center space-y-4 px-6">
      <div className={`inline-block ${getAnimationClass()}`}>
        {icon}
      </div>
      
      <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-wedding-oliveDark">
        {title}
      </h3>
      
      <div className="font-montserrat text-base md:text-lg text-wedding-oliveDark/80">
        {content}
      </div>
    </div>
  );
}