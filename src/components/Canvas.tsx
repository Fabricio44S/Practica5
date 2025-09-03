import React, { useEffect, useRef, useState } from "react";

interface CanvasProps{
    colorPincel: string;
    tamanioPincel: number;
    mod: "pincel" | "goma";
}

export default function Canvas ({colorPincel, tamanioPincel, mod}: CanvasProps) {
//  HTMLCanvasElement maneja la parte del Doom
const referenciaCanvas = useRef<HTMLCanvasElement | null>(null); 
const [estaDibujado, setEstaDibujando] = useState(false);


useEffect((): void => {
    const canvas = referenciaCanvas.current;
    if(!canvas) return;
    const contexto = canvas.getContext("2d");
    if(!contexto) return;

    contexto.lineCap = "round";
    contexto.lineJoin = "round";
    contexto.fillStyle = "#ffffff";
    contexto.fillRect(0,0, canvas.width, canvas.height);

}, []);

const iniciarDibujo  = (events: React.MouseEvent<HTMLCanvasElement>): void => {
const Canvas = referenciaCanvas.current;
if(!Canvas) return;
const contexto = Canvas.getContext("2d");
if(!contexto) return;

contexto.beginPath();
contexto.moveTo(events.nativeEvent.offsetX, events.nativeEvent.offsetY);
if(mod === "goma"){
contexto.strokeStyle = "#ffffff";
}else{
contexto.strokeStyle =  colorPincel;
}
contexto.lineWidth = tamanioPincel;
setEstaDibujando(true);
}

const dibujar = (events: React.MouseEvent<HTMLCanvasElement>): void => {
if(!estaDibujado) return;
const Canvas = referenciaCanvas.current;
if (!Canvas) return;
const contexto = Canvas.getContext("2d");
if(!contexto) return;

if(mod === "goma"){
    contexto.strokeStyle = "#ffffff";
}else{
    contexto.strokeStyle =  colorPincel;
}

contexto.lineTo(events.nativeEvent.offsetX, events.nativeEvent.offsetY);
contexto.stroke();

}

const detenerDibujo = (): void => {
  if (!estaDibujado) return;
  const Canvas = referenciaCanvas.current;
  if (!Canvas) return;
  const contexto = Canvas.getContext("2d");
  if (!contexto) return;

  contexto.closePath();   // 👈 cierra la línea
    setEstaDibujando(false);
}

return(
    <canvas ref={referenciaCanvas}
    width={800}
    height={600}
    style={{
        border: "1px solid #333",
        borderRadius: 6,
        display: "block",
        background: "#fff"
    }}
    onMouseDown={iniciarDibujo}
    onMouseMove={dibujar}
    onMouseUp={detenerDibujo}
    onMouseLeave={detenerDibujo}
    >
    </canvas>

);

// const Canvas = () => {

//     return{
        
//     };
// };

};