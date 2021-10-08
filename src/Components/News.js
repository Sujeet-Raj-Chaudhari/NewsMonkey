import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("This is my constructor from news");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30620cd216bb486eadf6923bc5c54aaf&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }
  async componentDidMount() {
    // const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30620cd216bb486eadf6923bc5c54aaf&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // this.setState({loading : true});
    // let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({articles: parseData.articles,
    //   totalArticles: parseData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  handleNextClick = async () => {
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalArticles/this.props.pageSize)))
    // {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30620cd216bb486eadf6923bc5c54aaf&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();

    //   this.setState({
    //     page : this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   })
    // }

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30620cd216bb486eadf6923bc5c54aaf&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
    //  this.setState({loading : true});
    //  let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({
    //   page : this.state.page - 1,
    //   articles: parseData.articles,
    //   loading : false
    // })

    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1 className="text-center" style={{ margin: "40px 0px" , color: "white" }}>
            <i>News Monkey's - Top HeadLines from {this.capitalizeFirstLetter(this.props.category)}</i>
          </h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItems
                      title={element.title ? element.title.slice(0, 45) : " "}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : " "
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://unblast.com/wp-content/uploads/2020/04/404-Page-Illustration.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between my-2">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalArticles / this.props.pageSize)
              }
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
