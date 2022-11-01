import Tasks from "../tasks/Tasks";
import User from "../user/User";
import { HeaderContainer, BodyContainer } from "./styled";
import { getRandomQuote } from "../tasks/utils";

function App() {
  const quote = getRandomQuote();
  return (
    <>
      <HeaderContainer>
        <h1>Dashboard Name</h1>
        <p>{quote}</p>
        <User />
      </HeaderContainer>
      <BodyContainer>
        <div className="dashbordsList"></div>
        <Tasks />
      </BodyContainer>
    </>
  );
}

export default App;
