import React, { useEffect, useState } from 'react'
import './itemList.css'
// import { popularProducts } from '../../dummyData'
import Item from '../item/Item'
import axios from 'axios'


function ItemList({category, filters, sort}) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async() => {
      const res = await axios.get(category ? `/products?category=${category}` : `/products`)
      setProducts(res.data)
    }
    getProducts()
  },[category])

  useEffect(() => {
    category && setFilteredProducts(
      products.filter((item) => 
      Object.entries(filters).every(([key, value]) => item[key].includes(value))
      )
    )
  },[filters, products, category])

  useEffect(() => {
    if(sort === "newest")
    {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt)))
    }
    else if(sort === 'asc')
    {
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => a.price - b.price))
    }
    else{
      setFilteredProducts(prev => 
        [...prev].sort((a,b) => b.price - a.price))
    }
  },[sort])
  //console.log(filteredProducts)
  return (
    <div className='itemList'>
        { category ?  filteredProducts.map(item => (
            <Item item={item} key={item._id}/>
          )) :
          products.slice(0,8).map(item => (
            <Item item={item} key={item._id}/>
          ))
        }
    </div>
  )
}

export default ItemList