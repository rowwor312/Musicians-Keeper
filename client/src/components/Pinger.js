import axios from "axios";
import React from "react";


class Pinger extends React.Component{
    componentDidMount(){
        axios.get("/ping").then(res =>{
            console.log(res);
        })
    }
    render(){
        return(<div>Pinger</div>)
    }
}
export default Pinger;






