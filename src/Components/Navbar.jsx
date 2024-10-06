
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary colorNav">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TRUFAEU</a>
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
      <span class="navbar-text">
        Account
      </span>
    </div>
  </div>
</nav>
    )
}
export default Navbar;