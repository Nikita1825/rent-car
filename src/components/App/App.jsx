import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense} from 'react';
import css from './app.module.css'
const HomePage = lazy(() => import('pages/Home/Home'))
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritePage = lazy(() => import('pages/Favorite'));



export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={css.navLink} to="/favorites">
            Favourite
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritePage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
