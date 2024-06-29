import { Link } from "react-router-dom"

function Navbar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-primary-subtle">
            <div className="container">
                <a class="navbar-brand " href="#"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Boost_Mobile_logo.svg/2560px-Boost_Mobile_logo.svg.png" alt="logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <Link to={"/"} class="nav-link fw-Medium text-primary-emphasis" href="#">Home</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to={"/product"} class="nav-link fw-Medium text-primary-emphasis" href="#">Product</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/about"} class="nav-link fw-Medium text-primary-emphasis" href="#">About</Link>
                        </li>
                        <li class="nav-item mx-4">
                            <Link to={"/contact"} class="nav-link fw-Medium text-primary-emphasis" href="#">Contact</Link>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-1 border border-primary-subtle transpernt" type="search" placeholder="Search Product" aria-label="Search" />
                        <button class="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar