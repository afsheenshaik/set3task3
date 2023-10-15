import "../../src/App.css"
import React,{ useState } from 'react';
function Color() {
    
   let color = 'white';
   const [bgColor, setBgColor] = useState(color);
   const changeColor1 =()=>{
      let color1 = 'rgb(247, 50, 50)';
      setBgColor(color1);
    }
    const changeColor2 =()=>{
        let color2 = 'rgb(66, 247, 50)';
        setBgColor(color2);
    }
    const changeColor3 =()=>{
        let color3 = 'rgb(5, 5, 210)';
        setBgColor(color3);
    }
    const changeColor4 =()=>{
        let color4 = 'rgba(245, 255, 55, 0.873)';
        setBgColor(color4);
    }
    const changeColor5 =()=>{
        let color5 = 'rgb(203, 53, 198)';
        setBgColor(color5);
    }
    const changeColor6 =()=>{
        let color6 = 'rgb(50, 202, 202)';
        setBgColor(color6);
    }
    const changeColor7 =()=>{
        let color7 = 'rgb(215, 158, 13)';
        setBgColor(color7);
    }
    const changeColor8 =()=>{
        let color8 = 'rgb(65, 15, 75)';
        setBgColor(color8);
    }
    const changeColor9 =()=>{
        let color9 = 'rgb(239, 144, 144)';
        setBgColor(color9);
    }
    const changeColor10 =()=>{
        let color10 = 'rgb(51, 118, 36)';
        setBgColor(color10);
    }
    const changeColor11 =()=>{
        let color11 = 'rgb(243, 95, 36)';
        setBgColor(color11);
    }
    const changeColor12 =()=>{
        let color12 = 'rgb(13, 154, 179)';
        setBgColor(color12);
    }
    const changeColor13 =()=>{
        let color13 = 'rgba(116, 37, 37, 0.926)';
        setBgColor(color13);
    }
    const changeColor14 =()=>{
        let color14 = 'rgb(221, 140, 63)';
        setBgColor(color14);
    }
    const changeColor15 =()=>{
        let color15 = 'rgb(9, 83, 123)';
        setBgColor(color15);
    }
    const changeColor16 =()=>{
        let color16 = 'rgb(180, 160, 10)';
        setBgColor(color16);
    }
  return (
    <div className="App" style={{background: bgColor}} >
      <header className="App-header">
         <button class="btn btn-1" onClick={changeColor1}></button>
         <button class="btn btn-2" onClick={changeColor2}></button>
         <button class="btn btn-3" onClick={changeColor3}></button>
         <button class="btn btn-4" onClick={changeColor4}></button>
         <button class="btn btn-5" onClick={changeColor5}></button>
         <button class="btn btn-6" onClick={changeColor6}></button>
         <button class="btn btn-7" onClick={changeColor7}></button>
         <button class="btn btn-8" onClick={changeColor8}></button>
         <button class="btn btn-9" onClick={changeColor9}></button>
         <button class="btn btn-10" onClick={changeColor10}></button>
         <button class="btn btn-11" onClick={changeColor11}></button>
         <button class="btn btn-12" onClick={changeColor12}></button>
         <button class="btn btn-13" onClick={changeColor13}></button>
         <button class="btn btn-14" onClick={changeColor14}></button>
         <button class="btn btn-15" onClick={changeColor15}></button>
         <button class="btn btn-16" onClick={changeColor16}></button>
      </header>
    </div>
  );
}

export default Color;