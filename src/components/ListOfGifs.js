import getGifs from "../getGifs";
import Gif from "./Gifs";
import React,{ useEffect, useState } from "react";

export default function ListOfGifs({keyword}){
    const [gifs, setGifs]=useState([])

    useEffect(function (){
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
       },[keyword])

    return  gifs.map(({id, title, url}) =>
        <Gif 
        id={id}
        key={id}
        title={title}
        url={url}        
        />
      )
}