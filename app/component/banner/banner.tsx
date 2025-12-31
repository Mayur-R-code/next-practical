import Image from "next/image";
import styles from "@/app/component/banner/banner.module.css";
const Banner = () => {
  return (
    <div
      className={`${styles.workout__banner}`}
      role="img"
      aria-label="Workout banner image"
    >
      {/* Banner image */}
      <Image src="/image1.jpg" width={2653} height={560} alt="banner"></Image>
    </div>
  );
};

export default Banner;
