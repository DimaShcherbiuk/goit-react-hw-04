import css from "./LoadMoreBtm.module.css";

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div className={css.center}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={css["load-more-btn"]}
      >
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
