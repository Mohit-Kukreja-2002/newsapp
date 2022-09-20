import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps={
    country: "in",
    pagesize: 6,
    category: 'general'
  }

  static propTypes={
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      stop: false
    }
  }

  HandleNextClick = async() => {
    // console.log(this.state.page);
    if(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pagesize)){
      // console.log(this.state.stop);
    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac796d46c6ea4907bfffcbaa2e170446&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles, loading: false});
      this.state.page+=1;
      if(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pagesize)){
        this.state.stop=true;
      }
    }

  }

  HandlePrevClick = async()=>{
    this.state.page-=1;
    // console.log(this.state.page);
    this.setState({loading: true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac796d46c6ea4907bfffcbaa2e170446&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, loading: false});
  }
  
  async componentDidMount(){
    this.setState({loading: true})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ac796d46c6ea4907bfffcbaa2e170446&page=1&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults});
    this.setState({loading: false})

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-info my-3 my-3">TOP NEWS</h1>
        {this.state.loading && <Spinner/>}
        
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} src={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />
            </div>
          })}
        </div>

        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1}type="button" onClick={this.HandlePrevClick} className="btn btn-dark">&larr; Prev</button>
          <button disabled={this.state.stop} type="button" onClick={this.HandleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
      
    )
  }
}

export default News

// Sabse pehle Constructor run hota h then render then at last componentDidMount