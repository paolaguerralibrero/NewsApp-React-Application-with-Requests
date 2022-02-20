import React from 'react';
import NewsItem from './NewsItem';

const NewsDetail = ({selectedNews, setNewsToRead, handleSetNewsToRead}) => {

    

    return(
        <>
        <div id="details">
        <h2>News details: </h2>
        <p>Title: {selectedNews.webTitle}</p>
        <p>Section: {selectedNews.sectionName}</p>
        <a href={selectedNews.webUrl}>Click here to access the article</a>
        <br></br>

        <button onClick =  {() => {handleSetNewsToRead(selectedNews)}}>Add to reading list</button>
        </div>
        

        </>
    )
}

export default NewsDetail;