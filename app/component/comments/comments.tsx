import React from "react";
import styles from "@/app/component/comments/comments.module.css";
import Image from "next/image";
const Comments = () => {
  return (
    <section className="workouts-container">
      <div className={`${styles.comment__main}`}>Comments</div>
      <div className={`${styles.comments}`}>
        <Image src="/img4.png" width={60} height={60} alt="user"></Image>
        <div>
          <div className={`${styles.comments_name_1}`}>
            <div className={`${styles.comments_name}`}>
              <span>Kang Haerin</span>{" "}
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
            <span>22 Jul 2022</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Comments;
