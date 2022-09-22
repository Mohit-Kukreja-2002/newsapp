import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,src,newsUrl,date,author,name} =this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={src?src:"https://t3.ftcdn.net/jpg/03/60/44/00/240_F_360440053_fwHrYjqYg45hD1qpqyllKce3T16d5Bdb.jpg"} className="card-img-top" alt="..." />

          <div style={{display: 'flex' , position: 'absolute',right: '0%',bottom: '98%' ,justifyContent: 'flex-end', fontSize: '1.2rem'}}>
            <span className="badge rounded-pill bg-danger">{name}</span>
          </div>
          <div className="card-body">
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