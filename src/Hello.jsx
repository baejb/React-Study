import React from 'react';

function Hello(){
    const PracticeStyle ={
        marginTop: '10px',
        backgroundColor: 'blue',
    };
    return( <>
        <div style={PracticeStyle}>Hello World!</div>
        <div style={PracticeStyle}>Hello World!</div>
        <div style={PracticeStyle}>Hello World!</div>
        </> 
    );

}
export default Hello;