import { useInView  } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
const fetchFunction = async ({pageParam}) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${pageParam}`)
    return response.data
}

export default function ObserverInfiniteQuery() {
    const inView = useInView()
    const {data, hasNextPage, fetchNextPage} = useInfiniteQuery({
        queryKey: ['observer-infinite-query'],
        queryFn:fetchFunction,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            const next = lastPage.length ? allPages.length + 1: undefined
            return next
        }
    })
    const todos = data?.pages
    if(hasNextPage && inView) {
        fetchNextPage()
    }
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


    </div>
    )
}