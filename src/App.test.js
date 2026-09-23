import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the image slider heading", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: /image slider/i })).toBeInTheDocument();
});
