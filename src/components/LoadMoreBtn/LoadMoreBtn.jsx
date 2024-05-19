import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div>
      <button className={css.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default LoadMoreBtn;
