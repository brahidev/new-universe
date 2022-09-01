import PrincipalNews from "./principal"
import Separator from '../Separator/Separator'
import News from "../Home/Sections/News/news"

const HomeNews = ({ feeds }) => {
    return (
        <>
            <PrincipalNews />
            <Separator
                position="relative z-50 bg-inherit pt-8 my-[-1rem]"
            />
            <News
                feeds={ feeds }
                button={ false }
            />
        </>
    )
}

export default HomeNews