import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Detail, Home, NotFound } from './pages';
import { routes } from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={`${routes.case}/:id`} element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
