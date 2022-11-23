import { render, screen } from "@testing-library/react";
import { PokeGrid } from "../PokeGrid";
import { pokeGridUtils } from "../PokeGrid.utils";

describe.skip("PokeGrid", () => {
  it("renders component.", async () => {
    jest
      .spyOn(pokeGridUtils, "getPokemonsDetails")
      .mockReturnValue([{ name: "irrelevantPokemon" }]);

    render(<PokeGrid pokemons={[{}]} />);

    const pokeName = await screen.findByText("irrelevantPokemon");

    expect(pokeName).toBeInTheDocument();
  });
});
