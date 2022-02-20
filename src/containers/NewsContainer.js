import React, {useEffect, useState,} from 'react'
import NewsList from '../components/NewsList'
import NewsItem from '../components/NewsItem'
import NewsDetail from '../components/NewsDetail'
import './NewsContainer.css';

const NewsContainer = () => {

    const [newsInfo, setNewsInfo] = useState([])
    const [selectedNews, setSelectedNews] = useState(null)


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


    return(
        
        <>
       
       <NewsList newsInfo={newsInfo} handleSelectedNews= {handleSelectedNews}/>  
        {selectedNews? <NewsDetail selectedNews = {selectedNews}/> : null}
        

       
        </>
    )



}

export default NewsContainer;