import { useQueries } from "@tanstack/react-query"
import axios from "axios"
export default function DynamicQuery({queryIds}) {
    const queryResult = useQueries({
        queries: queryIds.map(id =>  ({
            queryKey: ['super-hero', id],
            queryFn: async () => {
                const response = await axios.get(`http://localhost:4000/superheroes/${id}`);
                return response.data
            }
        }))
    })
   
      
    // console.log("dynamic route",queryResult)
    return (
        <div> 
            Dynamic Query
        </div>
    )
}