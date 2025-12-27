import Banner from "./component/banner/banner";
import BlogPost from "./component/blogPost/blogPost";
import CommentForm from "./component/commentForm/commentForm";
import Comments from "./component/comments/comments";
import RelatedArticales from "./component/relatedArticales/RelatedArticales";
import UserCard from "./component/userCard/userCard";
import styles from "@/app/component/blogPost/post.module.css";

export default function Home() {
  return (
    <>
      <main className="section_bg">
        <Banner />
        <BlogPost />
        <Comments />
        <div className={`${styles.user__card_mobile}`}>
          <UserCard />
        </div>
        <CommentForm />
        <RelatedArticales />
      </main>
    </>
  );
}
