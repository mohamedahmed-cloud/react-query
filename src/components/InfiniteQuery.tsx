import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchColors = async ({ pageParam = 1 }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${pageParam}`);
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
        queryKey: ['infinite-query'],
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
      // console.log(data?.pages)
      const todos = data?.pages
    return (
        <div style={{marginLeft:"20px"}}>
            <div>
                {/* {JSON.stringify(todos)} */}
                {Array.isArray(todos) && 
                todos.map((innerTodo) => (
                    innerTodo.map((todo) =>  (
                      <p key={todo}> 
                        {todo.id} - {todo.title} 
                    </p>
                    ))
                ))}
            </div>
            <div>
                <button disabled={!hasNextPage}  onClick={() => fetchNextPage()}>Read more</button>
            </div>

        </div>
    )
}