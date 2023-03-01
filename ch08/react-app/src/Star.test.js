import { render } from "@testing-library/react";
import Star from "./Star";

test("renders an h1", () => {
  const { getByText } = render(<Star />);
  const h1 = getByText(/Star/);
  expect(h1).toHaveTextContent("Star");
});
