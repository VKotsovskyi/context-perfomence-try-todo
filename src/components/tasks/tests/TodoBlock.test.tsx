import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tasks from "../Tasks";
import TodoContext from "../../../contexts/TasksContextWrapper";

test("It shoud hide add button and show save", () => {
  render(<Tasks />);

  fireEvent.click(screen.getByText(/add item/i));

  expect(screen.queryByText(/add item/i)).not.toBeInTheDocument();
  expect(screen.getByText(/save/i)).toBeInTheDocument();
  expect(screen.getByLabelText("todo-name-input")).toBeInTheDocument();
});

test("It shoud add new item", () => {
  render(
    <TodoContext>
      <Tasks />
    </TodoContext>
  );

  fireEvent.click(screen.getByText(/add item/i));
  fireEvent.change(screen.getByLabelText("todo-name-input"), {
    target: { value: "test item name" },
  });
  fireEvent.click(screen.getByText(/save/i));

  expect(screen.getByText(/test item name/i)).toBeInTheDocument();
});
