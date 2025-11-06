import React from "react";
import styles from "@/app/component/userCard/card.module.css";
import Image from "next/image";
const UserCard = () => {
  return (
    <>
      <div className={`${styles.user__main}`}>
        <div className={`${styles.user_img}`}> About Alex Carter</div>
        <Image
          src="/img2.jpg"
          className="rounded-img"
          width={100}
          height={100}
          alt="user"
        ></Image>
        <p className={`${styles.user_desc}`}>
          With over a decade in fitness, Alex specializes in strength training.
          Certified by NASM, he designs challenging yet achievable workout
          programs. His passion is helping clients build strength and confidence
          through personalized routines. Outside the gym, Alex enjoys running
          and outdoor adventures.
        </p>
      </div>
      <div className={`${styles.slider__btn}`}>
        <div>
          <button className={`${styles.slider__prev_btn}`}>
            <Image src="/icon.svg" width={16} height={16} alt="icon"></Image>
            Previous
          </button>
          <p className={`${styles.slider__prev_btn_text}`}>5 Tips for Better Cardio Sessions</p>
        </div>
        <div>
          <button className={`${styles.slider__next_btn}`}>
            Next
            <Image src="/icon1.svg" width={16} height={16} alt="icon"></Image>
          </button>
          <p className={`${styles.slider__prev_btn_text}`}>Meal Prep Basics for Gym Enthusiasts</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
