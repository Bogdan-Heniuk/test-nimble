import './App.css';
import Tracker from "./components/tracker";
import {useDispatch, useSelector} from "react-redux";
import {addTracker} from "./redux/actions";
import useInputValue from "./hooks/use-input-value";
function App() {
    const trackers = useSelector(state => state.tracker)
    const dispatch = useDispatch()
    const input = useInputValue('')
    const add = () => {
        dispatch(addTracker({
            id : Math.random(),
            name : input.value(),
            time : {
                H : 0,
                M : 0,
                S : 0
            },
            isActive : true
        }))
        input.clear()
    }
    return (
      <div className='container'>
          <div style={{display: "flex", alignItems: "center"}}>
              <input type="text" {...input.bind}/>
              <a onClick={add} className="waves-effect waves-light btn">+</a>
          </div>

          {trackers.map(tracker => <Tracker key = {tracker.id} tracker = {tracker}/>)}

      </div>
  );
}

export default App;
