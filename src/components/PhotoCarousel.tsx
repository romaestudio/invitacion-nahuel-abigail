import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface PhotoCarouselProps {
  images: string[];
}

export default function PhotoCarousel({ images }: PhotoCarouselProps) {
  return (
    <div className="w-full max-w-md mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={image}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-wedding-olive text-white hover:bg-wedding-oliveLight border-none" />
        <CarouselNext className="bg-wedding-olive text-white hover:bg-wedding-oliveLight border-none" />
      </Carousel>
    </div>
  );
}