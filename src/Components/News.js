import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2>
                <i>News Monkey's - Top HeadLines</i>
            </h2>
            <div className="row">
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md3-">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
                <div className="col md-3">
                    <NewsItems title="NewsHeadline" description="description" />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default News;
