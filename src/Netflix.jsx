import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";
const Netflix =()=>{
    return(
        <Card 
            key ={Sdata.id}
            imgsrc= {Sdata.imgsrc}
            title={Sdata.title}
            sname={Sdata.sname}
            link={Sdata.link} 
            />
        );
}

export default Netflix;