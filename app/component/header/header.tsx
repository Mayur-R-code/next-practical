"use client";
import Link from "next/link";
import styles from "@/app/component/header/header.module.css";
import { usePathname } from "next/navigation";
const Header = () => {
  //Get current route path
  const pathname = usePathname();
  return (
    <header className={`${styles.workout_header}`} role="banner">
      <nav aria-label="Primary navigation">
        <ul className={`${styles.nav_list}`}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.active : ""}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              HOME
            </Link>
          </li>
          <span aria-hidden="true">/</span>
          <li>
            <Link
              href="/"
              aria-current={pathname === "/articals" ? "page" : undefined}
            >
              ARTICELS
            </Link>
          </li>
          <span aria-hidden="true">/</span>
        </ul>
        <div className="header_title" aria-live="polite">
          The Ultimate Guide to Full-Body Workouts
        </div>
      </nav>
    </header>
  );
};

export default Header;
