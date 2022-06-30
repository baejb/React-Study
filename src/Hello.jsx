import React from 'react';
import styled from 'styled-components';


function Hello(){
    const StyledButton =styled.button`
        color:red;
        backgroud-color:gray;
    `;
    return <StyledButton>나만의 버튼</StyledButton>;

}
export default Hello;