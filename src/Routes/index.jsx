import { BrowserRouter } from "react-router-dom";

import { AdminRoutes } from "./admin.routes";


export function Routes() {
  return (
    <BrowserRouter>
      <AdminRoutes />
    </BrowserRouter>
  )
}