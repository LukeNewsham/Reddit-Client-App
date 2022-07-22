import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        
        <div className='nav'>
            <Link to='/home' className='siteTitle'> Reddit App </Link>            
            <ul>
                <li>
                    <Link to='/home' className='home'> Search  </Link>
                </li>
                <li>
                    <Link to='/favorites' className='favorites'> Favorites </Link>
                </li>
                <li>
                    <Link to='/About' className='about'> About </Link>
                </li>
            </ul>
        </div> 
    )
}