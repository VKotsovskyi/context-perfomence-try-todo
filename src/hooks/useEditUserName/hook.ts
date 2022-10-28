import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContextWrapper';
import { editUserName } from '../../actions/userActions'

const useEditUserName = () => {
  const { dispatch } = useContext(UserContext)
  return editUserName(dispatch)
}

export default useEditUserName;