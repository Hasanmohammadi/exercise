import React from "react";
import styled from "styled-components";

interface BtnProps {
  clearAll: any;
}

const Btn = ({ clearAll }: BtnProps) => {
  
  const Button = styled.button`
    width: 80%;
    height: 2.5em;
    color: #ff33bb;
    background: white;
    margin: 2em 0em 3em 2.5em;
    border-radius: 5px;
    border: 1px solid #ff33bb;
    cursor: pointer;
    font-size: larger;
  `;
  return (
    <div>
      <Button onClick={clearAll}>Clear All</Button>
    </div>
  );
};

export default Btn;
