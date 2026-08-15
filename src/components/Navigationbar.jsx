import instagram from '../assets/InstagramLogo.png'
import facebook from '../assets/FacebookLogo.png'
import whatsapp from '../assets/WhatsAppLogo.png'
import youtube from '../assets/YouTubeLogo.png'
import gro from '../assets/Grologo.jpg'

function Navigationbar(){
    return(
        <>
            <div className='grid grid-cols-2 mx-1 my-1 items-center'>
                <div className='flex justify-start h-24 px-2 py-2'>
                    <div className="flex flex-nowrap justify-center items-center overflow-hidden h-18 w-18 rounded-full border-5 border-orange-200 hover:translate-1">
                        <img className="h-18 w-18 px-0 py-0 mx-0 my-0" src={gro}></img>
                    </div>
                </div>
                <div className='flex justify-end h-24 px-2 py-2'>
                    <div className="flex flex-nowrap justify-center items-center overflow-hidden h-18 w-18 rounded-full border-5 border-orange-200 hover:translate-1">
                        <a href="https://www.instagram.com/groxifi" target="_blank" rel="noopener noreferrer"> 
                            <img className="h-12 w-12 px-0 py-0 mx-0 my-0" src={instagram}></img>
                        </a>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center overflow-hidden h-18 w-18 rounded-full border-5 border-orange-200 hover:translate-1">
                        <a href="https://www.facebook.com/groxifi.official" target="_blank" rel="noopener noreferrer"> 
                            <img className="h-12 w-12 px-0 py-0 mx-0 my-0" src={facebook}></img>
                        </a>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center overflow-hidden h-18 w-18 rounded-full border-5 border-orange-200 hover:translate-1">
                        <img className="h-12 w-12 px-0 py-0 mx-0 my-0" src={whatsapp}></img>
                    </div>
                    <div className="flex flex-nowrap justify-center items-center overflow-hidden h-18 w-18 rounded-full border-5 border-orange-200 hover:translate-1">
                        <a href="https://www.youtube.com/@Groxifi" target="_blank" rel="noopener noreferrer"> 
                            <img className="h-12 w-12 px-0 py-0 mx-0 my-0" src={youtube}></img>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigationbar

//acknowledgement: https://tailwindcss.com