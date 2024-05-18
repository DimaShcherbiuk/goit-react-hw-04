import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={css.list}>
    {images.map(({ id, urls, slug }) => (
      <li key={id} className={css.item}>
        <ImageCard imgUrl={urls.regular} imgDescr={slug} onClick={openModal} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
