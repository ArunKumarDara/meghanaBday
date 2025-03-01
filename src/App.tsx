import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginPage from "./app/login/Page"
import LoadingSpinner from "./components/loading";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

const HomePage = lazy(() => import("./app/home/Page"));


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/meghana"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <HomePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
