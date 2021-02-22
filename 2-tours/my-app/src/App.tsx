import { Component, useEffect } from "react";
import styled from "styled-components";

// npm install --save @types/styled-components
import "./App.css";
import CartTour from "./components/cart";


interface Istate {
  data: any;
}
class App extends Component<{}, Istate> {
  state = {
    data: [],
  };

   componentDidMount() {
      const getData = async () =>{
       const response = await fetch("https://course-api.com/react-tours-project");
       let x = await response.json();
       console.log(x);
       this.setState(() => {
         return {data : x}
       })
     }
     getData()

  }

  Div = styled.div`
    width: 50%;
    margin: auto;
    text-align: center;
    margin-bottom: 3em;
  `;
  Title = styled.h2`
    font-size: 2rem;
    color: #102a42;
  `;
  render() {




    return (
      <this.Div>
        <this.Title>Our Tours</this.Title>
        <CartTour data={this.state.data} />
      </this.Div>
    );
  }
}

export default App;
