import Banner from "./component/banner/banner";
import BlogPost from "./component/blogPost/blogPost";
import CommentForm from "./component/commentForm/commentForm";
import Comments from "./component/comments/comments";

export default function Home() {
  return (
    <>
      <Banner />
      <BlogPost />
      <Comments/>
      <CommentForm/>
    </>
  );
}
