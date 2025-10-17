"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import Image from "next/image";
import { cn } from "@/lib/utils/cn";

export function ProductImgs({ product }: { product: Product }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const images =
    product.images && product.images.length > 0
      ? [product.imgCover, ...product.images]
      : [product.imgCover];
  return (
    <div className=" w-1/2">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              {image && (
                <Image
                  src={image}
                  alt="Photo"
                  width={600}
                  height={400}
                  className="w-full h-[400px] rounded-lg object-cover"
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel className="mt-5">
        <CarouselContent className="-ml-4">
          {images.map((img, idx) => (
            <CarouselItem className="basis-1/5 " onClick={() => api?.scrollTo(idx)}>
              {img && (
                <Image
                  src={img}
                  alt="Photo"
                  width={90}
                  height={111}
                  className={cn(
                    "size-full rounded-md",
                    current - 1 == idx && "border-maroon-500 border-[2px]",
                  )}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">{}</div>
    </div>
  );
}
