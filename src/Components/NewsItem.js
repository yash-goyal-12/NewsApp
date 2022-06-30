import React from 'react'

const NewsItem = (props) => {
    let {title , description , imageUrl , newsUrl , author , date , source} = props;
    return (
        <div>
        <div className="card">
  <img src={imageUrl? imageUrl: "https://photos5.appleinsider.com/gallery/49016-95906-13-inch-MacBook-Pro-M2-xl.jpg" } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%' , zIndex : '1'}}>
    {source}
  </span></h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"> <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small> </p>
    <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
  </div> 
</div>
</div>
    )
  }

export default NewsItem