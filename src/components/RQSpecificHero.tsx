import { useParams } from "react-router-dom"
import useRQSuperHeroSpecific from "../hooks/RQspecifiHero"

export default function RQSpecificHero () {

    const {id} = useParams()
    

    const {isLoading, error, data, isError} = useRQSuperHeroSpecific(id)

    if (isLoading) {
        return <h2>Loading...</h2>;
      }
      if (isError ) {
        return <h1>{error.message}</h1>;
      }

    return (
        <div>
            {data && data.map((hero) => {
                return (
                <div key={hero.id}>{hero.name} - {hero.alterEgo}</div>)
            })}

        </div>
    )
}