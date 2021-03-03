import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import '../App.css'

export default function Tracker(props) {
    return (
        <>
            <div className="collection">
                <div className="collection-item">
                    <span className="name">Tracker</span>
                    <span className="time">20:20:20
                        <span className="icons">
                            <FontAwesomeIcon className='icon' icon={faPlay}/>
                            <FontAwesomeIcon className='icon' icon={faMinusCircle}/>
                        </span>
                    </span>

                </div>
            </div>
        </>
    )
}