import { NavLink, Outlet } from 'react-router-dom';
import css from '../components/styles.module.css';

export const Layout = () => {
  return (
    <>
      <div className={css.container}>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.navLink)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? css.active : css.navLink)}
          to="/movies"
        >
          Movies
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
};
