import React from 'react';
const Addnum=(props)=>{
    var a=parseInt(props.a);
    var b=parseInt(props.b);
    return(
        <>
            <h1>Sum of {a} and {b} is {a+b}</h1>
        </>
    );
};
const Subnum=(props)=>{
    var a=parseInt(props.a);
    var b=parseInt(props.b);
    return(
        <>
            <h1>Subtraction of {a} and {b} is {a-b}</h1>
        </>
    );
};
const Mulnum=(props)=>{
    var a=parseInt(props.a);
    var b=parseInt(props.b);
    return(
        <>
            <h1>Multiplication of {a} and {b} is {a*b}</h1>
        </>
    );
};
const Divnum=(props)=>{
    var a=parseInt(props.a);
    var b=parseInt(props.b);
    return(
        
        <>
            <h1>Division of {a} and {b} is {a/b}</h1>
        </>
    );
};
export {Addnum,Subnum,Mulnum,Divnum};