import React from "react";

export class ButtonClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const{
            label="Default",
            handleClick=()=>console.log("I am Default"),  
        }=this.props;
         return <button onClick={handleClick}>{label}</button>;
    }
}