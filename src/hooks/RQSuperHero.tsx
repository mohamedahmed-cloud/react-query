import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export default function useRQSuperHeroSpecific(){
    return useQuery({
        queryKey: ["superheroes"],
        queryFn: async () => {
          const response = await axios.get("http://localhost:4000/superheroes");
          return response.data
        },
        select: (data) => {
            return data
        } 
})}