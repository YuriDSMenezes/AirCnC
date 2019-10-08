import React, { useEffect, useState } from 'react';
// useEffect para executar a função assim que carregar a página
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css'


export default function Dashboard() {
    const [spots, setSpots] = useState([]);

    useEffect(() => { // usar o array em branco para executar uma vez apenas
        async function loadSpots() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/profile', {
                headers: {user_id}
            })
            setSpots(response.data)
        }

        loadSpots();
    }, []); //sempre que o que estiver dentro do array mudar ele executa o codigo dentro do useEffect

    return (
        <>
            <ul className="spot-list">
            {spots.map(spot => (
                <li key={spot._id}>
                    <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }}/>
                    <strong>{spot.company}</strong>
                    <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
                </li>
            ))}
            </ul>
                {/* mandar para outra página */}
            <Link to="/new">  
               <button className="btn"> Cadastrar novo spot</button>
            </Link>
        </>
    )
}