import Index from "@/pages/index";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("Index page", () => {
  test("should render correctly", () => {
    const { getByText, getByRole } = render(<Index />);

    expect(getByText(/Email/i)).toBeInTheDocument();
    expect(getByText(/password/i)).toBeInTheDocument();
    expect(getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should buttonDisabled state change to true if login fields is completed", async () => {
    const setDisabledButton = jest.fn();
    const disabledButton: any = (useState: any) => [
      useState,
      setDisabledButton,
    ];
    jest.spyOn(React, "useState").mockImplementation(disabledButton);
    render(<input placeholder="email" defaultValue="" />);
    render(<input placeholder="password" defaultValue="" />);
    render(<button onClick={setDisabledButton(true)}>login</button>);

    const emailField = screen.getByPlaceholderText("email");
    const passwordField = screen.getByPlaceholderText(/password/i);

    const button = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailField, "test@gmail.com");
    await userEvent.type(passwordField, "Password123#");

    expect(emailField).toHaveValue("test@gmail.com");
    expect(passwordField).toHaveValue("Password123#");

    userEvent.click(button);

    expect(setDisabledButton).toHaveBeenCalledWith(true);
  });
});
