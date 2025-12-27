"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/app/component/userCard/card.module.css";
import Image from "next/image";
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";
import { userSliderData } from "@/app/data/userSliderData";

const UserCard = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (!swiperRef.current) return;

      swiperRef.current.update();
      swiperRef.current.slideTo(swiperRef.current.activeIndex, 0);

      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* SLIDER */}
      <Swiper
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
      >
        {userSliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.user__main}>
              <div className={styles.user_img}>About {item.name}</div>

              <Image
                src={item.image}
                className="rounded-img"
                width={100}
                height={100}
                alt={item.name}
              />

              <p className={styles.user_desc}>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* BUTTONS – SAME UI */}
      <div className={styles.slider__btn}>
        <div>
          <div>
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
              className={`
              ${styles.slider__prev_btn}
              ${isBeginning ? styles.disabled : ""}
            `}
            >
              <LuCircleArrowLeft />
              Previous
            </button>
          </div>

          <p className={styles.slider__prev_btn_text}>
            5 Tips for Better Cardio Sessions
          </p>
        </div>

        <div>
          <div className={`${styles.slider_btn_main}`}>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
              className={`
              ${styles.slider__next_btn}
              ${isEnd ? styles.disabled : ""}
            `}
            >
              Next
              <LuCircleArrowRight />
            </button>
          </div>

          <p className={styles.slider__prev_btn_text}>
            Meal Prep Basics for Gym Enthusiasts
          </p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
