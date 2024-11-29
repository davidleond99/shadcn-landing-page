"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export const CarouselSection = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        const timer = setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [api, current]);

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container mx-auto">
                <div className="grid grid-cols-5 gap-10 items-center">
                    <h3 className="text-xl tracking-tighter lg:max-w-xl font-regular text-left">
                        Trusted by market leaders
                    </h3>
                    <div className="relative w-full col-span-4">
                        <div className="bg-gradient-to-r from-background via-white/25 to-white/25 h-full w-full absolute inset-0 blur-3xl"></div>
                        <Carousel setApi={setApi} className="w-full">
                            <CarouselContent>
                                {Array.from({ length: 25 }).map((_, index) => (
                                    <CarouselItem
                                        className="basis-1/3 lg:basis-1/8 rounded-sm"
                                        key={index}
                                    >
                                        <div className="relative w-full h-full aspect-square">
                                            <Image
                                                width={1200}
                                                height={1200}
                                                className="object-cover rounded-lg"
                                                src="/png-clipart-car-car-white-thumbnail.png"
                                                alt={`Dashboard ${index + 1}`}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

