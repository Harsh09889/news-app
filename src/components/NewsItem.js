import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {

    let {title,description,imageUrl,newsUrl} = this.props


    return (
      <div>
        <div className="card" style={{marginTop :"3rem"}}>
          <img src={imageUrl} style={{height:"200px"}} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read Full news</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
