import React, { useEffect, useState } from 'react'
import { useAppServices } from '../services/appServices'
import { useParams } from 'react-router-dom';

export const BlogSingle = () => {
  const { getArticle } = useAppServices();
  const [article, setArticle] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getArticle(id).then((data) => setArticle(data))

  }, []);

  console.log(article);
  return (

    <div className='blog'>
      <div className="container">
        <div className="blog__page blog-single">
          <h3 className="blog__title blog-single__title">{article.title}</h3>
          <img src={`/${article.img}`} alt={article.title}  className='blog-single__img'/>
          <p className='blog-single__date'>{article.date}</p>
          <div className="blog-single__text">
            {article.text}
          </div>
        </div>

      </div>


    </div>
  )
}
