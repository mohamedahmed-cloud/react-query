import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Hero = {
    id:string
}

export default function useRQspecificHero(id:Hero){

    return useQuery({
        queryKey: ["superheroes"],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:4000/superheroes/${id}`);
            return response.data
        },
        select: (data) => {
            return [data]
        }
})}