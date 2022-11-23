import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PokeDetails, Pokedex } from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "pokedex",
      element: <Pokedex />,
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
