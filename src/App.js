import './App.css';
import Tracker from "./components/tracker";
import {useDispatch, useSelector} from "react-redux";
import {addTracker, updateTracker} from "./redux/actions";
import useInputValue from "./hooks/use-input-value";
import {useEffect} from 'react'

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
                <a onClick={add} className="waves-effect waves-light btn">+</a>
            </div>
            {displayTrackers()}
        </div>
    );
}

export default App;
