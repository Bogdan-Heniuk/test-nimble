import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {faPause} from "@fortawesome/free-solid-svg-icons";
import '../App.css'

export default function Tracker({tracker}) {
    const formatter = (time) => {
        return time < 10 ? "0" + time : time
    }
    const {name, time, isActive} = tracker
    return (
        <>
            <div className="collection">
                <div className="collection-item">
                    <span className="name">{name}</span>
                    <span className="time">{formatter(time.H)}:{formatter(time.M)}:{formatter(time.S)}
                        <span className="icons">
                            {isActive ? <FontAwesomeIcon className='icon' icon={faPause}/> : <FontAwesomeIcon className='icon' icon={faPlay}/>}
                            <FontAwesomeIcon className='icon' icon={faMinusCircle}/>
                        </span>
                    </span>

                </div>
            </div>
        </>
    )
}