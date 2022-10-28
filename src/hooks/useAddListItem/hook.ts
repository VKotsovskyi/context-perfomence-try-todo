import { useContext } from 'react';
import { TodoContext } from '../../contexts/TodoContextWrapper';
import { addListItem } from '../../actions/todoActions';

const useAddListItem = () => {
  const { dispatch } = useContext(TodoContext)
  return addListItem(dispatch)
}

export default useAddListItem;