import React from 'react';
import NewsItem from './NewsItem';

const NewsDetail = ({selectedNews}) => {

    

    return(
        <>
        <p>news details: {selectedNews.webTitle}</p>
        <a href={selectedNews.webUrl}>Click to access the article</a>

        

        </>
    )
}

export default NewsDetail;