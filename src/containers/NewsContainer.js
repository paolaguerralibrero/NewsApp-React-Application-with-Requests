import React, {useEffect, useState,} from 'react'
import NewsList from '../components/NewsList'

import NewsDetail from '../components/NewsDetail'
import NewsToRead from '../components/NewsToRead';

const NewsContainer = () => {

    const [newsInfo, setNewsInfo] = useState([])
    const [selectedNews, setSelectedNews] = useState(null)
    const [newsToRead, setNewsToRead] = useState([])


    const getNews = function (){
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(result => result.json())
        .then(data => setNewsInfo(data.response.results))

    }
     useEffect(() => {
         getNews();
     }, [])

     const handleSelectedNews = (news) => {
         setSelectedNews(news)
     }

     const handleSetNewsToRead = (news) => {
         const toRead = [...newsToRead, news]
         setNewsToRead(toRead)
     }

     


    return(
        
        <>
       
       <NewsList newsInfo={newsInfo} handleSelectedNews= {handleSelectedNews}/>  
        {selectedNews? <NewsDetail selectedNews = {selectedNews} handleSetNewsToRead={handleSetNewsToRead}/> : null}
        <NewsToRead news={newsToRead}/>
        

       
        </>
    )



}

export default NewsContainer;