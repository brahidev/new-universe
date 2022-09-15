import Welcome from "./Welcome/Welcome"
import Info from "./Info/Info"
import News from "./News/News"
import Stickers from "./Stickers/Stickers"
import Video from "./Video/Video"

const Principal = ({ feeds = [] }) => {
    return (
        <>
            <Welcome />
            <Info />
            <News
                feeds={ feeds }
                button={ true }
            />
            <Stickers/>
            <Video />
        </>
    )
}

export default Principal