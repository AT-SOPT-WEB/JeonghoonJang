import { createBrowserRouter, RouterProvider } from "react-router";
import PokemonDetail from "../pages/PokemonDetail";
import Home from "../pages/Home";

// 라우터 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
]);

export default router;
