import { Routes, Route } from 'react-router-dom';

import { HistoricClient } from '../pages/HistoricClient';
import { HomeClient } from '../pages/HomeClient';
import { FoodClient } from '../pages/FoodClient';
import { Favorites } from '../pages/Favorites';
import { Payment } from '../pages/Payment';

export function AppRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<HomeClient />} />
      <Route path="/historic" element={<HistoricClient />} />
      <Route path="/plate/:id" element={<FoodClient />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  )
}