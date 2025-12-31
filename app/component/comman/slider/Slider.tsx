"use client";

import React, { useEffect, useRef } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType, SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";


interface CommonSliderProps {
  /** Swiper slides */
  children: React.ReactNode;

  /** Custom Swiper configuration options */
  swiperOptions?: SwiperOptions;

  /** Callback to access Swiper instance */
  onSwiper?: (swiper: SwiperType) => void;

  /** Callback triggered when slide changes */
  onSlideChange?: (swiper: SwiperType) => void;
}


const CommonSlider = ({
  children,
  swiperOptions,
  onSwiper,
  onSlideChange,
}: CommonSliderProps) => {
 
  const swiperRef = useRef<SwiperType | null>(null);

  // Fix Swiper layout issues on window resize
   
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

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      /** Enable Swiper modules */
      modules={[Navigation]}

      /** Default slide count */
      slidesPerView={1}

      /** Automatically observe DOM changes */
      observer
      observeParents

      /** Disable slider if slides are not enough */
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
