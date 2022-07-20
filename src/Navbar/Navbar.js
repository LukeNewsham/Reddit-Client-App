import './Navbar.css';


export default function Navbar() {
    return (
        <div className='nav'>
            <a href='/' className='siteTitle'> Reddit App </a>
            <ul>

                <li>
                    <a href='/favprites' className='favorites'> Favorites: </a>
                </li>
            </ul>
        </div> 
    )
}