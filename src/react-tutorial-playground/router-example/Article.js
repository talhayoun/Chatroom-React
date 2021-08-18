import React from 'react';
import { useHistory } from 'react-router-dom';


const Article = (props) => {

    const history = useHistory();

    const onClickButton = () => {
        history.push("/articles")
    }

    return (
        <div>
            <h1>Article: {props.match.params.name}</h1>
            <button onClick={onClickButton}>To Articles</button>
        </div>

    )
};

export default Article;