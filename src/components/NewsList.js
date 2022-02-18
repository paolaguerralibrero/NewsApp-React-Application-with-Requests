import NewsItem from "./NewsItem"


const NewsList = ({newsInfo}) => {

    const newsElements = newsInfo.map((news, index) => {
        return <NewsItem news={news} index={index} key={index}/>
    })

    
return(
    <>
    <p>I am a news list</p>
    {newsElements}
    
    </>
)
}

export default NewsList;