import './App.css';
import Tracker from "./components/tracker";
import {useDispatch, useSelector} from "react-redux";
import {addTracker, updateTracker} from "./redux/actions";
import useInputValue from "./hooks/use-input-value";
import React, {useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";

function App() {
    const trackers = useSelector(state => state.trackers)
    const dispatch = useDispatch()
    const input = useInputValue('', {onEnter: add})

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateTracker());
        }, 1000);
        return () => clearInterval(interval);
    }, [dispatch]);

    function add() {
        dispatch(addTracker(input.value()))
        input.clear()
    }

    function displayTrackers() {
        return trackers.map(tracker => <Tracker key={tracker.id} tracker={tracker}/>)
    }

    return (
        <div className='container'>
            <div style={{display: "flex", alignItems: "center"}}>
                <input type="text" {...input.bind}/>
                    <FontAwesomeIcon className='icon add' icon={faPlay} onClick={add}/>
            </div>
            {displayTrackers()}
        </div>
    );
}

export default App;
