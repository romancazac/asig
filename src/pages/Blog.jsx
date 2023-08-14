import { Link } from 'react-router-dom'

import { useContext } from 'react'
import { BlogContext } from '../contexts/BlogContext'

export const Blog = () => {
   const { articles } = useContext(BlogContext);

   return (
      <div className='blog'>
         <div className="container">
            <div className="blog__page">
               {
                  articles?.map((art) =>
                     <Link to={`/blog/${art.id}`} className="blog__row blog__row_nw">
                        <div className="blog__left">
                           <h3 className="blog__title">{art.title}</h3>
                           <p className="blog__text">{art.text.slice(0,250)}...</p>
                        </div>
                        <img src={`/${art.img}`} alt="" className="blog__img" />
                     </Link>
                  )
               }

            </div>

         </div>
      </div>
   )
}
