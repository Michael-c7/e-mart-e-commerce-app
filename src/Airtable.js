import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"


// an example of how to get data from my airtable
const url = "/api/products"

const Airtable = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get(url)
            setProducts(data)
        } catch(error) {

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

// api from our own server, setup for our own react project
  return (
    <section className="section section-center">
      airtable
    </section>
  )
}

export default Airtable