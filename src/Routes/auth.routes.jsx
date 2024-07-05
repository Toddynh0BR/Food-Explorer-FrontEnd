import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export function AuthRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/Food-Explorer-FrontEnd/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  )
}