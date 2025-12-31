import React from "react";
import styles from "@/app/component/blogReview/review.module.css";
import Image from "next/image";
import { REVIEW } from "@/app/data/post";

const BlogReview = () => {
  return (
    <div
      className={`${styles.tour_guide_main}`}
      role="region"
      aria-labelledby="tour-guides-heading"
    >
      {/* Section heading */}
      <span className={`${styles.tour_guide}`}>Tour Guides</span>

      {/* Reviews list */}

      {REVIEW?.map((item) => (
        <div
          key={item.id}
          className={`${styles.tour_main}`}
          role="list"
          aria-label="Tour guide reviews"
        >
          <div className={`${styles.review_img_1}`}>
            <Image
              src="/img4.png"
              width={60}
              height={60}
              alt="userimg"
              className={`${styles.user_img}`}
            ></Image>
            <div className={`${styles.user_review}`}>
              <div className={`${styles.user_name}`}>{item?.name}</div>
              <div className={`${styles.user_location}`}>
                <Image
                  src={"/location.png"}
                  width={13}
                  height={16}
                  alt="location"
                ></Image>
                <p>{item?.location}</p>
              </div>
            </div>
          </div>
          <div className={`${styles.rating}`}>
            <Image
              src={"/rating.png"}
              width={15}
              height={15}
              alt="rating"
            ></Image>
            <Image
              src={"/rating.png"}
              width={15}
              height={15}
              alt="rating"
            ></Image>
            <Image
              src={"/rating.png"}
              width={15}
              height={15}
              alt="rating"
            ></Image>
            <Image
              src={"/star.png"}
              width={15}
              height={15}
              alt="rating"
            ></Image>
            <span>{item?.rate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogReview;
