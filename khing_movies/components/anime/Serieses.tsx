import Image from "next/image";
import Link from "next/link";

const Serieses = ({items}:any)=>{
    console.log(items);
return(
    <>
        <ul>
                {items.map((show: any) => (
                    <li key={show._id}>
                <div>
                    <Image src={show.image} width={250} height={250} alt={show.title}/>
                    <h1>{show.title}</h1>
                    <p>Episodes: {show.episodes}</p>
                    <p>Ranking: {show.ranking}</p>
                    <p>Starus: {show.status}</p>
                    <p>
                            View:{" "}
                                {show.link ? (
                                    <Link target="_blank" href={show.link}>
                                        Watch Now
                                    </Link>
                                ) : (
                                    "Not available for streaming"
                                )}
                    </p>
                </div>
                    </li>
                ))}

        </ul>
    </>
)
}
export default Serieses;