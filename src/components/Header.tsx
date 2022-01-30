
import logo from '../img/cinema.png'

const Header = () => {
    return (
       <div className="p-5">
           <img src={logo} alt='logo here' />
           <h5 className='mt-2'>Find all now showing movies in your city in one place! </h5>
       </div>
    )
}

export default Header;