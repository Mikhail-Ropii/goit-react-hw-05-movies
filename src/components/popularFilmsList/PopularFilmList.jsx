import { Link, useLocation } from 'react-router-dom';

const PopularFilmList = ({ filmsList }) => {
  const location = useLocation();
  return (
    <ul>
      {filmsList.results.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PopularFilmList;
