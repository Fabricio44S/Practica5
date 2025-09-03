import  {  useState } from 'react'

import './App.css'
import Canvas from "./components/Canvas.tsx";

function App() {

  const[colorPincel, setColorPincel] = useState("black");
  const[tamanioPincel, setTamanioPincel] = useState(5);
  const [backgroundImagen, setBackgroundImagen] = useState<string | null>(null);
  const [mod, setMod] = useState<"pincel" | "goma">("pincel");
  
  return (
    <>
        
        <div
        style={{
          textAlign: "center", marginTop: "20px",
          backgroundImage: backgroundImagen ? `url(${backgroundImagen})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh"
        }}>


        <div style={{textAlign: "center", marginTop: "20px",
        }}>
            <h1>Paint Mini</h1>
            <button type="button"
            style={{backgroundColor: mod === "pincel" ? "#4CAF50" : "#e0e0e0",
            color: mod === "pincel" ? "white" : "black",
            marginRight: "10px",}}
            onClick={() => setMod("pincel")}>Pincel</button>
            <button type="button"  
            style={{backgroundColor: mod === "goma" ? "#4CAF50" : "#e0e0e0", 
            color: mod === "pincel" ? "white" : "black",
            marginRight: "10px",}}
            onClick={() => setMod("goma")} >Goma</button>

            <div style={{marginBottom: "15px"}}>
              <label >
                color  Pincel: {" "}
                <input 
                type="color" 
                value={colorPincel}
                onChange={(e) => setColorPincel(e.target.value)}
                
                />
              </label>

               <label style={{marginLeft: "20px"}} >
                tam  Pincel: {" "}
                <input 
                type="number" 
                value={tamanioPincel}
                onChange={(e) => setTamanioPincel(Number(e.target.value))}
                
                />
              </label>

              <input type="file"
              accept="image/*" 
              onChange={(e) =>{
                if(e.target.files && e.target.files[0]){
                  const imagenUrl = URL.createObjectURL(e.target.files[0]);
                  setBackgroundImagen(imagenUrl);
              } }
                }
              />

              <Canvas colorPincel={colorPincel} tamanioPincel={tamanioPincel} mod={mod} ></Canvas>
            </div>

          </div>

          
        </div>
        
        


    
    </>
  )
}

export default App
