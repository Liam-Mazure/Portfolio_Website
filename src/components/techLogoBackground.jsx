import {useEffect, useRef, useState} from "react";
import p5 from "p5";
import CSSLogo from "../assets/css-3.png";
import HTMLLogo from "../assets/html-5.png";
import JSLogo from "../assets/js.png";
import TSLogo from "../assets/TypeScript.png";
import ReactLogo from "../assets/reactLogo.png";
import TailwindLogo from "../assets/TailwindCSS.png";
import FigmaLogo from "../assets/Figma.png";
import P5Logo from "../assets/p5JS.png";
import DjangoLogo from "../assets/django.png";
import SQLLogo from "../assets/sqlLogo.png";
import NodeLogo from "../assets/nodejs.png";
import ExpressLogo from "../assets/Express.png";
import GitLogo from "../assets/git.png";
import PythonLogo from "../assets/python.png";
import UnityLogo from "../assets/unity.png";


function LogoBackground(){
    const sketchRef = useRef();
    const palletColorRef = useRef('#FB923C')
    const brushSizeRef = useRef(50)
    const eraseValueRef = useRef()

    const [palletColor, setPalletColor] = useState('#FB923C')
    const [brushSize, setBrushSize] = useState(50)
    const [eraseValue, setEraseValue] = useState(false)

    useEffect(() => { palletColorRef.current = palletColor; }, [palletColor]);
    useEffect(() => { brushSizeRef.current = brushSize; }, [brushSize]);
    useEffect(() => { eraseValueRef.current = eraseValue; }, [eraseValue]);
    
    useEffect(() => {
        const logoSketch = (p) => {
            let width = sketchRef.current?.offsetWidth || window.innerWidth;
            let height = sketchRef.current?.offsetHeight || window.innerHeight;

            p.setup = () => {
                p.createCanvas(width,height)
                p.background(51, .4)
            }

            p.draw = () => {
                p.background(0, 0)
            }

            p.mouseDragged = () => {
                if (eraseValueRef.current) {
                    p.erase(255, 255);
                } else {
                    p.noErase();
                    p.fill(palletColorRef.current);
                }
                    p.noStroke();
                    p.ellipse(p.mouseX, p.mouseY, brushSizeRef.current, brushSizeRef.current);
            }

            p.doubleClicked = () => {
                p.clear()
            }

            p.windowResized = (p) => {
                let width = sketchRef.current?.offsetWidth || window.innerWidth;
                let height = sketchRef.current?.offsetHeight || window.innerHeight;
                p.resizeCanvas(width,height);
                
            }
        }

        const P5Logo = new p5(logoSketch, sketchRef.current)

        return () => {
            P5Logo.remove();
        }
    }, [])

        const changeColor = () => {
            setPalletColor(document.getElementById('colorSelect').value)
        }

        const changeBrushSize = () => {
            setBrushSize(document.getElementById('brushRadius').value)
        }
    
        return(
            <>
                <div ref={sketchRef} className="relative bg-transparent w-full h-auto z-50">
                    <div>
                        <div className="absolute top-0 left-1/8 flex flex-col">
                            <h2 className="text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-2xl self-center">Frontend</h2>
                            <div className="flex">
                                <div className="flex flex-col">
                                    <img src = {CSSLogo} alt = "CSS Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {HTMLLogo} alt = "HTML Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {JSLogo} alt = "JavaScript Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {TSLogo} alt = "TypeScript Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                </div>
                                <div className="flex flex-col">
                                    <img src = {ReactLogo} alt = "React Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {TailwindLogo} alt = "Tailwind Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {FigmaLogo} alt = "Figma Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = {P5Logo} alt = "P5.js Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                </div>
                            </div>
                            
                        </div>
        
                        <div className="absolute top-0 left-1/2 flex flex-col">
                            <h2 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-2xl">Backend</h2>
                            <div className="self-center">
                                <img src = {DjangoLogo} alt = "Django Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = {SQLLogo} alt = "SQL Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = {NodeLogo} alt = "Node.js Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = {ExpressLogo} alt = "Express Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                            </div>
                        </div>
                        <div className="absolute top-0 left-6/8 flex flex-col">
                            <h2 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-2xl">Other Technologies</h2>
                            <div className="self-center">
                                <img src = {GitLogo} alt = "Git Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = {PythonLogo} alt = "Python Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = {UnityLogo} alt = "Unity Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-20 bg-blue-700 shadow-md shadow-orange-400 rounded p-3">
                        <form className="flex justify-between gap-1 text-white text-shadow-sm text-shadow-orange-400 font-bold">
                            <label for = "brushRadius">Brush Size: </label>
                            <input onChange = {changeBrushSize} id="brushRadius" type="range" min = "5" max = "50" className="accent-orange-400"></input>

                            <label>Brush Color: </label>
                            <input onChange={changeColor} id = "colorSelect" type="color" value={palletColor}></input>

                            <label>Erase: </label>
                            <input className="accent-orange-400" id = "eraseOn" type="radio" value='On' name="erase" checked={eraseValue} onChange={() => setEraseValue(true)}></input>
                            <label for = 'eraseOn'>On</label>
                            <input className="accent-orange-400" id = "eraseOff" type="radio" value='Off' name="erase" checked={!eraseValue} onChange={() => setEraseValue(false)}></input>
                            <label for = 'eraseOff'>Off</label>
                        </form>
                        <p className="flex font-bold text-white text-shadow-orange-400 text-shadow-sm justify-start">Double Click Canvas -{'>'} Delete All</p>
                    </div>
                </div>
            </>
        )
}

export default LogoBackground;