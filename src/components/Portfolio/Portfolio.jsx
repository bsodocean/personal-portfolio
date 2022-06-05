import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const dataPullArray = [
  {
    id: 1,
    img: IMG1,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  },  
  {
    id: 2,
    img: IMG2,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  },
  {
    id: 3,
    img: IMG3,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  },
  {
    id: 4,
    img: IMG4,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  },
  {
    id: 5,
    img: IMG5,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  },
  {
    id: 6,
    img: IMG6,
    title: "This is a Work of Art",
    source: 'https://github.com/',
    live: 'https://www.growcase.com/'
  }  


]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Look into</h5>
      <h2>My Latest Projects</h2>

      <div className="portfolio_container">
        {
        dataPullArray.map(({ id, img, title, source, live }) => {
          return (
            <article key = {id}  className="portfolio_item">
          <div className="portfolio_item-img">
            <img src = {img} alt="" />
          </div>
            <h3>{title}</h3>
            <div className = "cta_btns">
            <a href = {source} className = "btn btn-secondary">View Source</a>
            <a href = {live} className = "btn btn-secondary" target = "_blank">Live Preview</a>
            </div>
        </article>
        )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio