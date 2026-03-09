import { useRef, useEffect } from "react";
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
import img10 from "../../../assets/images/diploma10.jpg";
import img11 from "../../../assets/images/diploma11.png";
import arrowl from "../../../assets/images/arrow_left.png";
import arrowr from "../../../assets/images/arrow_right.png";

type Slide = { src: string };

const slidesData: Slide[] = [
  { src: img8 },
  { src: img9 },
  { src: img10 },
  { src: img1 },
  { src: img4 },
  { src: img3 },
  { src: img2 },
  { src: img6 },
  { src: img7 },
  { src: img5 },
  { src: img11 },
];

// Duplicate the list so the seamless loop always has enough slides
const loopedSlides: Slide[] = [...slidesData, ...slidesData, ...slidesData];

function GalleryCarousel() {
  const width = useWindowWidth();
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);       // current translateX in px (negative = moved left)
  const isPausedRef = useRef<boolean>(false);

  // Card + gap sizes mirror the SCSS breakpoints
  let cardWidth = 600;
  let gap = 40;
  if (width <= 1099) {
    cardWidth = 300;
    gap = 24;
  } else if (width <= 1919) {
    cardWidth = 380;
    gap = 32;
  }

  const step = cardWidth + gap;           // px per card slot
  const totalOriginal = slidesData.length; // 11 cards
  const loopBoundary = totalOriginal * step; // reset point (one full original set)

  // Scroll speed in px/frame (~1px per frame @ 60 fps = ~60px/s)
  const SPEED = 0.6;

  // --- Auto-scroll animation loop ---
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Start from the middle copy so we can scroll left & right freely
    positionRef.current = loopBoundary;
    track.style.transform = `translateX(-${positionRef.current}px)`;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current += SPEED;

        // Seamless loop: when we've scrolled past two copies, jump back one copy
        if (positionRef.current >= loopBoundary * 2) {
          positionRef.current -= loopBoundary;
        }
        if (positionRef.current < 0) {
          positionRef.current += loopBoundary;
        }

        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  // --- Arrow navigation: jump one card slot at a time ---
  const handlePrev = () => {
    positionRef.current = Math.max(positionRef.current - step, 0);
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s ease";
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 420);
    }
  };

  const handleNext = () => {
    positionRef.current += step;
    if (trackRef.current) {
      trackRef.current.style.transition = "transform 0.4s ease";
      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`;
      setTimeout(() => {
        if (trackRef.current) trackRef.current.style.transition = "";
      }, 420);
    }
  };

  return (
    <section className={styles.carousel}>
      <div className={styles.carousel_container}>
        <button
          className={styles.button}
          aria-label="Previous"
          onClick={handlePrev}
        >
          <img src={arrowl} alt="" />
        </button>

        {/* Viewport — clips the scrolling track */}
        <div
          className={styles.sliders_viewport}
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          {/* Track — holds all looped slides, moved by rAF */}
          <div className={styles.sliders_track} ref={trackRef}>
            {loopedSlides.map((slide, index) => (
              <GalleryItem key={index} src={slide.src} />
            ))}
          </div>
        </div>

        <button
          className={styles.button}
          aria-label="Next"
          onClick={handleNext}
        >
          <img src={arrowr} alt="" />
        </button>
      </div>
    </section>
  );
}

export default GalleryCarousel;
