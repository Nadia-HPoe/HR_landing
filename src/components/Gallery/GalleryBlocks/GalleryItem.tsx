import { useState } from "react";
import styles from "../gallery.module.scss";
import Modal from "./GalleryModal";

export interface SlideProps {
  src: string;
}

const GalleryItem: React.FC<SlideProps> = ({ src }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = (e: React.MouseEvent | React.KeyboardEvent) => {
    // Stop the click from bubbling into the scrolling track so the
    // carousel doesn't accidentally shift position on open.
    e.stopPropagation();
    setOpen(true);
  };

  return (
    <>
      <div
        className={styles.slide}
        onClick={handleOpen}
        tabIndex={0}
        role="button"
        aria-label="Open preview"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpen(e);
        }}
      >
        <img className={styles.slide_img} src={src} alt="" draggable={false} />
      </div>

      {/* Modal is rendered outside the slide div so it never inherits overflow:hidden */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <img
          className={styles.slide_img}
          src={src}
          alt="Preview"
          style={{
            maxWidth: "70vw",
            maxHeight: "70vh",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Modal>
    </>
  );
};

export default GalleryItem;
