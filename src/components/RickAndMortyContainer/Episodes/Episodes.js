import React, {useEffect} from 'react';
import Episode from "../Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {episodeAction} from "../../../redux/slices/episodesSlice";

const Episodes = () => {
    // const [episodes, setEpisodes] = useState([])
    // useEffect(()=>{
    //     fetch('https://rickandmortyapi.com/api/episode')
    //         .then(res=>res.json())
    //         .then(data=> setEpisodes(data.results))
    //     },[])
    const dispatch = useDispatch()
    const {episodes} = useSelector(state => state.episodes)
    useEffect(()=>{
        dispatch(episodeAction.all())
    }, [])
    return (
        <div>
            {episodes.map((episode) =>
               <Episode key={episode.id} episode={episode}/>


            )}
        </div>
    );
};

export default Episodes;