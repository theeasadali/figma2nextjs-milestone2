import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return(
        <header>
            <div className="container header-content">
                <Image src={'/img/Logo.png'} height={44} width={70} alt="Digital Project Logo"/>
                <nav>
                    <Link href={`/`}>MAIN</Link>
                    <Link href={`/gallery`}>Gallery</Link>
                    <Link href={`/gallery`}>Projects</Link>
                    <Link href={`/gallery`}>Certifications</Link>
                    <Link href={`/gallery`}>Contacts</Link>
                </nav>
            </div>
        </header>
    )
}