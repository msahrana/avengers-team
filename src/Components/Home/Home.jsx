/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [allActors, setAllActors] = useState([])
    const [selectedActors, setSelectedActors] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    } , [])

    const handleSelectActor = (actor) =>{
        const isExist = selectedActors.find(item =>item.id ===actor.id)
        let count = actor.salary
        if (isExist) {
            return alert('already booked')
        }else{
            selectedActors.forEach(item =>{
                count = count + item.salary
            })
            const remainingTotal = 40000 - count

            if (count > 40000) {
                return alert('taka ses, bari jaa...')
            }
            else{
                setTotalCost(count)
                setRemaining(remainingTotal)
                console.log(remainingTotal)
                setSelectedActors([...selectedActors, actor])
            }
        } 
    }

    return (
        <div className='container'>
            <h1 className='home'>Avengers Team :</h1>
            
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map(actor => (                    
                        <div key={actor.id} className="card">
                        <div className="card-img">
                            <img className='photo' src={actor.image} alt="" />
                     </div>
                        <h2 className='name'>{actor.name}</h2>
                        <p className='detail'><small>Description</small></p>
                        <div className="info">
                            <p>salary: $ {actor.salary}</p>
                            <p>role: {actor.role}</p>
                        </div>
                        <button onClick={()=>handleSelectActor(actor)} className='btn-pry'>Select</button>
                    </div>))
                    }
                </div>

                <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
            </div>
        </div>
    );
};

export default Home;