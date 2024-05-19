import css from "./ImageCard.module.css";

const ImageCard = ({ urls, imgDescr, openModal }) => {
  return (
    <div className={css.image}>
      <img
        src={urls.small}
        alt={imgDescr}
        onClick={() => {
          openModal(urls.regular);
        }}
      />
    </div>
  );
};

export default ImageCard;
