import React from 'react';

const NewsItem = ({news, index, handleSelectedNews}) => {

  const handleClick = () => {
    handleSelectedNews(news)
}

  return (
    <div id="news">
        <p onClick={handleClick}>{news.webTitle}</p>
    </div>
  )
}

export default NewsItem;