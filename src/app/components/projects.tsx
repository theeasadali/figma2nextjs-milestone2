import Image from "next/image";

export default function Projects() {
    return(
        <section>
            <h2>Our Projects</h2>
            <div className="ourProjects">
                <div className="projectGrid">
                    <div className="project1">
                        <Image src={'/img/project-img-1.png'} width={570} height={255} alt="Project1 Image" />
                        <div className="projectOverlay">
                            <span>Sample <br /> Project</span>
                            <p>VIEW MORE <span>&rarr;</span></p>
                        </div>
                    </div>
                    <div className="project2">
                        <Image src={'/img/project-img-2.png'} width={570} height={255} alt="Project2 Image" />
                    </div>
                    <div className="project3">
                        <Image src={'/img/project-img-3.png'} width={270} height={255} alt="Project3 Image"/>
                    </div>
                    <div className="project4">
                        <Image src={'/img/project-img-4.png'} width={470} height={255} alt="Project4 Image" />
                    </div>
                    <div className="project5">
                        <Image src={'/img/project-img-5.png'} width={370} height={255} alt="Project5 Image" />
                    </div>
                </div>
                <button className="darkBtn">All Projects <span>&rarr;</span></button>
            </div>
        </section>
    )
}