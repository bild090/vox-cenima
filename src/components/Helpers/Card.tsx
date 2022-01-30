import { useState } from 'react';
import '../shared/shared.css'

import Popup from './Popup/Popup'

interface Props {
    content: any
}

const Card = (props: Props) => {
    const { content } = props
    const [popUp, setPopUp] = useState(false);

    const PopupHandler = () => {
        setPopUp(!popUp);
    }
    return (
        <>
            <div onClick={PopupHandler} className="col-3 d-flex align-items-stretch mb-4">
                <div className="card p-1" >
                    <img src={content.poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{content.name}</p>
                        <p className="card-text">{content.classification}</p>
                        <p className="card-text">{content.lang}</p>
                        <p className="card-text">{content.time}</p>
                    </div>
                </div>
            </div>
            {popUp &&
                <div>
                    <Popup showTimes={content.showTimes} PopupHandler={PopupHandler} />
                </div>
            }
        </>
    )
}

export default Card;