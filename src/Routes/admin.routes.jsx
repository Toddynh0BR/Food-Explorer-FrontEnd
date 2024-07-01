import { Routes, Route } from 'react-router-dom'

import { HomeAdmin } from '../pages/HomeAdmin'
import { FoodAdmin } from '../pages/FoodAdmin'
import { EditPlate } from '../pages/EditPlate'
import { AddPlate } from '../pages/AddPlate'

export function AdminRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/Food-Explorer-FrontEnd/" element={<HomeAdmin />} />
      <Route path="/plate/:id" element={<FoodAdmin />} />
      <Route path="/editplate/:id" element={<EditPlate />} />
      <Route path="/addplate" element={<AddPlate />} />
    </Routes>
  )
}