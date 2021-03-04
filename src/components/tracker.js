import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPause} from "@fortawesome/free-solid-svg-icons";
import '../App.css'
import {useDispatch} from "react-redux";
import {deleteTracker, pauseTracker, resumeTracker, updateTracker} from "../redux/actions";

export default function Tracker({tracker}) {
const dispatch = useDispatch()
    function pause(tracker){
        dispatch(pauseTracker(tracker))
    }

    function resume(tracker){
        dispatch(resumeTracker(tracker))
    }

    function remove(tracker){
        dispatch(deleteTracker(tracker))
    }

    function formatter(time){
        return time < 10 ? "0" + time : time
    }
    const {name, time, isActive} = tracker

    return (
        <>
            <div className="collection">
                <div className={isActive ? 'collection-item is-active' : 'collection-item'}>
                    <span className="name">{name}</span>
                    <span className="time">{formatter(time.H)}:{formatter(time.M)}:{formatter(time.S)}
                        <span className="icons">
                            {isActive
                                ? <FontAwesomeIcon className='icon pause' icon={faPause} onClick={() => pause(tracker)}/>
                                : <FontAwesomeIcon className='icon resume' icon={faPlay} onClick={() => resume(tracker)}/>}
                            <FontAwesomeIcon className='icon delete' icon={faTrash} onClick={() => remove(tracker)}/>
                        </span>
                    </span>

                </div>
            </div>
        </>
    )
}