import style from './LoadMoreBtn.module.scss';

type Props = {
  onClick: () => Promise<void>,
};

function LoadMoreBtn({ onClick }: Props) {
  return (
    <button
      className={style['load-more-btn']}
      type="button"
      onClick={onClick}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn;
