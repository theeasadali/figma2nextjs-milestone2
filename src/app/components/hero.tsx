export default function Hero(){
    return(
        <section className="hero">
            <div className="heroContent">
                <p className="heading"><span>Project</span> <br/>Lorum</p>
                <div className="sliderBtns">
                    <button>&larr; </button>
                    <button>&rarr;</button>
                </div>
                <p className="sliderPagination">
                    <span>0 <br /> 1</span>
                    <div></div>
                    <span>02</span>
                </p>
            </div>
            <div className="heroImg">
                <button className="whiteBtn">view project <span>&rarr;</span></button>
            </div>
        </section>
    )
}