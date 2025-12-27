import Image from "next/image";
import styles from "@/app/component/blogCard/card.module.css";
import { BLOG_DATA } from "@/app/data/post";
import BlogReview from "../blogReview/blogReview";
import BlogCardSlider from "../comman/blogCardSlider/BlogCardSlider";
const BlogCard = () => {
  return (
    <div className={`${styles.blog_card_main}`}>
      <div className={`${styles.explore__more}`}>Explore more </div>
      <div className={`${styles.blog_card_small}`}>
        {BLOG_DATA.map((item) => (
          <div key={item.id}>
            <Image
              src={item.img}
              width={301}
              height={165}
              alt="blog-img"
              className={`${styles.blog__img}`}
            ></Image>
            <div className={`${styles.blog__card}`}>
              <span className={`${styles.blog_date}`}>{item.tag} </span>
              <span className={`${styles.blog_date_time}`}>{item.date} </span>
              <p className={`${styles.card_desc}`}>{item.desc} </p>
            </div>
          </div>
        ))}
      </div>
      <BlogCardSlider/>
      <BlogReview />
    </div>
  );
};

export default BlogCard;
