import React, { useState as UseState } from 'react'
import { Homes } from '../components/homes/homes'
import { Trending } from '../components/trending/trending';
import { Upcoming } from '../components/upcomming/upcomming';
import {latest, recommended, upcome} from '../dummyData'

export const Home = () => {
    const [items, setitems] = UseState(upcome);
    const [item, setitem] = UseState(latest);
    const [rec, setRec] = UseState(recommended);

  return (
    <>
    <Homes/>
    <Upcoming items={items} title='Upcoming Movies'/>
    <Upcoming items={item} title='Lasted Movies'/>
    <Trending/>
    <Upcoming items={rec} title='Recommended Movies'/>

    </>
  )
}
