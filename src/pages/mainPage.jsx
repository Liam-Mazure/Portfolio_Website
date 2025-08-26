import {useLayoutEffect, useRef} from "react";
import ProjectBackground from "../components/p5Background";
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import LogoBackground from "../components/techLogoBackground";
import ContactForm from "../components/form";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LiamHeadshot from "../assets/liam_wedding_headshot.jpg";
import SpeechBubble from "../assets/pixel-speech-bubble.png";

gsap.registerPlugin(ScrollTrigger);

function MainPage(){
    
    useLayoutEffect(() => {
        let timeline1 = gsap.timeline();

        timeline1.fromTo('#bubble',
            {
              x:'500%'
            },
            {
              x:'200%',
              scrollTrigger:{
                trigger: '#bubble',
                start: 'top top',
                end: '+=500' ,
                scrub: 1,
                id: 'bubble',
              },
            }
        )
        
        timeline1.fromTo('.project1', 
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '15%',
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project1',
                    start: 'top top',
                    end: '+=500' ,
                    scrub: 1,
                    id: 'project-1',
                },
            }
        )

        timeline1.fromTo('.project2', 
            {
                x: '200%',
                opacity: 0,
            },
            {
                x: '15%',
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project2',
                    start: 'top top',
                    end: '+=500' ,
                    scrub: 1,
                    id: 'project-2',
                },
            }
        )

        timeline1.fromTo('.project3', 
            {
                x: '-100%',
                opacity: 0,
            },
            {
                x: '15%',
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project3',
                    start: 'top top',
                    end: '+=500' ,
                    scrub: 1,
                    id: 'project-3',
                },
            }
        )
        timeline1.fromTo('.project4', 
            {
                x: '200%',
                opacity: 0,
            },
            {
                x: '15%',
                opacity: 1,
                scrollTrigger: {
                    trigger: '.project4',
                    start: 'top top',
                    end: '+=500' ,
                    scrub: 1,
                    id: 'project-4',
                },
            }
        )
    }, []);

    return(

        <div style={{zIndex:0}}>
            <div id ="about" className="flex text-neutral-300 text-shadow-blue-700 text-shadow-2xs font-bold m-2">

                <div className="flex flex-col w-1/2 gap-5 m-5">
                    <h1 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-4xl">
                        Full-Stack Developer
                    </h1>

                    <div className="flex justify-start">
                        <a href="https://www.linkedin.com/in/liam-mazure"><FontAwesomeIcon icon={faLinkedin} className="text-neutral-300 text-4xl hover:bg-linear-65 hover:from-blue-700 hover:to-orange-400 rounded-full p-2 hover:animate-spin"></FontAwesomeIcon></a>
                        <a href="https://liam-mazure.github.io/Personal_Website/"><FontAwesomeIcon icon={faGithub} className="text-neutral-300 text-4xl hover:bg-linear-65 hover:from-blue-700 hover:to-orange-400 rounded-full p-2 hover:animate-spin"></FontAwesomeIcon></a>
                        <button className="text-neutral-300 text-3xl hover:bg-linear-65 hover:from-blue-700 hover:to-orange-400 rounded-full p-2 hover:animate-spin"><a href="src/assets/LiamMazure_Resume_S25.pdf">CV</a></button>
                    </div>

                    <div className="sm:text-xs md:text-sm lg:text-xl">
                        <p>Hello, I’m a software developer based in Grand Rapids, MI, pursuing a role in full-stack web development. 
                            After graduating from Grand Valley State University in 2023, I balanced sharpening my portfolio with mastering the intricacies of bike maintenance at Freewheeler Bike Shop. 
                            This role gave me the time and flexibility to explore the world of computer science further—navigating countless trajectories before discovering that web development was where I wanted to focus my efforts.
                            <br/>
                            <br/>
                            Since then, I’ve poured my energy into building applications that solve real problems in my daily life, each project building on the next and expanding my growing anthology of work. 
                            For me, technology is a spectrum—every problem is a blank canvas waiting for the right code to bring it to life. This belief keeps me returning to my desk each day: the idea that I can help shape the world I want to see. 
                            <br/>
                            <br/>
                            I will always work to define my own vision, reach beyond the familiar, and keep building toward the world I imagine. 
                            Now just envision the breakthroughs we could accomplish together. 
                        </p>
                    </div>
                </div>

                <div className="flex flex-col self-center w-1/2 h-auto">
                    <img src= {LiamHeadshot} alt="Liam's Photo" className="bg-linear-65 from-blue-700 to-orange-400 p-2 rounded-2xl"></img>
                </div>

            </div>

            <div className=" h-1 bg-linear-65 from-blue-700 to-orange-400 m-10"></div>

            <div id="specialization" className=" ">
                <h1 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-4xl p-5">
                    Specialization
                </h1>
                <LogoBackground/>
            </div>

            <div className=" h-1 bg-linear-65 from-blue-700 to-orange-400 m-10"></div>
        
            <div id ="projects" className="overflow-auto">
                <h1 className=" text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-4xl p-5">Projects</h1>
                <img id = "bubble" src={SpeechBubble} alt="speech bubble" className="w-100 h-30"></img>
                <div className="flex flex-col">
                    <ProjectBackground title = "Augmented Human Anatomy" 
                                    text = {[`As a part of my undergraduate capstone, I led a four-person team in enhancing an augmented reality anatomical modeling tool built with Unity and the Microsoft HoloLens.
                                            I contributed directly to the development of full male and female 3D models, redesigned the UI to include additional anatomical structures, and implemented a dynamic magnifying glass feature for detailed model inspection.`, 
                                            <br/>, <br/>,
                                            `As team lead, I coordinated task assignments, facilitated communication with our industry partner and faculty advisor, organized meetings and agendas, and kept the project on track for biweekly reviews. 
                                            This experience strengthened both my technical skills in AR development and my leadership abilities in guiding a collaborative, cross-functional team.`
                                        ]}
                                    img = "img"
                                    className = "project1"
                    />
                    <ProjectBackground title = "Scavenger Hunt Web Application" 
                                    text = {[`For a unique marriage proposal, I built a web application that guided my partner through a digital scavenger hunt, revisiting locations tied to our most meaningful moments. 
                                            The app combines a React frontend and Django backend, with secure user authentication, dynamic clue rendering, and an SQL database for scalable data management.`,
                                            <br/>,<br/>,
                                            `Users can log in, create and share hunts, and play through others’ creations. Designed with modular components and RESTful API endpoints, the project is ready for future enhancements including hunt ratings, score tracking, and geolocation features via Google Maps API. 
                                            This project showcases my full-stack development skills, creative problem-solving, and ability to design user-focused applications from concept to completion.`
                                        ]} 
                                    img = "img"
                                    className = "project2"
                                    
                    />
                    <ProjectBackground title = "Jeopardy Study Tool" 
                                    text = {[`Inspired by my lifelong love of Jeopardy, I set out to build a study tool that lets users practice with over 41 seasons of real game data. 
                                            I first scraped and structured the dataset using Python’s Scrapy library, exporting the results into a JSON file.`,
                                            <br/>,<br/>,
                                            `From there, I developed a Django backend to deserialize and serve the question data, along with a React frontend to dynamically render categories, questions, and responses. 
                                            The result is a full-stack application that transforms decades of Jeopardy history into an interactive study experience, designed with scalability for future features like score tracking and multiplayer play.`
                                        ]}
                                    link = "https://jeopardy-study-tool-frontend.onrender.com"
                                    img = "img"
                                    className = "project3"
                    />
                    <ProjectBackground title = "Personal Website" 
                                    text = {[`My original portfolio website served as a launchpad for my development journey, showcasing early projects to friends, family, and peers. Built with React, it allowed me to experiment with core functionalities such as dynamic components, routing, and responsive design.`, 
                                            <br/>, 
                                            <br/>,
                                            `Since then, I’ve expanded my expertise across modern frontend and backend frameworks, refining my approach to architecture, design, and performance. This evolution led to the creation of the portfolio you see today—sleeker, more scalable, and reflective of my growth as a full-stack developer.`,
                                            <br/>,
                                            <br/>,
                                        ]}
                                    link= "https://liam-mazure.github.io/Personal_Website/"
                                    img = "img"
                                    className = "project4"
                    />
                </div>
            </div>

            <div className=" h-1 bg-linear-65 from-blue-700 to-orange-400 m-10"></div>

            <h1 id="contact" className="text-neutral-300 text-shadow-blue-700 text-shadow-sm font-bold text-4xl p-5">Contact</h1>
            <ContactForm/>
        </div>
    )
}

export default MainPage