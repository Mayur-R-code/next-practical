"use client";

import { useEffect, useState } from "react";
import styles from "@/app/component/comments/comments.module.css";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { commentsData } from "@/app/data/userSliderData";

interface Comment {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  isStatic?: boolean;
}

const STORAGE_KEY = "comment_form_data";

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const loadComments = () => {
    let storedComments: Comment[] = [];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      storedComments = stored ? JSON.parse(stored) : [];
    } catch {
      storedComments = [];
    }

    const staticComments: Comment[] = commentsData.map((c) => ({
      ...c,
      rating: c.rating ?? 0,
      isStatic: true,
    }));

    setComments([...storedComments, ...staticComments]);
  };

  useEffect(() => {
    loadComments();

    const handleUpdate = () => loadComments();
    window.addEventListener("comments-updated", handleUpdate);

    const interval = setInterval(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        loadComments();
      }
    }, 1000);

    return () => {
      window.removeEventListener("comments-updated", handleUpdate);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    let storedComments: Comment[] = [];

    try {
      storedComments = stored ? JSON.parse(stored) : [];
    } catch {
      storedComments = [];
    }

    const staticComments = commentsData?.map((c) => ({
      ...c,
      rating: c.rating ?? 0,
      isStatic: true,
    }));

    setComments([...storedComments, ...staticComments]);
  }, []);

  const handleRating = (id: number, rating: number) => {
    setComments((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, rating } : item
      );

      const toStore = updated.filter((c) => !c.isStatic);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));

      return updated;
    });
  };

  return (
    <section className="workouts-container">
      <div className={styles.comment_main}>
        <span></span>
        <div className={styles.comment__main}>Comments</div>
      </div>

      {comments.map((item) => (
        <div className={styles.comments} key={item.id}>
          <Image src="/img4.png" width={60} height={60} alt="user" />

          <div style={{ width: "100%" }}>
            <div className={styles.comments_name_1}>
              <div className={styles.comments_name}>
                <span>{item.name}</span>

                <div className={styles.rating}>
                  {[1, 2, 3, 4, 5].map((star) => {
                    const filled = star <= item.rating;

                    return filled ? (
                      <FaStar
                        key={star}
                        size={18}
                        color="#FFC107"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRating(item.id, star)}
                      />
                    ) : (
                      <CiStar
                        key={star}
                        size={18}
                        color="#000"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleRating(item.id, star)}
                      />
                    );
                  })}

                  {item.rating > 0 && <span>({item.rating})</span>}
                </div>
              </div>

              <span>{item.date}</span>
            </div>

            <p>{item.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Comments;
