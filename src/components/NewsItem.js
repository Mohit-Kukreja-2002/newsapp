import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,src,newsUrl,date,author,name} =this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={src?src:"https://t3.ftcdn.net/jpg/03/60/44/00/240_F_360440053_fwHrYjqYg45hD1qpqyllKce3T16d5Bdb.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
          
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex: '1' ,fontSize: '0.9rem'}}>{name}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <div className="card-footer">
              <small className="text-muted">{(author)?"By "+author : "Published "} on {date.slice(0,10)+" at "+date.slice(11,19)}</small>
            </div>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem