import React from "react";

type HeroSectionProps = {
    imgSrc: string;
    textColor: string;
    mainColor: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imgSrc, textColor, mainColor }) => {
    const [imgLoaded, setImgLoaded] = React.useState(false);
    return (
        <div className="flex flex-col items-center min-h-screen justify-evenly mt-10 mx-5">
            <div>
                <div className="md:w-128 w-full flex justify-end">
                    <h1 style={{ color: textColor }} className={`text-4xl font-medium -mb-5 -mr-2 z-10 font-[cursive] transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}>Eszter<br />&nbsp;&nbsp;& Dávid</h1>
                </div>
                <div className={`md:w-128 w-80 md:h-179 h-112 rounded-full transition-shadow duration-700 ${imgLoaded ? "shadow-xl" : "shadow-none"} relative`}>
                    <img
                        src={imgSrc}
                        loading='eager'
                        fetchPriority="high"
                        className={`w-full h-full rounded-full object-cover transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                        onLoad={() => setImgLoaded(true)}
                    />
                </div>
                <div className="md:w-128 w-full flex justify-start">
                    <h2 style={{ color: textColor }} className={`text-4xl font-medium -mt-5 -ml-2 font-[cursive] transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}>&nbsp;&nbsp;2026<br />05.19</h2>
                </div>
            </div>
            <div className="md:w-2/3 w-full flex flex-col justify-start gap-5">
                <a href="#rsvp-form" className='mx-auto my-5'>
                    <button type='button' style={{ backgroundColor: mainColor }} className={`text-white py-3 px-5 rounded-full text-xl hover:cursor-pointer hover:grayscale-30 transition-all shadow-lg transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}>Visszajelzés</button>
                </a>
                <p className={`text-lg text-justify leading-relaxed font-thin transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}>Szeretnénk, ha ezen a különleges napon velünk ünnepelnétek, és együtt osztoznánk az örömben és boldogságban. Nagyon fontos számunkra, hogy a számunkra legkedvesebb emberek körében élhessük át ezt a pillanatot, hiszen nélkületek nem lenne teljes az ünnep.</p>
            </div>
        </div >
    );
};

export default HeroSection;