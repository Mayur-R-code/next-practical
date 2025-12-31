import React from "react";
import styles from "@/app/component/comments/comments.module.css";
import Image from "next/image";
import { commentsData } from "@/app/data/userSliderData";
const Comments = () => {
  return (
    <section className="workouts-container" aria-labelledby="comments-heading">
      {/* Section header */}

      <div className={`${styles.comment_main}`}>
        <span></span>
        <div className={`${styles.comment__main}`}>Comments</div>
      </div>
      {/* Comments list */}

      {commentsData?.map((item) => (
        <div
          className={`${styles.comments}`}
          key={item?.id}
          role="list"
          aria-label="User comments"
        >
          <Image src="/img4.png" width={60} height={60} alt="user"></Image>
          <div style={{ width: "100%" }}>
            <div className={`${styles.comments_name_1}`}>
              <div className={`${styles.comments_name}`}>
                <span>{item?.name}</span>{" "}
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
                  <span>(4)</span>
                </div>
              </div>
              <span>{item?.date}</span>
            </div>
            <p>{item?.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comments;
