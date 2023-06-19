import axios from "axios";
import { useEffect, useState } from "react";


export default function News (){

  var NEWSAPI=`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=59a1cabbdeec4ae59a8d7de6eeff194e`;

  const [articleNum,setArticleNum]= useState(5);
  const[articles,setArticles]= useState([]);
  useEffect(()=>{

    const getArticles = async ()=>{
    const response = await axios.get(NEWSAPI)
    setArticles(response.data.articles)
    }

    getArticles()
       
  },[])
 
  return (

    <div>
    {articles.slice(0,articleNum).map(article => {
       
        return(
          <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
          <a rel="noreferrer" href={article.url} target="_blank">
          <div className="flex items-center justify-between px-4 py-2 space-x-1 hover:bg-gray-200 transition duration-500 ease-out">
            <div className="space-y-0.5">
              <h6 className="text-sm font-bold">{article.title}</h6>
              <p className="text-xs font-medium text-gray-500">
                {article.author}
              </p>
            </div>
            <img
              className="rounded-xl "
              width="70"
              src={article.urlToImage}
              alt=""
            />
          </div>
        </a>
        </div>

        )
    })}

        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
</div>


  )
 }

