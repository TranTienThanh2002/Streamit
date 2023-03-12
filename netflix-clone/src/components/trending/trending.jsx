import React, { useState } from 'react'
import { trending } from '../../dummyData';
import { Home } from '../homes/home'
import './trending.css'
export const Trending = () => {
    const [items, setitems] = useState(trending);
  return (
    <>
        <section className="trending">
            <Home items={items}/>
        </section>
    </>
  )
}
