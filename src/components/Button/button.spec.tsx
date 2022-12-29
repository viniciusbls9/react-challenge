import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button component", () => {
  test("should render label Button correct", () => {
    const { getByText } = render(<Button label="Login" />);

    expect(getByText(/login/i)).toBeInTheDocument();
  });

  test("should to call function when Button is clicked", async () => {
    const mockFunction = jest.fn();

    const { getByText } = render(
      <Button label="Login" onClick={mockFunction} />
    );

    await userEvent.click(getByText(/login/i));

    expect(mockFunction).toBeCalled();
  });

  test("should to disabled Button component", async () => {
    const mockFunction = jest.fn();

    const { getByText } = render(
      <Button label="Login" onClick={mockFunction} disabled />
    );

    await userEvent.click(getByText(/login/i));

    expect(mockFunction).not.toBeCalled();
  });
});
