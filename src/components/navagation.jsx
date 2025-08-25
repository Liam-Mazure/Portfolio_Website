import {useState, useEffect} from "react"

function Navbar(){

    const [scrollX, setScrollX] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        //number of px from the top
        const scrollTop = window.scrollY;
        // total px of the page as a whole
        const  docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scollPercent = (scrollTop / docHeight) * 100;
        setScrollX(scollPercent);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth',
        });
    }

    return(
        <>
            <nav className="flex justify-around text-neutral-300 font-bold text-3xl bg-gray-800 cursor-pointer sticky top-0 z-100">
                <a className = "text-shadow-blue-700 text-shadow-sm hover:text-shadow-orange-400" href = "/" onClick={(e) => handleSmoothScroll(e,'#about')}>Liam Mazure</a>
                <div className="flex gap-8 font-bold text-2xl">
                    <a className = "text-shadow-blue-700 text-shadow-sm hover:text-shadow-orange-400" onClick={(e) => handleSmoothScroll(e,'#specialization')}>Specialization</a>
                    <a className = "text-shadow-blue-700 text-shadow-sm hover:text-shadow-orange-400" onClick={(e) => handleSmoothScroll(e,'#projects')}>Projects</a>
                    <a className = "text-shadow-blue-700 text-shadow-sm hover:text-shadow-orange-400" onClick={(e) => handleSmoothScroll(e,'#contact')}>Contact</a>
                </div>
            </nav>
            <div className="fixed w-full transition-all duration-75 ease-linear origin-left h-.5 border-2 border-orange-400 z-100" 
            style={{transform: `translateX(${scrollX}%)`}}></div>
        </>
    )
}

export default Navbar