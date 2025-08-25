import p5 from "p5";
import Matter, { Body } from "matter-js";
import { useEffect, useRef, useState } from "react";
import '../App.css';


function ProjectBackground({title, text, img, video, className, link}){
    const sketchRef = useRef();
    const [scrollY, setScrollY] = useState(0);
    const [projectTitle, setProjectTitle] = useState(title)
    const [projectText, setProjectText] = useState(text)
    const [projectImg, setProjectImg] = useState(img)
    const [projectVideo, setProjectVideo] = useState(video)
    

    useEffect(() => {
        //Matter.js aliases setup
        const Engine = Matter.Engine;
        const Bodies = Matter.Bodies;
        const World = Matter.World;
        const Mouse = Matter.Mouse;
        const MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        const world = engine.world;
        engine.gravity.y = 0.01;
        engine.gravity.x = 0;


        const spotLightSketch = (p) => {
            let width = sketchRef.current?.offsetWidth || window.innerWidth;
            let height = sketchRef.current?.offsetHeight || window.innerHeight;
            let groundBottom, groundRight, groundLeft, groundTop;
            const wallThickness = 100;

            let bubbles = [];
            let totalAmount = 15;


            p.setup = () => {
                let canvas = p.createCanvas(width, height);
                p.background(20);
            
                groundBottom = Bodies.rectangle(width / 2, height + (wallThickness / 2), width, wallThickness, { isStatic: true });
                groundTop = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true });
                groundLeft = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
                groundRight = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
                
                for(let i = 0; i <= totalAmount; i++){
                    let x = Math.floor(width/2);
                    let y = Math.floor(height/2);
                    let radius = Math.floor(Math.random() * 51);
                    const bubble = Bodies.circle(
                        x,
                        y,
                        radius, 
                        {
                            restitution: 0.75,  // High bounciness
                            friction: 0.00001,     // Almost no surface resistance
                            frictionAir: 0.00001,   // Light air resistance to slow movement
                            density: 0.0005,     // Very low mass to make it floaty
                        }
                    );
                    bubbles.push(bubble);
                }

                let canvasMouse = Mouse.create(canvas.elt);
                canvasMouse.pixelRatio = p.pixelDensity();
                console.log(canvasMouse);
                let mConstraint = MouseConstraint.create(engine, {mouse: canvasMouse})
                
                World.add(world, [...bubbles, groundBottom, groundTop, groundLeft, groundRight, mConstraint]);
            };


            p.draw = () => {
                Engine.update(engine);
                
                p.background(20);

                for(let bubble of bubbles){
                    p.push();
                    p.fill(255, 128, 0);
                    p.noStroke();
                    p.circle(bubble.position.x, bubble.position.y, bubble.circleRadius * 2);
                    p.pop();
                }

                p.rectMode(p.CENTER);
                p.rect(groundBottom.position.x, groundBottom.position.y, width, wallThickness);
                p.rect(groundRight.position.x, groundRight.position.y, wallThickness, height);
                p.rect(groundLeft.position.x, groundLeft.position.y, wallThickness, height);
                p.rect(groundTop.position.x, groundTop.position.y, width, wallThickness);

                const bounceForce = 0.01;
                for(let bubble of bubbles){
                    if (Matter.Collision.collides(bubble, groundBottom)) {
                        Body.applyForce(bubble, bubble.position, {
                            x: (Math.random() - 0.5) * bounceForce,
                            y: -Math.random() * bounceForce
                        });
                    }

                    if (Matter.Collision.collides(bubble, groundTop)) {
                        Body.applyForce(bubble, bubble.position, {
                            x: (Math.random() - 0.5) * bounceForce,
                            y: Math.random() * bounceForce
                        });
                    }

                    if (Matter.Collision.collides(bubble, groundRight)) {
                        Body.applyForce(bubble, bubble.position, {
                            x: -Math.random() * bounceForce,
                            y: (Math.random() - 0.5) * bounceForce
                        });
                    }

                    if (Matter.Collision.collides(bubble, groundLeft)) {
                        Body.applyForce(bubble, bubble.position, {
                            x: Math.random() * bounceForce,
                            y: (Math.random() - 0.5) * bounceForce
                        });
                    }
                }
            };

            p.windowResized = () => {
                width = sketchRef.current?.offsetWidth || window.innerWidth;
                height = sketchRef.current?.offsetHeight || window.innerHeight;
                p.resizeCanvas(width, height);
                
                groundBottom = Bodies.rectangle(width / 2, height + wallThickness / 2, width, wallThickness, { isStatic: true });
                groundTop = Bodies.rectangle(width / 2, -wallThickness / 2, width, wallThickness, { isStatic: true });
                groundLeft = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
                groundRight = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height, { isStatic: true });
            };
        };

        const P5Light = new p5(spotLightSketch, sketchRef.current);

        return () => {
            P5Light.remove();
        };
    }, [] );

    
    return(
        <>
            <div className="relative text-blue-700 text-shadow-gray-800 text-shadow-sm h-auto overflow-hidden">
                <div ref={sketchRef} className={`border-orange-400 border-2 overflow-hidden w-full md:w-3/4 h-screen rounded m-5 relative shadow-lg shadow-blue-700 ${className || ''}`}>
                    <h1 className="absolute top-4 left-1/2 -translate-x-1/2 text-center font-bold sm:text-xl md:text-3xl lg:text-4xl px-4 text-shadow-sm text-shadow-orange-400 pointer-events-none">
                        {projectTitle}
                    </h1>
                    <div className="bg-gray-600/80 shadow-md border-2 border-orange-400 shadow-blue-700 absolute top-2/16 left-1/2 -translate-x-1/2 w-[75%] rounded pointer-events-none p-2 m-5">
                        <p className="font-bold sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            {projectText}
                        </p>
                        {link &&(
                            <a href={link} className="text-orange-400 text-shadow-blue-700 text-shadow-sm pointer-events-auto rounded p-1 mb-6 hover:bg-orange-400 hover:shadow-white hover:shadow-md hover:border-2 hover:border-blue-700 hover:text-blue-700 hover:text-shadow-gray-800">Project Link</a>
                        )}
                        {/* {projectImg &&(
                            <img className = "absolute opacity-50" src={img} alt="Project Image"></img>
                        )} */}
                    </div>
                </div>
            </div>
        </>    

    )
}

export default ProjectBackground