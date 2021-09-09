import React from 'react';
import styled from 'styled-components';

const WrapperHeader=styled.div`
    h1{
        font-size: 5rem;
    }
`

const Header = () => {
    return (
        <WrapperHeader>
            <h1>Nasa Astronomy Photo Of The Day</h1>
        </WrapperHeader>
           
    )
}

export default Header
