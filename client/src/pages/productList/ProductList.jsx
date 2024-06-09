import React, { useState } from 'react'
import './productList.css'
import Navbar from '../../components/navbar/Navbar'
import Announcement from '../../components/announcement/Announcement'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import ItemList from '../../components/itemList/ItemList'
import Footer from '../../components/footer/Footer'
import {useLocation} from 'react-router-dom'


function ProductList() {

    const location = useLocation()
    const category = location.pathname.split('/')[2]
    //console.log(category)

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("")

    const handleFilters = (e) => {
        setFilters({
            ...filters,
            [e.target.name] : e.target.value
        })
    }
    // console.log(filters)
    // console.log(sort)

  return (
    <div className='productList'>
        <Navbar/>
        <Announcement/>
        <div className="productListContainer">
        <div className="productListTitle">Dressess</div>
        <div className="productListSortingContainer">
            <div className="productListFiltering">
                <span className="filterProducts">Filter Products :</span>
                <select className="productListSelect" name="color" onChange={handleFilters}>
                    <option className='productListOption'  hidden >Color</option>
                    <option className='productListOption'>blue</option>
                    <option className='productListOption'>orange</option>
                    <option className='productListOption'>black</option>
                    <option className='productListOption'>green</option>
                    <option className='productListOption'>white</option>
                    <option className='productListOption'>pink</option>
                </select>
                <select className="productListSelect size" name='size' onChange={handleFilters}>
                    <option className='productListOption'hidden >Size</option>
                    <option className='productListOption'>S</option>
                    <option className='productListOption'>M</option>
                    <option className='productListOption'>L</option>
                    <option className='productListOption'>XL</option>
                    <option className='productListOption'>XXL</option>
                </select>
            </div>
            <div className="productListSorting">
                <span className="sortProducts">Sort Products :</span>
                <select className="productListSelect" onChange={(e) => setSort(e.target.value)} >
                    <option className='productListOption' hidden >Sort</option>
                    <option className='productListOption' value='newest'>Newest</option>
                    <option className='productListOption' value='asc'>Price (Asc)</option>
                    <option className='productListOption' value='desc'>Price (Desc)</option>
                </select>
            </div>
        </div>
            <ItemList category={category} filters = {filters} sort={sort}/>
            <NewsLetter/>
            <Footer/>
        </div>  
    </div>
  )
}

export default ProductList