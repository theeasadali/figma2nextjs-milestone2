import Image from "next/image"
import Link from "next/link"

export default function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="footer-content-group">
                    <Image className="footer-logo" src={'/img/logo-onDark.png'} height={94} width={145} alt="Digital Projects - Dark Bg Logo"/>
                    <div className="footer-content">
                        <div className="details">
                            <div className="details-group">
                                <h6>Information</h6>
                                <div>
                                    <Link href={`/`}>Main</Link>
                                    <Link href={`/gallery`}>Gallery</Link>
                                    <Link href={`/gallery`}>Projects</Link>
                                    <Link href={`/gallery`}>Certifications</Link>
                                    <Link href={`/gallery`}>Contacts</Link>
                                </div>
                            </div>
                            <div className="details-group">
                                <h6>Contacts</h6>
                                <div>
                                    <div className="contact-method">
                                        <Image src={`/img/location-icon.svg`} width={16} height={16} alt="Location Map pin icon"/>
                                        <span>1234 Sample Street
                                        Austin Texas 78704</span>
                                    </div>
                                    <div className="contact-method">
                                        <Image src={`/img/call-icon.svg`} width={16} height={16} alt="Phone Icon"/>
                                        <span><Link href={'tel:5123332222'}>512.333.2222</Link></span>
                                    </div>
                                    <div className="contact-method">
                                        <Image src={`/img/mail.svg`} width={16} height={16} alt="Mail envelope icon"/>
                                        <span><Link href={'mailto:sampleemail@gmail.com'}>sampleemail@gmail.com</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="details-group">
                            <h6>Social Media</h6>
                            <div className="social-media">
                                <Link href={`#`}><Image src={`/img/shape.svg`} height={18} width={18} alt="Facebook"/></Link>
                                <Link href={`#`}><Image src={`/img/shape-1.svg`} height={18} width={18} alt="Twitter - X"/></Link>
                                <Link href={`#`}><Image src={`/img/shape-2.svg`} height={18} width={18} alt="LinkedIn"/></Link>
                                <Link href={`#`}><Image src={`/img/shape-3.svg`} height={18} width={18} alt="Pinterest"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="divider"/>
                <div className="footer-copy">
                    <p>&copy; 2021 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}