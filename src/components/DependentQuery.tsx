import { useQuery } from "@tanstack/react-query"
import axios from "axios"
const  fetchFunction = async (url) => {
    const response = await axios.get(url)
    return response.data
}
export default function DependentQuery({userEmail}) {
    const {data: user} = useQuery({
        queryKey: ['user', userEmail],
        queryFn: () => fetchFunction(`http://localhost:4000/users/${userEmail}`)
    })
    const channelId = user?.channelId
    const {data: courses} = useQuery({
        queryKey: ['courses', channelId],
        queryFn: () => fetchFunction(`http://localhost:4000/channels/${channelId}`),
        enabled: !!channelId,
    })
    console.log(courses)

    return (
        <div>
            see in devtools
        </div>
    )
}