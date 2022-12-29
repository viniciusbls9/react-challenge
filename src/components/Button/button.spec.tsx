import { render } from "@testing-library/react";
import Button from ".";

describe("Button component", () => {
  test("should render label Button correct", () => {
    const { getByText } = render(<Button label="Login" />);

    expect(getByText(/login/i)).toBeInTheDocument();
  });
});
