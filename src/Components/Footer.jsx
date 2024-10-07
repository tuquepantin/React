function Footer() {
    return (
        <footer class="footer" style={{backgroundColor: '#D9D9D9'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-5">
                        <h5>© 2024 trufaeu. All rights reserved.</h5>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div class="col-md-4">
                        
                        <ul class="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Portfolio</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">

                        <h5>Social Media</h5>
                        <ul class="list-inline">
                            <li class="list-inline-item"><i class="fab fa-facebook-f"></i></li>
                            <li class="list-inline-item"><i class="fab fa-twitter"></i></li>
                            <li class="inline-item"><i
                                class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;