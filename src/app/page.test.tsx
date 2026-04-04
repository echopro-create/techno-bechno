import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home landing", () => {
  it("renders the main hero and primary contact action", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /строгий digital для частных клиентов/i,
      }),
    ).toBeTruthy();

    expect(
      screen.getByRole("link", {
        name: /telegram: @your_telegram/i,
      }),
    ).toBeTruthy();
  });

  it("renders pricing and faq content", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /минимальный вход по сайтам начинается от 5 000 ₽/i,
      }),
    ).toBeTruthy();

    expect(screen.getByText(/можно сначала сделать сайт, а приложение позже/i)).toBeTruthy();
  });
});
