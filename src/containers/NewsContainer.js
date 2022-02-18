import React, {useEffect, useState,} from 'react'
import NewsList from '../components/NewsList'
import NewsItem from '../components/NewsItem'

const NewsContainer = () => {

    const [newsInfo, setNewsInfo] = useState([])


    const getNews = function (){
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(result => result.json())
        .then(data => setNewsInfo(data.response.results))

    }
     useEffect(() => {
         getNews();
     }, [])


    return(
        <div>
        <p>im the news container</p>
        {newsInfo ?<NewsList newsInfo={newsInfo}/> : null}

        </div>
    )



}

export default NewsContainer;