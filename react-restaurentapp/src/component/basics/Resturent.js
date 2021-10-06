import React,{useState} from 'react';
import "./style.css";
import Menu from "./MenuApi";
import MenuCard from './MenuCard';
 const Resturent = () => {

    const [state, setstate] = useState(Menu);
    console.log(state);

    return (
        <>
        <MenuCard state={state}/>
                    
        </>
    )
}

export default Resturent
