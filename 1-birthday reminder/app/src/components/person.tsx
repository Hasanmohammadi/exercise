import React from "react";
import styled from "styled-components";
import Image from "./image";
import Info from "./info";


interface PersonsProps {
  id:number;
  name:string;
  age:number;
  img:string;
}




const Persons = ({id , name , age , img} : PersonsProps) => {
  const Div = styled.div`
    display: flex;
    align-items: center;
    margin: 1em 0px 0px 2em;
  `;

  return (
    <Div>
      <Image image={img} />
      <Info name={name} age={age} />
    </Div>
  );
};

export default Persons;
