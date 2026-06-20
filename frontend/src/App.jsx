import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import Admin from "./pages/Admin"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/menu"
          element={<Menu />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/forgot"
          element={<ForgotPassword />}
        />
        <Route
          path="/admin"
          element={<Admin />}
/>

      </Routes>

    </BrowserRouter>

  )

}

export default App