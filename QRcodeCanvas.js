import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import  QRCode  from "qrcode";

export default function Canvas({text}){
    const canvasRef = useRef()
    useEffect   (()=>{
        QRCode.toCanvas(canvasRef.current,text,(error)=>{
            console.log(error)
        })
    },[text])
    return(
        <View>
            <canvas ref={canvasRef} id='canvas'></canvas>
        </View>
    );
}