import React from "react";
import styled from "styled-components";

interface InfoProps {
  name: string;
  age: number;
}

const Info = ({ name, age }: InfoProps) => {
  const Div = styled.div`
    margin: 0px 0px 0px 10px;
  `;
  return (
    <Div>
      <p>{name}</p>
      <p>{`${age}  years old`}</p>
    </Div>
  );
};

export default Info;
