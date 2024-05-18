import ImageCard from "./ImageCard/ImageCard";
// import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
  <ul>
    {images.map(({ id, urls, slug }) => (
      <li key={id}>
        <ImageCard imgUrl={urls.small} imgDescr={slug} onClick={openModal} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
