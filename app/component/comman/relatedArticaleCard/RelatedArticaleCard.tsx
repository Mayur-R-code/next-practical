import workoutFullbody from "@/assets/workout-fullbody.jpg";
import cardioRunning from "@/assets/cardio-running.jpg";
import mealPrep from "@/assets/meal-prep.jpg";
import coreStrength from "@/assets/core-strength.jpg";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  image: string | any;
}

const articles: Article[] = [
  {
    id: 1,
    title: "The Ultimate Guide To Full-Body Workouts",
    excerpt:
      "Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and advanced athletes alike.",
    author: "Alex Carter",
    image: "/a1.jpg",
  },
  {
    id: 2,
    title: "5 Tips For Better Cardio Sessions",
    excerpt:
      "Improve your cardio performance with these simple yet effective techniques to maximize stamina and burn more calories efficiently.",
    author: "Maya Lee",
    image: "/a2.jpg",
  },
  {
    id: 3,
    title: "Meal Prep Basics For Gym Enthusiasts",
    excerpt:
      "Fuel your workouts with balanced, easy-to-prepare meals. A guide on planning, prepping, and staying consistent with nutrition.",
    author: "Jordan Smith",
    image: "/a3.jpg",
  },
  {
    id: 4,
    title: "Building Core Strength: Exercises And Benefits",
    excerpt:
      "A strong core is essential for stability and injury prevention. Learn the best exercises to enhance your core strength and posture.",
    author: "Emma Rodriguez",
    image: "/a4.jpg",
  },
];

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className="article-card">
      <div className="article-image-wrapper">
        <img
          src={article.image}
          alt={article.title}
          className="article-image"
          loading="lazy"
        />
      </div>
      <div className="article-content">
        <h3 className="article-heading">{article.title}</h3>
        <p className="article-excerpt">{article.excerpt}</p>
        <span className="article-author">By {article.author}</span>
      </div>
    </article>
  );
};

const ArticleCard_default = ArticleCard;
export { ArticleCard_default as ArticleCard, articles };
