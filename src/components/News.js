import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `NewsApp- ${this.props.category}`;
  }
  async updatenews() {

    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({ loading: true });
    this.props.setProgress(50);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.updatenews();
  }
  handlepreclick = async () => {
   await this.setState({ page: this.state.page - 1 });
    this.updatenews();
  };
  handlenextclick = async () => {
   await this.setState({ page: this.state.page + 1 });
    this.updatenews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">
          NewsApp - Top {this.props.category} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItems
                    title={element.title}
                    source={element.source.name}
                    publishedAt={element.publishedAt.slice(0, 10)}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={
                      !element.urlToImage
                        ? "https://assets.sentinelassam.com/h-upload/2022/01/09/295441-media-handler.jpg"
                        : element.urlToImage
                    }
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-around">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={this.handlepreclick}
          >
            &larr; Previous
          </button>
          <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pagesize)
            }
            type="button"
            className="btn btn-dark "
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
