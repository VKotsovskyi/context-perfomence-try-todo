import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddItemCard from '../AddItemCard';

const setup = () => {
  const utils = render(<AddItemCard showAddButton={() => {}} />)
  const input = utils.getByLabelText('todo-name-input')
  return {
    input,
    ...utils,
  }
}

test('It should change input value', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'test 1'}})
  expect(input.value).toBe('test 1')
});

test('It should fire callback', () => {
  const showAddButtonCallback = jest.fn()
  render(<AddItemCard showAddButton={showAddButtonCallback} />)

  const input = screen.getByLabelText('todo-name-input')

  fireEvent.change(input, {target: {value: 'test 1'}})
  fireEvent.click(screen.getByText(/save/i))

  expect(showAddButtonCallback).toHaveBeenCalledTimes(1)
});
