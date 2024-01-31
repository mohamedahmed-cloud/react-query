import { useState } from "react";
import useRQSuperHero from "../hooks/RQSuperHero";
import { Link } from "react-router-dom";
import {UseAddRQSuperHero} from "../hooks/RQSuperHero"
interface SuperHeroDataType {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isError: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  isFetching: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  refetch: any
}

export default function SuperHeroesPage() {
  const [hero, setHero] = useState({"name":"", "alterEgo":""})
  const { isLoading, data, isError, error }: SuperHeroDataType =
    useRQSuperHero();
    const {mutate, isLoading: addIsLoading, isErrorLaddIsError, error:addError} = UseAddRQSuperHero();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError ) {
    return <h1>{error.message}</h1>;
  }
  const handleOnClick = () => {
    // console.log(hero)
    mutate(hero)
  }

  return (
    <>
      <input type="text" name="name" onChange={(e) => setHero({...hero, name: e.target.value})}/>
      <input type="text" name="alterEgo" onChange={(e) => setHero({...hero, alterEgo: e.target.value})}/>
      <button onClick={handleOnClick}>Send</button>
      <h2>Super Heroes Page</h2>
      {JSON.stringify(data)}
      {/* <button onClick={refetch}>Refetch Data</button> */}

      {/* {data?.map((hero) => {
        return <div key={hero.name}>{hero && hero.name}</div>;
      })} */}

      {Array.isArray(data)  && data?.map((hero) => {
        return (
          <div>
            <Link to={`${hero.id}`}>{hero.name}</Link>
          </div>          
          )
      })}
    </>
  );
}
