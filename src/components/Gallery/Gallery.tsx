import styles from "./gallery.module.scss";
import GalleryBanner from "./GalleryBlocks/GalleryBanner";
import GalleryCarousel from "./GalleryBlocks/GalleryCarousel";
import GalleryInfo from "./GalleryBlocks/GalleryInfo";

function Gallery() {
  return (
    <section className={styles.gallery}>
      <GalleryBanner />
      <GalleryInfo />
      <GalleryCarousel />
    </section>
  );
}
export default Gallery;
