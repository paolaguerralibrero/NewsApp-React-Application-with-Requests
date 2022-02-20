import NewsItem from "./NewsItem"


const NewsList = ({newsInfo, handleSelectedNews}) => {

    const newsElements = newsInfo.map((news, index) => {
        return <NewsItem news={news} index={index} key={index} handleSelectedNews = {handleSelectedNews}/>
    })

    
return(
    <>
    <p>News:</p>
    {newsElements}
    
    </>
)
}

export default NewsList;