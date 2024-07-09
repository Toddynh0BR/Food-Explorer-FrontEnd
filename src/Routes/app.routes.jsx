import { Routes, Route } from 'react-router-dom'

import { HomeClient } from '../pages/HomeClient'
import { FoodClient } from '../pages/FoodClient'

export function AppRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<HomeClient />} />
      <Route path="/plate/:id" element={<FoodClient />} />
    </Routes>
  )
}