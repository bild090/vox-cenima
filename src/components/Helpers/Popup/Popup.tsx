import './Popup.css';

import vox from '../../../img/vox.png'
import Button from '../../controle/Button';

interface Props {
    PopupHandler: () => void;
    showTimes: any
}

const Popup = (props: Props) => {

    const { showTimes, PopupHandler } = props;
    return (
        <div className=".outer-border">
            <div className="popup-Container">
                <div className="popup-booking">
                    <div className="d-flex justify-content-between">
                        <p className="mt-3"> Show Times </p>
                        <h3 className="p-2" onClick={PopupHandler}> X </h3>
                    </div>
                    <hr />
                    <img src={vox} alt="VOX" />
                    {
                        showTimes.map((show: any, index: any) => {
                            return (
                                <div className="row text-start">
                                    <div className='col-8 mt-2'>
                                        <h4 className="mt-2">{show.place}</h4>
                                        {
                                            show.times.map((time: any) => {
                                                return (
                                                    <Button classes="btn-sm btn-outline-info mx-2 mt-2" text={time.time} url={time.link} />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="text-end">
                        <Button text="Cancel" classes="btn-warning btn-lg  mx-2 mt-3" onClick={PopupHandler} />  
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Popup;