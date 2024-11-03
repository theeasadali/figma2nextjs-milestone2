import Image from "next/image";

export default function ContactUs() {
    return(
        <section>
            <h2>Contact Us</h2>
            <div className="contactUsContent">
                <form>
                    <div>
                        <input type="text" placeholder="Name"/>
                        <input type="phone" placeholder="Phone Number"/>
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Interested in"/>
                        <textarea placeholder="Message"></textarea>
                    </div>
                    <button className="darkBtn">Send Email <span>&rarr;</span></button>
                </form>
                <Image src={"/img/contact-img.png"} height={369} width={749} alt="Contact Image"/>
            </div>
        </section>
    )
}