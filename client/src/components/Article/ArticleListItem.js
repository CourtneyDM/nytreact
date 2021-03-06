import React, { Component } from 'react';
import { Button } from '../Form';

export class ArticleListItem extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            title: '',
            url: '',
            date: '',
        };
    }

    componentDidMount() {
        this.setState( {
            title: this.props.title,
            url: this.props.url,
            date: this.props.date
        } );
    }

    render() {
        return (

            <React.Fragment>
                <li className='list-group-item list-item'>
                    <h5>{ this.props.title }</h5>
                    <span>Link to Article: <a href={ this.props.url } target='_blank'>{ this.props.url }</a>
                    </span>

                    <p>Date Published: { this.props.date }</p>
                    <Button
                        name={ this.props.name }
                        className={ this.props.className }
                        onClick={ this.props.onClick }
                        text={ this.props.text } />
                </li>
            </React.Fragment> );
    }
}