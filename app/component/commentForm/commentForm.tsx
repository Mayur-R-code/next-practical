import CommonInput from "@/app/commoncomponent/input/input";
import Image from "next/image";

const CommentForm = () => {
  return (
    <section className="workouts-container">
      <div className={`comment_form`}>Comments</div>
      <form action="">
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <CommonInput type="text" />
          </div>
          <div className="email__lable">
            <label htmlFor="email">Email</label>
            <CommonInput type="email" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Comments</label>
          <div>
            <textarea placeholder="Search Anything..." rows={5} />
          </div>
        </div>
      </form>
      <div className="main__rate">
        <div className="rate_artical">
          <div className="rate_emoji">
            <span>Rate the usefulness of the article</span>
            <div className="emoji_list">
              <Image
                src={"/emoji.png"}
                width={16}
                height={16}
                alt="emoji"
              ></Image>
              <Image
                src={"/icon2.png"}
                width={16}
                height={16}
                alt="emoji"
              ></Image>
              <Image
                src={"/icon3.png"}
                width={16}
                height={16}
                alt="emoji"
              ></Image>
              <Image
                src={"/icon4.png"}
                width={16}
                height={16}
                alt="emoji"
              ></Image>
              <button className="form_submit__btn">
                <Image
                  src={"/icon6.png"}
                  width={16}
                  height={16}
                  alt="img"
                ></Image>{" "}
                Good
              </button>
            </div>
          </div>
        </div>
        <button className="form_submit__btn_1">
          <Image src={"/icon7.png"} width={16} height={16} alt="img"></Image>{" "}
          Send
        </button>
        <button className="form_submit__btn_2">
          <Image src={"/icon7.png"} width={16} height={16} alt="img"></Image>{" "}
          Send Comment
        </button>
      </div>
    </section>
  );
};

export default CommentForm;
