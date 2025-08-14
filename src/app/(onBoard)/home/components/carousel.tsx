"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Carousels = () => {
  return (
    <>
      <Carousel
        plugins={[Autoplay({ delay: 2000 })]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[300px] relative">
          <CarouselItem>
            <img src="logo.webp" />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img src="IMG_0488.jfif" />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img src="IMG_04971.jfif" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-white" />
        <CarouselNext className="absolute right-4 bg-white" />
      </Carousel>
    </>
  );
};
