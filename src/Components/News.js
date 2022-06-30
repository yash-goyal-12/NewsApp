import React ,{useEffect , useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';

const News = (props) => {
  
   const [articles , setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  
const capitaliseFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
setLoading(true)
let data = await fetch(url);
let parsedData = await data.json()

  setArticles(parsedData.articles)
  setLoading(false)
  setTotalResults(parsedData.totalResults)
  } 
  useEffect(() => {
    document.title = `${capitaliseFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  } ,[])

const handleNextClick = async()=> {
setPage(page+1)
updateNews();
}

const handlePrevClick = async()=> {
setPage(page-1)
updateNews();
}
    return (
      <div className="container my-3">
        <h1 className="text-center" style = {{marginTop : '80px'}}>NewsMonkey - Top {capitaliseFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <div className="row my-3">
          {!loading && articles.map((element) => {
            return (
              <div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,15): ""} description={element.description?element.description.slice(0,88):""} 
                imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} source = {element.source.name}/>
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between" >
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; previous</button>
        <button disabled={page+1 >Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>next &rarr;</button>
        </div>
      </div>
    );
  } 


News.defaultProps = {
  country : "in",
  pageSize : 5,
  category : "general"
  }

  News.propTypes = {
      country : PropTypes.string,
      pageSize : PropTypes.number,
      category : PropTypes.string
  }

export default News;

