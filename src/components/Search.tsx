import './shared/shared.css'
import { cities } from './shared/cities';

import Button from './controle/Button';
import Select from './controle/Select';

const Search = () => {
    return (
        <div className="card mx-5 p-5">
            <div className="card-body">
                <div className="row text-end">
                    <div className='col-6 mt-1'>
                        {
                            cities.map((city, index) => {
                                return (
                                    <Button classes="btn-sm btn-outline-info mx-2" key={index} text={city} />
                                )
                            })
                        }
                    </div>
                    <div className='col-4'>
                        <Select options={[]} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search;