import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div>
                Newses
                <NewsItems/>
            </div>
        )
    }
}

export default News


