import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon';

export const PokemonApp = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemons());
    }, [])

    return (
        <>
            <h1>Pokemon Api</h1>
            <hr />
            <ul>
                <li>Pokemon 1</li>
                <li>Pokemon 2</li>
                <li>Pokemon 3</li>
            </ul>
        </>
    )
}
