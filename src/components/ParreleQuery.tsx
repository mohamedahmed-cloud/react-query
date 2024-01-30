import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function ParallelQuery() {
    const {data: superHeros} = useQuery({
        queryKey:"yousef-1",
        queryFn: async () => {
            const response = await axios.get("http://localhost:4000/superheroes")
            return response.data
        }
    })
    const {data: friends} = useQuery({
        queryKey:"yousef-2",
        queryFn: async () => {
            const response = await axios.get("http://localhost:4000/friends")
            return response.data
        }
    })
    console.log(friends, superHeros)
    return (
        <div>
            <p>see result in devtools</p>
        </div>
    )
}