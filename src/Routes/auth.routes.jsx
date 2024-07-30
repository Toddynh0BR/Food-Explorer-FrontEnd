import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { NotFound } from '../pages/404';

export function AuthRoutes() {
  return (
    <Routes basename="/Food-Explorer-FrontEnd">
      <Route path="/" element={<SignIn />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}