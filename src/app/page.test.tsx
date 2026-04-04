import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home landing", () => {
  it("renders the main hero and primary contact action", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /сайты и приложения для частных клиентов/i,
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
        name: /5 000 ₽ это старт простой страницы. приложение не должно притворяться дешевым/i,
      }),
    ).toBeTruthy();

    expect(
      screen.getByText(/можно начать с сайта, а приложение сделать позже/i),
    ).toBeTruthy();
  });
});
