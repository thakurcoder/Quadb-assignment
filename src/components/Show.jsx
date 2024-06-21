import React from 'react'
import {useNavigate} from 'react-router-dom'

function Show(props) {
    const navigae = useNavigate();

    
  return (
    <div>
        {/* image */}
        <div className=' w-56 m-5 p-2 justify-evenly cursor-pointer' onClick={()=>navigae("/summary",{state:{data:props}})}>
            <img className='mb-2' src={props?.showdata?.image?.original || "https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg"} />
            <h1 className='font-bold text-2xl'>{props.showdata.name}</h1>
            <span className='text-xl '>Genres: </span>
            {
                props.showdata.genres.map((e)=> <span className="text-xl py-1 px-1 ">{e}</span>)
            }

        <h1 className='text-xl'>Rating: {props.showdata.rating.average}</h1>
        
        </div>

    </div>
  )
}

export default Show