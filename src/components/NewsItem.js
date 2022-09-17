import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,src,newsUrl} =this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={src?src:"https://t3.ftcdn.net/jpg/03/60/44/00/240_F_360440053_fwHrYjqYg45hD1qpqyllKce3T16d5Bdb.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem