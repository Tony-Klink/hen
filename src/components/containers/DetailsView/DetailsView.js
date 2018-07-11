import React, { Component } from 'react';
import { DetailsCard } from '../../presenters/DetailsCard';
import { hnBasepath } from '../../../configs/config';

export default class DetailsView extends Component {
    constructor(props) {
        super(props);
        this.state = { article: null };
    }

    async getArticle() {
        const data = await fetch(hnBasepath + '/item/' + this.props.articleId + '.json').then(data => data.json());
        this.setState({ article: data })
    }

    componentDidMount() {
        this.getArticle();
    }

    componentDidUpdate(prevProps) {
        if (this.props.articleId !== prevProps.articleId) {
            this.getArticle();
        }
      }

    render() {
        if (this.state.article) {
            return (
                <DetailsCard details={this.state.article} />
            )
        } else {
            return (
                <div>Nothing</div>
            )
        }
    }
}