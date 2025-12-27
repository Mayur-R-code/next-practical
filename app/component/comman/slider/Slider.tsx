"use client";

import React, { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType, SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface CommonSliderProps {
  children: React.ReactNode;
  swiperOptions?: SwiperOptions;
  onSwiper?: (swiper: SwiperType) => void;
  onSlideChange?: (swiper: SwiperType) => void;
}

const CommonSlider = ({
  children,
  swiperOptions,
  onSwiper,
  onSlideChange,
}: CommonSliderProps) => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (!swiperRef.current) return;

      swiperRef.current.update();
      swiperRef.current.slideTo(
        swiperRef.current.activeIndex,
        0
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      observer
      observeParents
      watchOverflow
      {...swiperOptions}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
        onSwiper?.(swiper);
      }}
      onSlideChange={(swiper) => {
        onSlideChange?.(swiper);
      }}
    >
      {children}
    </Swiper>
  );
};

export default CommonSlider;
