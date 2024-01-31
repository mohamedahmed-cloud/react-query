import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { request } from "../utils/axios-utils";
async function fetchRQSuperHero () {
  const response = await axios.get("http://localhost:4000/superheroes");
  // const response = await request({url:"/superheroes"})
  console.log(response)
  return response.data
}
async function addRQSuperHero(hero: {name: string, alterEgo: string}) {
  const response = await axios.post("http://localhost:4000/superheroes", hero);
  // const response = await request({url:"/superheroes", method:"post", data:hero})
  return response.data
}


export default function useFetchRQSuperHeros(){
    return useQuery({
        queryKey:["superheroes"],
        queryFn: fetchRQSuperHero,
        select: (data) => {
            return data
        } 
})}

export  function UseAddRQSuperHero() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn : (hero: {name: string, alterEgo: string}) => addRQSuperHero(hero),
    // onSuccess: (data) => {
    //   queryClient.setQueryData(['superheroes'], (oldQueryData: {name: string, alterEgo: string}[]) => {
    //     return [...oldQueryData, data]
    //   })
    //   // queryClient.invalidateQueries({queryKey: ["superheroes"]})
    // }
    //can any outgoing refreshes that can be overwrite our optimistic updates.
    onMutate:(hero) => {
      queryClient.cancelQueries({queryKey: ["superheroes"]})
      const previousHeroList = queryClient.getQueryData(['superheroes'])
      queryClient.setQueryData(['superheroes'], (oldQueryData: {name: string, alterEgo: string}[]) => {
        return [...oldQueryData, hero]
      })

      // call if the queryClient is failed.
      return previousHeroList
    },
    onError: (_error, _hero, context) => {
      // context contain additional information related to the mutation.
      return queryClient.setQueryData(['superheroes'], context.previousHeroList)
    },
    // called when success and error
    onSettled: () => {
      queryClient.invalidateQueries({queryKey: ["superheroes"]})
    },
  })
}