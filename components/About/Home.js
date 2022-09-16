import PrincipalAbout from "./Principal"
import Separator from '../Separator/Separator'
import ContentAbout from "./Content"
import PartersAbout from "./Partners"

const HomeAbout = () => {
    return (
        <>
            <PrincipalAbout />
            <Separator
                position="relative z-50 bg-inherit pt-8 my-[-1rem]"
            />
            <ContentAbout />
            <Separator
                position="relative z-50 bg-inherit pt-8 my-[-1rem]"
            />
            <PartersAbout />
        </>
    )
}

export default HomeAbout