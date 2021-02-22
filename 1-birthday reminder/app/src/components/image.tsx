import React from 'react';
import styled from 'styled-components';

interface ImageProps {
  image : string
}


const Image = ({image}:ImageProps) => {

    const Image = styled.img`
    border-radius: 10em;
    width: 5em;
    height: 5em;
  `;
    return (
        <div>
             <Image src={image}></Image>
        </div>
    )
}

export default Image