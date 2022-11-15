import { render, screen } from "@testing-library/react";
import { PokeGrid } from "../PokeGrid";

describe("PokeGrid", () => {
  it("renders component.", () => {
    render(<PokeGrid />);

    const title = screen.getByText("Irrelevant");

    expect(title).toBeInTheDocument();
  });
});
