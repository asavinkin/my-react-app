import React, {Component} from 'react'
import Article from "../Article";
import "./style.css"

export default class ArticleList extends Component {

    state = {
        openArticleId: null
    };

    render() {
        const articleElements = this.props.articles.map((article, index) =>
            <li className="article-list__li" key={ article.id }>
                <Article article={ article } isOpen = {this.state.openArticleId === article.id} onBtnClick = {this.handleClick.bind(this, article.id)}/>
            </li>
        );
        return (
            <ul>{ articleElements }</ul>
        )
    }

    handleClick = openArticleId => {
        this.setState({
            openArticleId: openArticleId === this.state.openArticleId ? null : openArticleId
        })
    }

}