import React, { useContext } from 'react'
import './style.scss'

import { BlogContext } from '../../contexts/BlogContext'
import { Link } from 'react-router-dom'
export const BlogSection = () => {
   const { articles } = useContext(BlogContext)
   return (
      <section className='blog'>
         <div className="blog__container container">
            <div className="blog__top">
               <h2 className="blog__title section-title">Blog</h2>
            </div>
            <div className="blog__row">

               {
                  articles?.map((blog) =>
                     <div className="blog__column _ibg">
                        <img src={`${blog.img}`} alt={blog.title} />
                        <div className="blog__content">
                           <h3 className="blog__title">{blog.title}</h3>
                           <p className="blog__text">{blog.text.slice(0,150)}...</p>
                           <Link to={`/blog/${blog.id}`} className="blog__link btn-arr btn-arr_w"><span>Mai mult</span></Link>
                        </div>
                     </div>

                  )
               }


   
            </div>
            <div className="blog__more">
               <Link to='blog' className="blog__link btn-arr"><span>Vezi toate</span></Link>
            </div>

         </div>
      </section>
   )
}
