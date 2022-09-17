import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    this.state={
      articles: [],
      loading: false,
      page: 1
    }
  }
  
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ac796d46c6ea4907bfffcbaa2e170446";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});

  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-info">TOP NEWS</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4">
              <NewsItem key={element.url} title={element.title} description={element.description} src={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default News

// Sabse pehle Constructor run hota h then render then at last componentDidMount