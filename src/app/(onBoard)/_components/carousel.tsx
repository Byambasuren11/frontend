/* eslint-disable @next/next/no-img-element */
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
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-[400px] relative">
          <CarouselItem>
            <img
              alt="1"
              src="https://www.gazar.gov.mn/images/slider-4.png"
              className="object-cover w-full"
            />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img
              alt="2"
              src="https://www.gazar.gov.mn/images/slider-5.png"
              className="w-full"
            />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img
              alt="3"
              src="https://www.gazar.gov.mn/images/slider-3.png"
              className="w-full"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-white hidden xl:flex" />
        <CarouselNext className="absolute right-4 bg-white hidden xl:flex" />
      </Carousel>
    </>
  );
};
