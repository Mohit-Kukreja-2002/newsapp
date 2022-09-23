import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // const [stop, setstop] = useState(false)

  // Remvoed the class based constructor
  // constructor(){
  //   super();
  //   this.state={
  //     articles: [],
  //     // loading: false,
  //     loading: true,
  //     page: 1,
  //     totalResults: 0,
  //     stop: false
  //   }
  // }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(10);
    // setloading(true)
    // document.title=`${capitalizeFirstLetter(props.category)} - NewzMonkey`
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    let data = await fetch(url);
    props.setProgress(25);
    let parsedData = await data.json();
    // console.log(parsedData);
    props.setProgress(50);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100);
  }

  // const HandleNextClick = async() => {
  //   // console.log(this.state.page);
  //   if(page + 1 >Math.ceil(totalResults/props.pagesize)){
  //     // console.log(this.state.stop);
  //   }
  //   else{
  //     setpage({page}+1);
  //     updateNews();
  //     if(page + 1 >Math.ceil(totalResults/props.pagesize)){
  //       setstop(true);
  //     }
  //   }

  // }

  //  const HandlePrevClick = async()=>{
  //     setpage({page}-1);
  //     updateNews();
  //   }

  useEffect(() => {
    updateNews();
  },[]);

  // async componentDidMount(){
  //   this.updateNews();
  // }

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
    // this.setState({loading: true})
    // document.title=`${capitalizeFirstLetter(props.category)} - NewzMonkey`
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  }

  return (
    <>
      <h1 className="text-center text-info" style={{marginTop: '100px'}}>Top {capitalizeFirstLetter(props.category)} News</h1>
      {loading && <Spinner />}

      <InfiniteScroll
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        dataLength={articles.length}
        loader={<Spinner />}>

        <div className="container my-3">

          <div className="row">
            {//!this.state.loading && 
              articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title} description={element.description} src={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.source.name} />
                </div>
              })}
          </div>
        </div>

      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1}type="button" onClick={this.HandlePrevClick} className="btn btn-dark">&larr; Prev</button>
          <button disabled={this.state.stop} type="button" onClick={this.HandleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div> */}
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pagesize: 6,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string
}

export default News

// Sabse pehle Constructor run hota h then render then at last componentDidMount