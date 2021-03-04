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
            run()
        }, 1000);
        return () => clearInterval(interval);
    }, [trackers]);

    function add() {
        dispatch(addTracker({
            id: Math.random(),
            name: input.value() || new Date().toLocaleDateString(),
            time: {
                H: 0,
                M: 0,
                S: 0
            },
            isActive: true
        }))
        input.clear()
    }

    function run() {
        if(!trackers.length) return
        trackers.forEach(tracker => {
            if (tracker.isActive) {
                tracker.time.S++
                if (tracker.time.S === 60) {
                    tracker.time.M++
                    tracker.time.S = 0
                }
                if (tracker.time.M === 60) {
                    tracker.time.H++
                    tracker.time.M = 0
                }
            }
            dispatch(updateTracker(trackers));
        })

    }

    function displayTrackers(){
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
