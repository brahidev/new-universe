import Youtube from "../../../Youtube/Youtube"
import Separator from "../../../Separator/Separator"

const Video = () => (
    <>
        <div className="bg-[#ffec40] w-[100%]">
            <div className="w-[100%] bg-stars-white flex flex-col items-center">
                <Youtube embedId="D_NBJANJNPk" />
                <span className="text-blue-900 font-['Sniglet'] text-center text-3xl">
                    New Universe Plataform
                </span>
                <span className="text-blue-900 text-center mt-[1rem] mb-[2rem] mx-[15%] font-bold font-titleNormal text-1xl">
                    Join New Universe an unforgettable experience creating your games!
                </span>
            </div>
        </div>
        <Separator
            position="relative bg-inherit z-50 pt-8 my-[-1rem]"
        />
    </>
)

export default Video