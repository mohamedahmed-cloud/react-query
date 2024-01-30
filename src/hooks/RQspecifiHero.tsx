import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Hero = {
    id:string
}

export default function useRQspecificHero(id:Hero){
    const queryClient = useQueryClient()
    // const superHeroList = queryClient.getQueryData(['superheroes'])
    // console.log(superHeroList.find(hero => hero.id == id))

    return useQuery({
        queryKey: ["specificHero", id],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:4000/superheroes/${id}`);
            return [response.data]
        },
        initialData: () => {
            const hero = queryClient.getQueryData(['superheroes'])?.find(hero => hero.id == id)
            console.log("hero in nested is: ",hero)
            return hero? [hero]: undefined
        },

})}