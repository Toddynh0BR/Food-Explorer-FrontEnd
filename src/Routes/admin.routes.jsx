import { Routes, Route } from 'react-router-dom'

import { HistoricAdmin } from '../pages/HistoricAdmin';
import { Favorites } from '../pages/Favorites';
import { HomeAdmin } from '../pages/HomeAdmin';
import { FoodAdmin } from '../pages/FoodAdmin';
import { EditPlate } from '../pages/EditPlate';
import { AddPlate } from '../pages/AddPlate';

export function AdminRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<HomeAdmin />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/historic" element={<HistoricAdmin />} />
      <Route path="/plate/:id" element={<FoodAdmin />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/addplate" element={<AddPlate />} />
    </Routes>
  )
}