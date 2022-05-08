import { SpinningCircles } from 'react-loading-icons';
import css from '../styles.module.css';

function Loader() {
  return (
    <div className={css.loaderWrap}>
      <SpinningCircles
        className="loader"
        height="10em"
        width="10em"
        stroke="#000000"
        fill="#0a9be4"
      />
      <p>Loading</p>
    </div>
  );
}

export default Loader;
