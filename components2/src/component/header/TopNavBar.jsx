const TopNavBar = () => {
    const price = 50
    return <nav>
        <div>
            <p>free shopping on all u.s orders over ${price}</p>
        
        </div>
        <div>
            <ul>
                <li>USD</li>
                <li>English</li>
                <li>My <Account></Account></li>
            </ul>
        </div>
    </nav>
}
export default TopNavBar;