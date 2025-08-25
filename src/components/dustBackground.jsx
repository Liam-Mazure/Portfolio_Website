import p5 from "p5";
import {useEffect, useRef} from 'react'

function DustBackground(){
    const sketchRef = useRef();

    useEffect(() => {
        const dustSketch = (p) => {
            let width = sketchRef.current?.offsetWidth || window.innerWidth;
            let height = sketchRef.current?.offsetHeight || window.innerHeight;

            p.setup = () => {
                p.createCanvas(width,height);
                p.background(30, 41, 57);

            }

            p.draw = () => {
                p.background(30,41,57,20);  // The last value (20) makes it semi-transparent for a fading effect

                p.stroke('orange');
                p.strokeWeight(2);

                for (let i = 0; i < 5; i++) { 
                    let x = p.random(width);
                    let y = p.random(height);
                    p.point(x, y);
                }
            }

            p.windowResized = () => {
                width = sketchRef.current?.offsetWidth || window.innerWidth;
                height = sketchRef.current?.offsetHeight || window.innerHeight;
                p.resizeCanvas(width, height);
                
                for (let i = 0; i < 5; i++) { 
                    let x = p.random(width);
                    let y = p.random(height);
                    p.point(x, y);
                }
            }
        }

        const P5Dust = new p5(dustSketch, sketchRef.current)

        return () => {
            P5Dust.remove();
        }
    }, [])

    return(
        <>
            <div ref={sketchRef} style={{position:"fixed", top:0, left:0, width: "100%", height: "100%", zIndex: -1}}></div>
        </>
    )
}

export default DustBackground