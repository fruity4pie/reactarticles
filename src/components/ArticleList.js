import React, { Component } from 'react';
import Article from './Article';

class ArticleList extends Component {
    render() {
        return (
            <ul>
                {this.body}
            </ul>
        )
    }

    get body() {
        return this.props.articles.map(article =>
            <li key={article.id}>
                <Article article={article} />
            </li>
        )
    }
}

export default ArticleList;