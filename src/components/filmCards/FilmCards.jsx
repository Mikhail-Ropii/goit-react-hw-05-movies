import propTypes from 'prop-types';
import css from '../styles.module.css';

const FilmCards = ({ filmDetails }) => {
  const { title, poster_path, vote_average, genres, overview } = filmDetails;

  return (
    <div className={css.filmDetails}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : 'https://cdn.pixabay.com/photo/2012/04/12/13/16/clapperboard-29986_1280.png'
        }
        alt={title}
        width="300"
      ></img>
      <div className={css.filmDescription}>
        <h2>{title}</h2>
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres.map(el => el.name).join(' ')}</p>
      </div>
    </div>
  );
};

FilmCards.propTypes = {
  filmDetails: propTypes.object,
};

export default FilmCards;
