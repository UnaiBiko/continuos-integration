import { render, screen } from "@testing-library/react";
import App from "./App";
import { pokedexUtils } from "./pages/pokedex/Pokedex.utils";

test("renders pokedex page", () => {
  jest.spyOn(pokedexUtils, "getData").mockReturnValue([]);

  render(<App />);

  const pageTitle = screen.getByText("Buscador de Pokemons");

  expect(pageTitle).toBeInTheDocument();
});
