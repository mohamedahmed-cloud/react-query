import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchColors = async ({ pageParam = 1 }) => {
    const response = await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
    return response.data;
  };

export default function InfiniteQuery() {
    
    const {
        data,
        status,
        error,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isError, isLoading
      } = useInfiniteQuery({
        queryKey: ['colors'],
        queryFn: fetchColors,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = lastPage.length ? allPages.length + 1 : undefined;
          return nextPage;
        },
      });

    
      if (isLoading) {
        return <p>Loading...</p>;
      }
    
      if (isError) {
        return <p>Error fetching data</p>;
      }
      console.log(data)
    return (
        <div style={{marginLeft:"20px"}}>
            <div>
                {/* {JSON.stringify(data)} */}
                {Array.isArray(data) && 
                data.map((color ,indx) => (
                    <p key={indx}> 
                        {indx + 1} - {color.label}
                    </p>
                ))}
            </div>
            <div>
                <button disabled={!hasNextPage}  onClick={() => fetchNextPage()}> Read more</button>

            </div>
            {/* <p>{isFetching && "Fetching...."}</p> */}
        </div>
    )
}