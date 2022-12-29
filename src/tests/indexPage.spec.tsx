import Index from "@/pages/index";

import { render } from "@testing-library/react";

describe("Index page", () => {
  test("should render correctly", () => {
    const { getByText, getByRole } = render(<Index />);

    expect(getByText(/Email/i)).toBeInTheDocument();
    expect(getByText(/password/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /login/i })).toBeInTheDocument();
  });
});
