import Title from "../../Title"
import Card from "./card"

const News = () => {
    return (
        <div className="flex flex-col md:pl-24 md:pr-24 md:pt-20 bg-newsFeed bg-cover bg-no-repeat bg-inherit h-auto pb-16">
            <div>
                <Title
                    title="Latest news and videos"
                    color="text-white"
                />
            </div>
            <div className="flex flex-col justify-center md:flex-row">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default News