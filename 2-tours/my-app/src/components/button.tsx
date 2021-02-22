import  {Component} from "react"
import styled from 'styled-components';




class Button extends Component{


    Btn = styled.button`
    width: 16em;
    height:2em;
    cursor: pointer;
    font-size: 1rem;
    color:#cc0000;
    border : 1px #cc0000 solid;
    background : white;
    border-radius : 5px;
    letter-spacing: 2px;
    word-spacing: 3px;
    margin: 1em 0px 2em 0px ;




    `

    render() {
        return(
            <this.Btn>Not Interested</this.Btn>
        )
    }
}

export default Button