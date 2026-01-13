import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { HomePage } from "./pages/HomePage/HomePage.jsx";
import { MenuPage } from "./pages/MenuPage/MenuPage.jsx";
import { OrderPage } from "./pages/OrderPage/OrderPage.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute.jsx";
import { AuthProvider } from "./components/AuthProvider/AuthProvider.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<HomePage />} index />
          <Route path="menu" element={<MenuPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="order" element={<OrderPage />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
