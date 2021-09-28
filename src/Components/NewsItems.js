import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div>
                <div className ="card" style={{width : "25rem", height: "502px"}}>
                    <img style = {{height : "286px"}}src={imageUrl} className ="card-img-top" alt="..."/>
                    <div className ="card-body">
                        <h5 className ="card-title">{title}</h5>
                        <p className ="card-text">{description}</p>
                        <a href={newsUrl} className ="btn btn-dark">Read Full News</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
