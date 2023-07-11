import React from 'react'
import './style.scss'
import b1 from '../../assets/img/blog/blog1.png'
import b2 from '../../assets/img/blog/blog2.png'
import b3 from '../../assets/img/blog/blog3.png'
export const BlogSection = () => {
   return (
      <section className='blog'>
         <div className="blog__container container">
            <div className="blog__top">
               <h2 className="blog__title section-title">Blog</h2>
            </div>
            <div className="blog__row">
               <div className="blog__column _ibg">
                  <img src={b1} alt="" className="" />
                  <div className="blog__content">
                     <h3 className="blog__title">Acțiuni în caz de accident</h3>
                     <p className="blog__text">De aceasta data as vrea sa-ti explic cum trebuie sa procedezi in caz de accident, indiferent daca esti sau nu vinovat...</p>
                     <a href="" className="blog__link btn-arr btn-arr_w"><span>Mai mult</span></a>
                  </div>
               </div>
               <div className="blog__column _ibg">
                  <img src={b2} alt="" className="blog__img" />
                  <div className="blog__content">
                     <h3 className="blog__title">Ce este și cum funcționează asigurarea Carte Verde?</h3>
                     <p className="blog__text">Sunt sigur că ai auzit de mai multe ori vorbindu-se despre asigurarea Carte Verde...</p>
                     <a href="" className="blog__link btn-arr btn-arr_w"><span>Mai mult</span></a>
                  </div>
               </div>
               <div className="blog__column _ibg">
                  <img src={b3} alt="" className="" />
                  <div className="blog__content">
                     <h3 className="blog__title">Cât costă o asigurare RCA și cum se calculează prețul?</h3>
                     <p className="blog__text">Dacă ai o mașină sau urmează să îți iei una, trebuie să știi că nu poți circula pe ...</p>
                     <a href="" className="blog__link btn-arr btn-arr_w"><span>Mai mult</span></a>
                  </div>
               </div>
            </div>
            <div className="blog__more">
               <a href="#" className="blog__link btn-arr"><span>Vezi toate</span></a>
            </div>

         </div>
      </section>
   )
}
