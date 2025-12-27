import React from "react";
import Image from "next/image";
import styles from "@/app/component/blogPost/post.module.css";
import { DISCOVER_EXERCIES } from "@/app/data/post";
import UserCard from "../userCard/userCard";
import BlogCard from "../blogCard/blogCard";

const BlogPost = () => {
  return (
    <section className="section_bg">
      <div className={`${styles.workout_post} workouts-container`}>
        <div className={`${styles.workout}`}>
          <div className={`${styles.user__img}`}>
            <div className={`${styles.blog_author}`}>
              <Image
                src="/img2.jpg"
                width={32}
                height={32}
                alt="user-img"
              ></Image>
              <span className={`${styles.name}`}>ALEX CARTER</span>
            </div>
            <div className={`${styles.publish__date}`}>23 January 2025</div>
          </div>

          <div className={`${styles.item__txt}`}>
            {DISCOVER_EXERCIES.map((item) => {
              const isBoldText = item.id === 5;
              return (
                <p
                  className={isBoldText ? styles.bold_desc : styles.desc}
                  key={item.id}
                >
                  {" "}
                  {item.desc}
                </p>
              );
            })}
          </div>
          <div className={`${styles.user__card}`}>
            <UserCard />
          </div>
        </div>
        {/* <div className="blog__card_visible"> */}
          <BlogCard />
        {/* </div> */}
      </div>
      <div className={`${styles.user__card_1}`}>
        <UserCard />
      </div>
    </section>
  );
};

export default BlogPost;
