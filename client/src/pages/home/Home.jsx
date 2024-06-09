import React from 'react'
import './home.css'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'
import Categories from '../../components/categories/Categories'
import ItemList from '../../components/itemList/ItemList'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div className='home'>
        <Announcement/>
        <Navbar/>
        <div className="homeContainer">
          <Slider/>
          <Categories/>
          <ItemList/>
          <NewsLetter/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home