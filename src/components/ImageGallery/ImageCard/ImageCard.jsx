// import css from "./ImageCard.module.css";

const ImageCard = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div onClick={handleClick}>
      <img src={imgUrl} alt={imgDescr} />
    </div>
  );
};

export default ImageCard;
