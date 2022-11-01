import { render, fireEvent, screen } from "@testing-library/react";
import AddItemCard from "../AddItemCard";
import { TaskStatus } from "../../../types/taskTypes";

test("It should change input value", () => {
  render(
    <AddItemCard onSubmitAdditional={() => {}} status={TaskStatus.Todo} />
  );
  fireEvent.change(screen.getByLabelText("todo-name-input"), {
    target: { value: "test 1" },
  });
  expect(screen.getByLabelText<HTMLInputElement>("todo-name-input").value).toBe(
    "test 1"
  );
});

test("It should fire callback", () => {
  const onSubmitAdditional = jest.fn();
  render(
    <AddItemCard
      onSubmitAdditional={onSubmitAdditional}
      status={TaskStatus.Todo}
    />
  );

  const input = screen.getByLabelText("todo-name-input");

  fireEvent.change(input, { target: { value: "test 1" } });
  fireEvent.click(screen.getByText(/save/i));

  expect(onSubmitAdditional).toHaveBeenCalledTimes(1);
});
