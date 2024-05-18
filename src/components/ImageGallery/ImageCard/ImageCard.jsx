import css from "./ImageCard.module.css";

const ImageCard = ({ urls, imgDescr, openModal }) => {
  const handleClick = () => {
    openModal(urls.regular);
  };

  return (
    <div className={css.image} onClick={handleClick}>
      <img src={urls.small} alt={imgDescr} />
    </div>
  );
};

export default ImageCard;
