import useRQSuperHero from "../hooks/RQSuperHero";
import { Link } from "react-router-dom";
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
  const { isLoading, data, isError, error }: SuperHeroDataType =
    useRQSuperHero();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError ) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <h2>Super Heroes Page</h2>
      {/* {JSON.stringify(data)} */}
      {/* <button onClick={refetch}>Refetch Data</button> */}

      {/* {data?.map((hero) => {
        return <div key={hero.name}>{hero && hero.name}</div>;
      })} */}
      {data?.map((hero) => {
        return (
          <div>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>          )
      })}
    </>
  );
}
