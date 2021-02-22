import  {Component} from "react"
import styled from 'styled-components';
import Button from "./button";
import Info from "./info";
import Text from "./text";

interface Iprops {
    data : any
}

const Div = styled.div`
-webkit-box-shadow: 0px 4px 15px 5px #BCBCBC; 
box-shadow: 0px 4px 15px 5px #BCBCBC;
`
const Image = styled.img`
width :100%; 
`

class CartTour extends Component <Iprops>{

// constructor(props:Iprops) {
//     super(props)

// }

    render(){
        console.log(this.props.data);
        
        return(
            <Div>
                <Image src= {this.props.data[0].image} />
                <Info/>
                <Text/>
                <Button/>
            </Div>
        )

        
    }
}

export default CartTour