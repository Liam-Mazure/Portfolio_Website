import {useEffect, useRef, useState} from "react";
import p5 from "p5";

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
                                    <img src = "src/assets/css-3.png" alt = "CSS Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/html-5.png" alt = "HTML Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/js.png" alt = "JavaScript Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/TypeScript.png" alt = "TypeScript Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                </div>
                                <div className="flex flex-col">
                                    <img src = "src/assets/reactLogo.png" alt = "React Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/TailwindCSS.png" alt = "Tailwind Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/Figma.png" alt = "Figma Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                    <img src = "src/assets/p5JS.png" alt = "P5.js Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                </div>
                            </div>
                            
                        </div>
        
                        <div className="absolute top-0 left-1/2 flex flex-col">
                            <h2 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-2xl">Backend</h2>
                            <div className="self-center">
                                <img src = "src/assets/django.png" alt = "Django Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = "src/assets/sqlLogo.png" alt = "SQL Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = "src/assets/nodejs.png" alt = "Node.js Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = "src/assets/Express.png" alt = "Express Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                            </div>
                        </div>
                        <div className="absolute top-0 left-6/8 flex flex-col">
                            <h2 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-2xl">Other Technologies</h2>
                            <div className="self-center">
                                <img src = "src/assets/git.png" alt = "Git Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = "src/assets/python.png" alt = "Python Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
                                <img src = "src/assets/unity.png" alt = "Unity Logo" className=" bg-orange-400 border-2 border-blue-700 hover:border-white drop-shadow-lg drop-shadow-white hover:drop-shadow-blue-700 rounded-full h-20 w-20 p-2 m-3"></img>
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
                    </div>
                </div>
            </>
        )
}

export default LogoBackground;