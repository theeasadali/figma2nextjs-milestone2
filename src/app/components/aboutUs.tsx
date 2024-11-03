import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="aboutUs">
            <div className="imgContainer">
                <div className="imgColumn">
                    <Image src={"/img/about-img1.png"} width={270} height={265} alt="About Gallery Image 1"/>
                    <Image src={"/img/about-img3.png"} width={270} height={140} alt="About Gallery Image 2"/>
                </div>
                <div className="imgColumn">
                    <Image src={"/img/about-img2.png"} width={270} height={345} alt="About Gallery Image 3"/>
                </div>

            </div>
            <div className="aboutUsContent">
                <div className="aboutUsContentDetails">
                    <h2>About</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <button className="whiteBtn">Read More <span>&rarr;</span></button>
            </div>
        </section>
    )
}