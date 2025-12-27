import React from "react";
import styles from "@/app/component/relatedArticales/articale.module.css";
import { ArticleCard, articles } from "../comman/relatedArticaleCard/RelatedArticaleCard";
const RelatedArticales = () => {
  return (
    <section className={`${styles.related_article_main}`}>
      <div className={`${styles.article_container}`}>
        <h2 className={`${styles.article_title}`}>Related articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default RelatedArticales;
