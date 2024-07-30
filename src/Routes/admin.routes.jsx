import { Routes, Route } from 'react-router-dom'

import { HistoricAdmin } from '../pages/HistoricAdmin';
import { Favorites } from '../pages/Favorites';
import { HomeAdmin } from '../pages/HomeAdmin';
import { FoodAdmin } from '../pages/FoodAdmin';
import { EditPlate } from '../pages/EditPlate';
import { AddPlate } from '../pages/AddPlate';
import { NotFound } from '../pages/404';
import { Index } from '../pages/Index';

export function AdminRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/historic" element={<HistoricAdmin />} />
      <Route path="/plate/:id" element={<FoodAdmin />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search/:index" element={<Index />} />
      <Route path="/addplate" element={<AddPlate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}