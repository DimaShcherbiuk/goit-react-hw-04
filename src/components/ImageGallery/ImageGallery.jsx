import ImageCard from "./ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul className={css["image-gallery"]}>
    {images.map(({ id, urls, slug }) => (
      <li key={id}>
        <ImageCard
          className={css["image-card"]}
          imgUrl={urls.small}
          imgDescr={slug}
          onClick={openModal}
        />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
