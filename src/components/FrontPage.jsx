import React from 'react'
import Show from './Show'
import { useState,useEffect } from 'react';



function FrontPage() {
    const [data,setdata] = useState("");
    
    const fetchdata = async ()=>{
        const data = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const json = await data.json();
        setdata(json);
        console.log(json)
    }
    
    useEffect(()=>{
        fetchdata();
    },[])

    if (!data) return <h1>loading...</h1>

  return (
    <div>

        <div className='flex flex-wrap justify-evenly text-cyan-50 bg-slate-900'>
        {
            data.map(element => {
              return <Show showdata={element.show} key={element.show.id} />
            })
        }
        </div>

    </div>
  )
}

export default FrontPage