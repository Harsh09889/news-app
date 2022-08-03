import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize: 8,
    category:'general'
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,  
  }

  constructor() {
    super();
    // console.log("hello world")
    this.state = {
      articles:[],
      loading: false,
      page: 1,
    };
  }

   updateData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=23d9cd8ac58a4cf4bc69b674c27caa27&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })  
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
      loading:false
    });
  }

  handleNext = async () => {
    this.setState({page:this.state.page+1})
    this.updateData()
  };

  handlePrev = async () => {
    this.setState({page:this.state.page-1})
    this.updateData()
  };

  async componentDidMount() {
    this.updateData();
  }

  render() {
    return (
      <div className="container my-5">
        
        <h2 style={{ textAlign: "center" }}>Aaj ka samachar for meri MUMMY JI</h2>
        {
          this.state.loading && <Spinner />
        } 
        <div className="row my-4 mx-auto">
          {
            !this.state.loading &&
          
          (this.state.articles.map((element) => {
            return (
              <div className="col-md-4  " key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          }))
          
          
          }
        </div>
        <div className="buttonContainer d-flex justify-content-between">
          <button className="btn btn-dark"  
          onClick={this.handlePrev}
          disabled={this.state.page<=1}
          >
            Previous
          </button>
          <button
            className="btn btn-dark"
            disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults / this.pageSize)}
            onClick={this.handleNext}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
