import Title from "../Title"

const News = () => {
    return (
        <div className="flex flex-col md:flex-row md:pl-24 md:pr-24 md:pt-20 bg-newsFeed bg-no-repeat bg-inherit h-auto pb-16">
            <div className="">
                <Title
                    title="Latest news and videos"
                    color="text-white"
                />
            </div>
        </div>
    )
}

export default News