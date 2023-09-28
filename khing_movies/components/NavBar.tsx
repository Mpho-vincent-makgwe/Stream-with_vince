import Link from "next/link";

const NavBar = ()=>{
return(
    <header>
        <nav>
            <ul>
                <li><Link href={`/`}>Home</Link></li>
                <li><Link href={`/Movies`}>Movies</Link></li>
                <li><Link href={`/Anime`}>Anime</Link></li>
                <li><Link href={`/Streaming`}>Sream</Link></li>
            </ul>
        </nav>
    </header>
)
};
export default NavBar;