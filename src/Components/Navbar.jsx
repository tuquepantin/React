
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary colorNav">
            <div class="container-fluid">
                <a class="navbar-brand fs-3 position-absolute top-0 start-50 translate-middle-x">trufaeu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Portfolio</a>
                        </li>
                    </ul>
                    <a class="nav-link" href="#">Account</a>
                    <div class="cuadro-30x30 navbar-text "></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;