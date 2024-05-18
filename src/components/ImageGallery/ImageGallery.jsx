import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={css.list}>
    {images.map(({ id, urls, slug }) => (
      <li key={id} className={css.item}>
        <ImageCard urls={urls} imgDescr={slug} openModal={openModal} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
