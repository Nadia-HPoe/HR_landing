import { useState } from "react";
import useWindowWidth from "../../../hooks/useWindowWidth";
import styles from "../gallery.module.scss";
import GalleryItem from "./GalleryItem";
import img1 from "../../../assets/images/diploma1.jpg";
import img2 from "../../../assets/images/diploma2.jpg";
import img3 from "../../../assets/images/diploma3.jpg";
import img4 from "../../../assets/images/diploma4.jpg";
import img5 from "../../../assets/images/diploma5.jpg";
import img6 from "../../../assets/images/diploma6.jpg";
import img7 from "../../../assets/images/diploma7.jpg";
import img8 from "../../../assets/images/diploma8.jpg";
import img9 from "../../../assets/images/diploma9.jpg";
import arrowl from "../../../assets/images/arrow_left.png";
import arrowr from "../../../assets/images/arrow_right.png";
type Slide = {
  src: string;
};

const slidesData: Slide[] = [
  { src: img8 },
  { src: img9 },
  { src: img1 },
  { src: img4 },
  { src: img3 },
  { src: img2 },
  { src: img6 },
  { src: img7 },
  { src: img5 },
];

function GalleryCarousel() {
  const width = useWindowWidth();

  let IMAGES_PER_SCREEN = 3;
  if (width <= 767) {
    IMAGES_PER_SCREEN = 1;
  } else if (width <= 1439) {
    IMAGES_PER_SCREEN = 2;
  }

  const [page, setPage] = useState<number>(0);
  const totalPages = Math.ceil(slidesData.length / IMAGES_PER_SCREEN);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const startIdx = page * IMAGES_PER_SCREEN;
  const endIdx = startIdx + IMAGES_PER_SCREEN;
  const visibleSlides = slidesData.slice(startIdx, endIdx);

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel_container}>
        <button
          className={styles.button}
          aria-label='Previous'
          onClick={handlePrev}
          disabled={page === 0}
        >
          <img src={arrowl} alt='' />
        </button>
        <div className={styles.sliders}>
          {visibleSlides.map((slide, index) => (
            <GalleryItem key={startIdx + index} src={slide.src} />
          ))}
        </div>
        <button
          className={styles.button}
          aria-label='Next'
          onClick={handleNext}
          disabled={page === totalPages - 1}
        >
          <img src={arrowr} alt='' />
        </button>
      </div>
    </section>
  );
}

export default GalleryCarousel;
