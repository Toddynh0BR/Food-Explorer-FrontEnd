import { Routes, Route } from 'react-router-dom';

import { HistoricClient } from '../pages/HistoricClient';
import { HomeClient } from '../pages/HomeClient';
import { FoodClient } from '../pages/FoodClient';
import { Favorites } from '../pages/Favorites';
import { Payment } from '../pages/Payment';
import { NotFound } from '../pages/404';
import { Index } from '../pages/Index';

export function AppRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<HomeClient />} />
      <Route path="/historic" element={<HistoricClient />} />
      <Route path="/plate/:id" element={<FoodClient />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search/:index" element={<Index />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}