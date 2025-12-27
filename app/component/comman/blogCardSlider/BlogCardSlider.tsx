"use client";

import Image from "next/image";
import { BLOG_DATA } from "@/app/data/post";
import { SwiperSlide } from "swiper/react";
import CommonSlider from "../slider/Slider";
import styles from "@/app/component/blogCard/card.module.css";
import { LuCircleArrowRight, LuCircleArrowLeft } from "react-icons/lu";
import { useRef, useState } from "react";
import { Swiper as SwiperType } from "swiper/types";
import "swiper/css";

const BlogCardSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className={styles.blog_card_main_1}>
      <CommonSlider
        swiperOptions={{
          spaceBetween: 20,
          slidesPerView: 3,
          breakpoints: {
            0: { slidesPerView: 1 },
            530: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        }}
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
        {BLOG_DATA.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <Image
                src={item.img}
                width={301}
                height={165}
                alt="blog-img"
                className={styles.blog__img}
              />

              <div className={styles.blog__card}>
                <span className={styles.blog_date}>{item.tag}</span>
                <span className={styles.blog_date_time}>{item.date}</span>
                <p className={styles.card_desc}>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* SLIDER BUTTONS */}
      </CommonSlider>
      <div className={styles.slider__btn}>
        {/* PREV */}
        <div>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`${styles.slider__prev_btn} ${
              isBeginning ? styles.disabled : ""
            }`}
          >
            <LuCircleArrowLeft />
            Previous
          </button>
        </div>

        {/* NEXT */}
        <div>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`${styles.slider__next_btn} ${
              isEnd ? styles.disabled : ""
            }`}
          >
            Next
            <LuCircleArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSlider;
