import { useEffect, useState } from 'react';
import PopularFilmList from 'components/popularFilmsList/PopularFilmList';
import * as Api from '../services/Api';

export default function HomePage() {
  const [popularFilms, setPopularFilms] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const popularFilms = await Api.getTrendFilms();
        setPopularFilms(popularFilms);
      } catch (error) {}
    }
    fetchFilms();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {popularFilms && <PopularFilmList filmsList={popularFilms} />}
    </>
  );
}
