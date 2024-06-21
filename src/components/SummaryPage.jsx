import React, { useState ,useContext} from 'react';
import { useLocation } from 'react-router-dom';
import Form from './Form';
import { formContext } from '../context/context';

function SummaryPage() {
    const location = useLocation();
    const data = location?.state?.data?.showdata;
    console.log(data)
    const [form,setForm] = useContext(formContext)
    console.log("asdas",form)
    const handleClick = () => {
        setForm(true);
    }

    return (
        <div className='w-screen h-auto bg-slate-900 p-4 lg:h-screen'>
            <div className='flex flex-col md:flex-row text-cyan-50'>
                <img className='w-full md:w-96 h-96 object-cover' src={data?.image?.original ||"https://upload.wikimedia.org/wikipedia/commons/b/ba/No_image_available_400_x_600.svg"} alt={data.name} />
                <div className='flex flex-col p-4'>
                    <h1 className='font-bold text-2xl p-2'>{data.name}</h1>
                    <p className='text-xl p-2' dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                    <div className='p-2'>
                        <span className='text-xl'>Genres: </span>
                        {
                            data.genres.map((e, index) => <span key={index} className="text-xl py-1 px-2">{e}</span>)
                        }
                    </div>
                    <h1 className='text-xl p-2'>Rating: {data.rating.average}</h1>
                    <h1 className='text-xl p-2'>Language: {data.language}</h1>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <button onClick={handleClick} className='bg-red-600 text-white px-6 py-3 m-5 text-xl rounded'>
                    Book Ticket
                </button>
            </div>
            {form && <Form name={data.name} />}
        </div>
    )
}

export default SummaryPage;
