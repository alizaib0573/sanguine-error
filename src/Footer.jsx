export default function Footer(){

    return(
            <div className="footer">
                <img className='logo' src={'logo.png'}/>
                <div className="contact-details-container flex gap-4" style={{flexDirection:"row"}}>
                <p>Sanguine Advertising Ltd</p>
                <p>Registered in England and Wales</p>
                <p>Covent Garden London</p>
                </div>


            </div>
    )
}