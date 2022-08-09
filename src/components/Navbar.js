function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "/image/trollface.png"} alt="trollface-logo" className="nav-logo"/>
            <h1 className="nav-title">Meme Generator</h1>
        </nav>
    )
}

export default Navbar;