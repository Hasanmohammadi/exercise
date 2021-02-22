import { Component } from "react";
import styled from "styled-components";

class Info extends Component {
  Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 2em;
  margin: 2em 0em 1em 0px;

  

  `;

  Title = styled.h4`
  display: contents;
  marigin-left: 3px;
  font-style: italic;
  word-spacing: 4px;


  `;
  Price = styled.span`
  font-weight :700;
  color : #49a6e9;
  background : #ebf7ff;
  `;

  render() {
    return (
      <this.Div>
        <this.Title>Best Of Paris In 7 Days Tour</this.Title>
        <this.Price>$1,995</this.Price>
      </this.Div>
    );
  }
}

export default Info;
