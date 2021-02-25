import { Component } from "react";
import styled from "styled-components";

interface Iprops {
  data: any;
  deletItem: any;
  shortText: any;
}

const Div = styled.div`
  -webkit-box-shadow: 0px 4px 15px 5px #bcbcbc;
  box-shadow: 0px 4px 15px 5px #bcbcbc;
  margin: 3em 0px;
`;
const Image = styled.img`
  width: 100%;
  height: 21em;
`;

class CartTour extends Component<Iprops> {
  Title = styled.h4`
    display: contents;
    marigin-left: 3px;
    font-style: italic;
    word-spacing: 4px;
  `;
  Price = styled.span`
    font-weight: 700;
    color: #49a6e9;
    background: #ebf7ff;
  `;

  Div = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 2em;
    margin: 2em 0em 1em 0px;
  `;
  Divv = styled.div`
    display: flex;
    padding: 0px 2em;
  `;
  P = styled.p`
    color: #808080;
    text-align: justify;
  `;

  Btn = styled.button`
    width: 16em;
    height: 2em;
    cursor: pointer;
    font-size: 1rem;
    color: #cc0000;
    border: 1px #cc0000 solid;
    background: white;
    border-radius: 5px;
    letter-spacing: 2px;
    word-spacing: 3px;
    margin: 1em 0px 2em 0px;
  `;

  Span = styled.span`
    color: #49a6e9;
    cursor: pointer;
  `;

  firstData = [...this.props.data];

  render() {
    const image: Object = this.props.data.map((d: any): any => {
      return (
        <>
          <Div>
            <Image src={d.image} />
            <this.Div>
              <this.Title>{d.name}</this.Title>
              <this.Price>{d.price}</this.Price>
            </this.Div>
            <this.Divv>
              <this.P>
                {d.info}
                <this.Span
                  onClick={() =>
                    this.props.shortText(
                      d.info,
                      this.firstData,
                      d.id,
                      d.showText
                    )
                  }
                >
                  {!d.showText ? " Show Less" : "Read More"}
                </this.Span>
              </this.P>
            </this.Divv>
            <this.Btn onClick={() => this.props.deletItem(d.id)}>
              Not Interested
            </this.Btn>
          </Div>
        </>
      );
    });

    return <>{image}</>;
  }
}

export default CartTour;
