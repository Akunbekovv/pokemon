import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons, pokeState} from "../../redux/slices/pockemonsSlices";
import PokeCard from "../../compomemts/PokeCard/PokeCard";
import {CircularProgress, Pagination} from "@mui/material";
import style from './style/MainPage.module.css'
const MainPage = () => {
    const dispatch = useDispatch()
    const {pokemons, load} = useSelector(pokeState)
    const [offset, setOffset] = useState(1)
    let limit = 8


    useEffect(() => {
        dispatch(getPokemons({
            limit,
            offset
        }))
    }, [dispatch, offset])
    return (
        <div className={style.blockM}>
            {

                !load
                    ?
                    <div className={style.block}>
                        <ul>
                            {pokemons?.results?.map(i => <PokeCard i={i}/>)}
                        </ul>
                    </div>
                    :
                    <div>
                        <CircularProgress/>
                    </div>
            }
            {
                pokemons?.count >= 8
                &&
                <Pagination
                    className={style.pagination}
                    page={offset / limit + 1}
                    onChange={(_,p) => setOffset((p - 1) * limit)}
                    count={Math.ceil(pokemons?.count / limit)}
                    color='primary'
                />
            }
        </div>
    );
};

export default MainPage;