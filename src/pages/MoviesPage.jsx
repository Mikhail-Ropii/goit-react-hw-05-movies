import * as Api from '../services/Api';
import { useEffect, useState } from 'react';
import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import css from '../components/styles.module.css';

export default function MoviesPage() {
  const [filmResults, setFilmResults] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams({});
  const location = useLocation();

  const onSearchChange = e => {
    setSearchValue(e.currentTarget.value);
  };

  const onSeachFilms = e => {
    e.preventDefault();
    setSearchParams({ query: searchValue.toLowerCase().trim() });
    setSearchValue('');
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const fetchByName = async () => {
      try {
        const filmResults = await Api.getByName(location.search.slice(1));
        setFilmResults(filmResults);
        if (filmResults.results.length === 0) {
          toast.warn('No results');
        }
      } catch (error) {}
    };
    fetchByName();
  }, [location.search]);

  return (
    <>
      <form className={css.input} onSubmit={onSeachFilms}>
        <input onChange={onSearchChange} value={searchValue}></input>
        <button type="submit">Search</button>
      </form>
      {filmResults && (
        <ul>
          {filmResults.results.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Outlet></Outlet>
    </>
  );
}
