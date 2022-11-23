import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokeDetails, Pokedex } from "./pages";
import { Default } from "./pages/default/Default";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Default />,
      index: true,
    },
    {
      path: "pokedex",
      element: <Pokedex />,
      index: true,
    },
    {
      path: "pokedex/:name",
      element: <PokeDetails />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
