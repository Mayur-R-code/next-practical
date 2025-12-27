"use client";
import Link from "next/link";
import styles from "@/app/component/header/header.module.css";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className={`${styles.workout_header}`}>
      <nav>
        <ul className={`${styles.nav_list}`}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              HOME
            </Link>
          </li>
          <span>/</span>
          <li>
            <Link
              href="/articals"
            >
              ARTICELS
            </Link>
          </li>
          <span>/</span>
        </ul>
        <div className="header_title">
          The Ultimate Guide to Full-Body Workouts
        </div>
      </nav>
    </header>
  );
};

export default Header;
