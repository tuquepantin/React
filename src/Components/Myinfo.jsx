function Myinfo() {
    return (
        <>
            <div className="container p-5">
                <div class="row">
                    <div class="col-md-7">
                        <div>
                            <h2>Meet the artist <br /> behind trufaeu</h2>
                            <div style={{ width: '70%', height: '25vh' }}>
                                <p>Eugenia Pantin (trufaeu) is a talented illustrator from Venezuela, who creates captivating artwork that brings her imagination to life. With her impressive style and attention to detail, she is able to capture the essence of any subject and create stunning visuals that resonate with viewers. Whether you're looking for a custom illustration, a print to decorate your space, or a piece of merchandise that showcases trufaeu's art, you'll find it all here. Explore her portfolio and be inspired by her creativity!</p>
                                <p>Email: contact@trufaeu.com</p>
                            </div>

                        </div>
                    </div>
                    <div class="col-md-5">
                        <div className="grisimg position-relative">
                            <img className="position-absolute top-100 start-100 translate-middle imgverde" src="Logoverde.png" alt="" />

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                        <p className="App" style={{backgroundColor: '#D9D9D9', width: '95px'  }}>Portfolio</p>
                        </div>
                        <div class="col-md-3">
                        <p className="App" style={{backgroundColor: '#D9D9D9', width: '130px'  }}>Social Media</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Myinfo;