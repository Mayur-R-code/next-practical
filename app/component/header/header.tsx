import Link from "next/link";
import styles from "@/app/component/header/header.module.css";
const Header = () => {
  return (
    <header className={`${styles.workout_header}`}>
      <nav>
        <ul className={`${styles.nav_list}`}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <span>/</span>
          <li>
            <Link href="/articals">ARTICELS</Link>
          </li>
          <span>/</span>
        </ul>
        <div className="header_title">The Ultimate Guide to Full-Body Workouts</div>
      </nav>
    </header>
  );
};

export default Header;
