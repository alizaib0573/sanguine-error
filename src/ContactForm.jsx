export default function ContactForm(){

  return(
  <>
  <div class="container container-contactus">
  <div class="row ">
    <div class="col-lg-6">
      <div class="contat-form-heading">
        <h2 className="text-center">What can we <br /> do for you? <br /> Get in touch</h2>
      </div>
    </div>
    <div class="col-lg-6   ">
      <form class="form-inline" action="https://formsubmit.co/alizaib00500@gmail.com" method="POST">
        <div class="form-group  mx-sm-3 mb-2">
          <input name="name" type="text" class="form-control feedback-input" placeholder="Name" required />
        </div>
        <div class="form-group    mx-sm-3 mb-2">
          <input name="email" type="email" class="form-control feedback-input" placeholder="Email" required />
        </div>
        <div class="form-group  mx-sm-3 mb-2">
          <textarea name="text" class="form-control feedback-input" placeholder="Comment" required></textarea>
        </div>
        <button type="submit" class="btn  mx-sm-3 btn-primary mb-2" style={{width:'92%'}}>SUBMIT</button>
      </form>
    </div>
  </div>
</div>


 
  </>
)
 

}