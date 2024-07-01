import { Routes, Route } from 'react-router-dom'

import { HomeClient } from '../pages/HomeClient'
import { FoodClient } from '../pages/FoodClient'

export function AppRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/Food-Explorer-FrontEnd/" element={<HomeClient />} />
      <Route path="/plate/:id" element={<FoodClient />} />
    </Routes>
  )
}