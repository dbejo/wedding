import { useEffect, useState } from 'react'
import selfie from './assets/selfie.webp'
import selfie1 from './assets/selfie1.jpeg'
import selfie2 from './assets/selfie2.jpeg'
import selfie3 from './assets/selfie3.jpeg'
import selfie4 from './assets/selfie4.jpeg'
import mettrin1 from './assets/mettrin1.jpg'
import './App.css'
import AccommodationCard from './AccomodationCard';
import Faq from './Faq';
import ProgramImage from './ProgramImage'

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function App() {
  const calculateTimeLeft = (): TimeLeft | null => {
    const targetDate = new Date("2026-05-19T16:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };
  const mainColor = "#99ccff";
  const goldColor = "#D4AF37";
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());
  const [mainImgLoaded, setMainImgLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen justify-evenly mt-10 mx-5">
        <div>
          <div className="md:w-128 w-full flex justify-end">
            <h1 style={{ color: goldColor }} className={`text-4xl font-medium -mb-5 -mr-2 z-10 font-[cursive] transition-opacity duration-700 ${mainImgLoaded ? "opacity-100" : "opacity-0"}`}>Eszter<br />&nbsp;&nbsp;& Dávid</h1>
          </div>
          <div className={`md:w-128 w-80 md:h-179 h-112 rounded-full transition-shadow duration-700 ${mainImgLoaded ? "shadow-xl" : "shadow-none"} relative`}>
            <img
              src={selfie}
              loading='eager'
              fetchPriority="high"
              className={`w-full h-full rounded-full object-cover transition-opacity duration-700 ${mainImgLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setMainImgLoaded(true)}
            />
          </div>
          <div className="md:w-128 w-full flex justify-start">
            <h2 style={{ color: goldColor }} className={`text-4xl font-medium -mt-5 -ml-2 font-[cursive] transition-opacity duration-700 ${mainImgLoaded ? "opacity-100" : "opacity-0"}`}>&nbsp;&nbsp;2026<br />05.19</h2>
          </div>
        </div>
        <div className="md:w-2/3 w-full flex flex-col justify-start gap-5">
          <a href="#rsvp-form" className='mx-auto my-5'>
            <button type='button' style={{ backgroundColor: mainColor }} className={`text-white py-3 px-5 rounded-full text-xl hover:cursor-pointer hover:grayscale-30 transition-all shadow-lg transition-opacity duration-700 ${mainImgLoaded ? "opacity-100" : "opacity-0"
              }`}>Visszajelzés</button>
          </a>
          <p className='text-lg text-justify leading-relaxed font-thin'>Szeretnénk, ha ezen a különleges napon velünk ünnepelnétek, és együtt osztoznánk az örömben és boldogságban. Nagyon fontos számunkra, hogy a számunkra legkedvesebb emberek körében élhessük át ezt a pillanatot, hiszen nélkületek nem lenne teljes az ünnep.</p>
        </div>
      </div >
      <div style={{ backgroundColor: mainColor }} className='w-full h-40 items-center flex justify-center my-10 shadow-lg'>
        <h2 className="text-4xl font-bold text-center my-5 text-white">Esküvői Program</h2>
      </div>
      <div className='w-full min-h-screen flex justify-center'>
        <div className='md:w-2/3 w-full flex flex-col mb-10'>
          <div className='flex flex-col md:flex-row w-full justify-evenly items-center'>
            <div className='md:w-1/2 w-full'>
              <p style={{ color: goldColor }} className={`text-4xl font-bold text-center my-5 font-[cursive]`}>16:00</p>
              <p className="text-4xl text-center my-5 text-gray-700">Vendégvárás</p>
            </div>
            <div className="hidden md:block border-l border-gray-300 h-9/10 mx-4"></div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <ProgramImage src={selfie1} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse w-full justify-evenly items-center'>
            <div className='md:w-1/2 w-full'>
              <p style={{ color: goldColor }} className={`text-4xl font-bold text-center my-5 font-[cursive]`}>17:00</p>
              <p className="text-4xl  text-center my-5 text-gray-700">Szertartás</p>
            </div>
            <div className="hidden md:block border-l border-gray-300 h-9/10 mx-4"></div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <ProgramImage src={selfie2} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full justify-evenly items-center'>
            <div className='md:w-1/2 w-full'>
              <p style={{ color: goldColor }} className={`text-4xl font-bold text-center my-5 font-[cursive]`}>18:00</p>
              <p className="text-4xl text-center my-5 text-gray-700">Vacsora</p>
            </div>
            <div className="hidden md:block border-l border-gray-300 h-9/10 mx-4"></div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <ProgramImage src={selfie3} />
            </div>
          </div>
          <div className='flex flex-col md:flex-row-reverse w-full justify-evenly items-center'>
            <div className='md:w-1/2 w-full'>
              <p style={{ color: goldColor }} className={`text-4xl font-bold text-center my-5 font-[cursive]`}>23:00</p>
              <p className="text-4xl text-center my-5 text-gray-700">Tánc</p>
            </div>
            <div className="hidden md:block border-l border-gray-300 h-9/10 mx-4"></div>
            <div className='md:w-1/2 w-full flex justify-center'>
              <ProgramImage src={selfie4} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: mainColor }} className='w-full flex md:flex-row flex-col justify-center h-96  mt-30 mb-10 md:mb-30 shadow-lg'>
        <div className='md:w-2/3 w-full flex md:flex-row flex-col-reverse items-center my-10'>
          <div className='md:w-1/2 w-full flex flex-col justify-start'>
            <h2 className="text-4xl font-bold mt-5 md:text-start text-center text-white">Helyszín</h2>
            <p className='text-lg mt-5 font-light md:text-start text-center text-white md:mx-0 mx-5'>A szertartás és a vacsora helyszíne a <a href="https://www.google.com/maps/?q=mettrin" className="underline">METTRIN</a>, melynek címe:<br /><a href="https://www.google.com/maps/?q=mettrin" className="underline">2653 Bánk, Tóparti sétány 2.</a></p>
          </div>
          <div className='w-full flex justify-center md:-mr-30 md:px-0 px-5 md:mt-0 -mt-20'>
            <img src={mettrin1} className="md:h-128 object-cover rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center my-10 mx-5'>
        <div className='md:w-2/3 w-full flex flex-col'>
          <h2 className="text-4xl font-bold  mb-1 text-gray-700">Szállás</h2>
          <p className='text-lg text-justify leading-relaxed font-thin mb-5'>A közeli szálláslehetőségek:</p>
          <div className='flex flex-col md:flex-row w-full gap-5 items-stretch'>
            <AccommodationCard
              title="Tó Hotel"
              description="Cím: 2653 Bánk, Petőfi út 73."
              buttonColor={mainColor}
              href="https://szallas.hu/tavi-feszek-vendeghaz-bank?checkin=2026-05-19&checkout=2026-05-20&ref=list&adults=2&provision=1&listIndex=3"
              imageSrc="https://cf.bstatic.com/xdata/images/hotel/max1024x768/205475784.jpg?k=40f0435f7f72bdb09d1e2d8fd6d84ea51a42694796cb92c3df709942a3ce7686&o="
            />
            <AccommodationCard
              title="Tavi-fészek Vendégház Bánk"
              description="Cím: 2653 Bánk, Dózsa György utca 6."
              buttonColor={mainColor}
              href="https://szallas.hu/tavi-feszek-vendeghaz-bank?checkin=2026-05-19&checkout=2026-05-20&ref=list&adults=2&provision=1&listIndex=3"
              imageSrc="https://i.szalas.hu/hotels/649731/original/8130285.jpg"
            />
            <AccommodationCard
              title="Tó Apartman Bánk"
              description="Cím: 2653 Bánk, Petőfi út 24."
              buttonColor={mainColor}
              href="https://szallas.hu/to-apartman-bank?checkin=2026-05-19&checkout=2026-05-20&ref=list&adults=2&provision=1&listIndex=8"
              imageSrc="https://i.szalas.hu/hotels/472693/original/3023944.jpg"
            />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: mainColor }} className='w-full h-40 items-center flex justify-center my-10 shadow-lg'>
        <h2 className="text-4xl font-bold text-center my-5 text-white">Gyakran Ismételt Kérdések</h2>
      </div>
      <div className='flex justify-center mb-10 mx-5'>
        <div className='md:w-2/3 w-full flex flex-col text-gray-700 gap-5'>
          <Faq question="Mi a dress code?" answer="Kérjük, hogy az esküvőre elegáns, de kényelmes öltözetben érkezzetek. A hölgyek számára ajánlott a hosszú alkalmi ruha, az uraknak pedig zakó viselése. A fehér és a piros színek kerülendők, mivel ezek a menyasszony ruháját idézhetik." />
          <Faq question="Hol lehet parkolni?" answer="A rendezvény helyszíne mellett található egy parkoló, ahol a vendégek ingyenesen parkolhatnak." />
          <Faq question="Mit kértek ajándékba?" answer="Tárgyi ajándékot nem kérünk, eladó azonban a menyasszony: egy táncért cserébe bárki viheti egy körre. A menyasszonytáncon összegyűlt adományok pedig a nászutunk alapját adják majd." />
        </div>
      </div>
      <div className="flex flex-col items-center min-h-screen justify-evenly">
        <div className="md:w-2/3 w-full flex flex-col justify-evenly flex-1 my-5">
          <p className='text-lg text-center font-thin'>Kérjük, hogy részvételi szándékotokat a következő űrlap kitöltésével jelezzétek:</p>
          <iframe id='rsvp-form' src="https://docs.google.com/forms/d/e/1FAIpQLScYw5FcQ8lFwXr8iPbwPGoAA3cDRgf-qjbHDDHPD2Ku3H-jiA/viewform?embedded=true" className='md:h-[1000px] h-[1300px] w-full border-0'>Betöltés…</iframe>
        </div>
      </div>
      <div className='flex flex-col items-center mt-20'>
        {timeLeft != null ? <p className='font-thin text-xl text-gray-700'>Már csak</p> : null}
        <p className='md:text-7xl text-3xl font-bold text-gray-700'>{timeLeft ? `${timeLeft.days} nap ${timeLeft.hours} óra ${timeLeft.minutes} perc` : "Az esemény elkezdődött!"}</p>
        {timeLeft != null ? <p className='font-thin text-xl text-gray-700'>van hátra az esküvőig!</p> : null}
      </div>
      <div className="w-full bg-[url('./assets/mettrinrajz.png')] bg-cover bg-center md:h-256 h-64">
      </div>
    </>
  )
}

export default App
