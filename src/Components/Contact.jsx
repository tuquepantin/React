function Contact() {
    return (
        <div className="p-5">
            <div className="container p-5">
                <div class="row">
                    <div class="col-md-6">
                        <div className="grisimg responsive-div">


                        </div>
                    </div>
                    <div class="col-md-6">
                        <div className="p-3">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputName" class="form-label">Name</label>
                                    <input type="name" class="form-control" id="exampleInputName" aria-describedby="emailHelp"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail" class="form-label">E-mail</label>
                                    <input type="email" class="form-control" id="exampleInputEmail"/>
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputMessage" class="form-label">Message</label>
                                    <textarea name="career[message]" class="form-control" tabindex="4"
                                        placeholder="Write your details" required></textarea>
                                </div>

                                <button type="submit" class="btn btn-light">Submit</button>
                            </form> 
                        </div>
                        <p><br />contact@trufaeu.com</p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact;
