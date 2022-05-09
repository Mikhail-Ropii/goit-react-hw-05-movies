import * as Api from '../services/Api';
import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import FilmCards from 'components/filmCards/FilmCards';

export default function MovieDetailsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [filmDetails, setFilmDetails] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      try {
        const filmDetails = await Api.getDetailsById(movieId);
        setFilmDetails(filmDetails);
      } catch (error) {}
    }
    fetchDetails();
  }, [movieId]);

  const onGoBack = () => {
    if (!location.state) {
      navigate('/');
      return;
    }
    navigate(location.state.from);
  };

  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go Back
      </button>
      {filmDetails && <FilmCards filmDetails={filmDetails} />}
      <hr></hr>
      <h4>Additional information</h4>
      <ul>
        <li>
          <NavLink to="cast" state={{ from: location }}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={{ from: location }}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr></hr>
      <Outlet></Outlet>
    </>
  );
}
