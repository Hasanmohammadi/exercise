import React from "react";
import styled from "styled-components";
import Persons from "./person";
import Btn from "./btn";
import Counter from "./counter";


  interface ListProps {
    array:any[];
    length:number;
    clear:Function;
  }


const List = ({array , length , clear} :ListProps) => {
  const Container = styled.div`
    width: 28em;
    border-radius: 4px;
    background:  #f28ab2;
    margin: auto;
    margin-top: 6em;
    margin-bottom: 6em;
    align-items: center;
    box-shadow: 0px 4px 9px 2px #444444;
  `;
const person = array.map(p =><Persons id={p.id} name={p.name} age={p.age} img={p.image} /> )
  return (
    <div>
      <Container>
        <Counter length = {length} />
        {person}
        <Btn clearAll = {clear} />
      </Container>
    </div>
  );
};

export default List;
