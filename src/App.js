import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "./ThemeContext";

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100hw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  text-align:center;
  h1 {
    color: ${props => props.theme.body};
    padding: 20px 20px;
  }
`;
const Button = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 550px 700px;
  cursor: pointer;
`;
const App = () => {
  const themeState = useTheme();

  return (
    <Wrapper>
      <h1>{ themeState.dark === true ? "Happy Birthday Shivang" : "Turn the Lights On!!"}</h1>
      <div>
        <Button onClick={() => themeState.toggle()}>
          {"Click Me"}
        </Button>
      </div>
    </Wrapper>
  );
};

export default App;
