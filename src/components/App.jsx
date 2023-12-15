import { NavLink, Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

const HomePage = lazy(() => import('pages/Home'))
const CatalogPage = lazy(() => import('pages/Catalog'));
const FavoritePage = lazy(() => import('pages/Favorite'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorites">Favourite</NavLink>
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
