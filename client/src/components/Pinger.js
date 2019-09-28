import axios from "axios";
import React from "react";


class Pinger extends React.Component{

    ping = (e) => {
        axios.get("/api/ping").then(res =>{
            console.log(res);
        }).catch(err =>{
            console.log(err);
        })
    }


    render(){
        return(<div><button onClick={this.ping}>Pinger</button></div>)
    }
}
export default Pinger;






