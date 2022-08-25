import Title from "../Title"
import Image from 'next/image'

const Principal = () => {
    return (
        <>
            <div className="bg-anniversaryKirby bg-no-repeat bg-inherit h-auto pb-16">
                <div className="flex justify-center pt-36 mb-[-2rem] z-1">
                    <img src="https://kirby.nintendo.com/assets/img/kirby_30.png" width="300" height="300" alt="New universe logo" />
                </div>
                <div className="bg-white pt-5 mr-5 ml-5 rounded-2xl z-0">
                    <div className="ml-10 mr-10 text-center text-blue-900 text-lg pb-5 md:hover:text-blue-900 md:p-0">
                        <Title
                            title="30 years of Kirby! "
                        />
                        <p>
                            Enjoy the 30th anniversary of everyone’s favorite puffball with this free digital wallpaper.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-zig-zac bg-inherit pt-8 my-[-1rem]">

            </div>
        </>
    )
}

export default Principal