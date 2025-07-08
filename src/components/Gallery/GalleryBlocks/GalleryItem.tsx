import { useState } from "react";
import styles from "../gallery.module.scss";
import Modal from "./GalleryModal";

export interface SlideProps {
  src: string;
}
const GalleryItem: React.FC<SlideProps> = ({ src }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={styles.slide}
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
        tabIndex={0}
        role='button'
        aria-label='Open preview'
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") setOpen(true);
        }}
      >
        <img className={styles.slide_img} src={src} alt='' />
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <img
            className={styles.slide_img}
            src={src}
            alt='Preview'
            style={{
              maxWidth: "70vw",
              maxHeight: "70vh",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Modal>
      </div>
    </>
  );
};
export default GalleryItem;
