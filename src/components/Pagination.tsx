import React,{useState} from 'react'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function PaginationQuery() {
    const [pageNumber, setPageNumber] = useState(1)
    const {data, error, isError, isLoading, isFetching} = useQuery({
        queryKey: ['pagination', pageNumber],
        queryFn: async() => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=2&_page=${pageNumber}`)
            return response.data
        },
        
    });
    if (isLoading) return <h1>Loading ....</h1>
    if(isError) {
        return <h1>Error - {error.message}</h1>
    }   
    console.log(pageNumber, data)
    return (
        <div style={{marginLeft:"20px"}}>
            <div>
                {/* {JSON.stringify(data)} */}
                {Array.isArray(data) && 
                data.map((todo ,indx) => (
                    <p key={indx}> 
                        {todo.id} - {todo.title} - {}
                    </p>
                ))}
            </div>
            <div>
                <button disabled={pageNumber == 1} onClick={() => setPageNumber(prev => prev - 1)}>prev</button>
                <button disabled={pageNumber == 4} onClick={() => setPageNumber(prev => prev + 1)}>next</button>

            </div>
            <p>{isFetching && "Fetching...."}</p>
        </div>
    )
}