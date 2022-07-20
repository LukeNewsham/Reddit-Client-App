import './Navbar.css';


export default function Navbar() {
    return (
        <div className='nav'>
            <a href='/' className='siteTitle'> Reddit App </a>
            <ul>
                <li>
                    <a href='/favorites' className='favorites'> Favorites </a>
                </li>
                <li>
                    <a href='/About' className='About'> About </a>
                </li>
            </ul>
        </div> 
    )
}