"use client";

import * as React from "react";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

export default function CarouselSize() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full mx-auto"
    >
      <CarouselContent className="w-full">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-full md:basis-1/2 lg:basis-1/5"
          >
            <Card className="max-w-[320px] h-full p-1">
              <CardContent className="p-1 w-full flex flex-col items-start justify-start gap-4">
                <img
                  src="https://storage.googleapis.com/curations-curation-picture-bucket/1722063347454-victorian.jpg"
                  alt="Victorian"
                  className="h-[400px] w-full object-cover rounded-md"
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="text-lg font-semibold">
                    revenge era playlist 🎃
                  </h3>
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/leerob.png"
                        alt="@leerob"
                      />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/evilrabbit.png"
                        alt="@evilrabbit"
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
