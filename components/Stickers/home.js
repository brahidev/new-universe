import PrincipalStickers from "./principal"
import Separator from '../Separator/Separator'
import Instructions from "./instructions"

const HomeStickers = () => {
    return (
        <>
            <PrincipalStickers />
            <Separator
                position="relative z-50 bg-inherit pt-8 my-[-1rem]"
            />
            <Instructions />
        </>
    )
}

export default HomeStickers