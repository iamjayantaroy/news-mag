import { useEffect, useState } from "react";
import NewItem from "./NewItem";

const NewsBoard = ({ category, setCategory }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles));
  }, [setCategory]);
  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
        <div className="container-xl">
          {article.map((news, idx) => {
            return (
              <NewItem
                key={news}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                news={news.url}
              />
            );
          })}
        </div>
      </h2>
    </div>
  );
};

export default NewsBoard;
