import TodoBlock from './TodoBlock';
import { TodoContainer } from './styled'
import { getRandomQuote } from './utils'

const Todo = () => {
  const quote = getRandomQuote()
  return (
    <TodoContainer>
      <h1>TODO</h1>
      <p>{quote}</p>
      <TodoBlock />
    </TodoContainer>
  )
}

export default Todo;