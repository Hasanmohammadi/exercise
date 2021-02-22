import React from "react";
import styled from "styled-components";







interface CounterProps {
  length:number
}
const Counter = ({length} :CounterProps) => {
  const Div = styled.div`
    width: 100%;
    height: 5em;

  `;
  const H2 = styled.h2`
  padding: 1em ;
  font-family: cursive;
`;
  return (
    <Div>
      <H2>{length} birthdays today</H2>
    </Div>
  );
};

export default Counter;
