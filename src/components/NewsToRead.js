import React from 'react';


const NewsToRead = ({news}) => {

    const newselements = news.map((news) => {
        return(
            <li>{news.webTitle}</li>
        )
    })

    

    return(
        <>
        <div id="details">
        
        <ul>
        <h2>Reading list:</h2>
            {newselements}
        </ul>
        </div>
        

        </>
    )
}

export default NewsToRead;