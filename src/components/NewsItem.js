import React from 'react';

const NewsItem = ({news, index}) => {

  return (
    <div>
        <p>{news.webTitle}</p>
    </div>
  )
}

export default NewsItem;