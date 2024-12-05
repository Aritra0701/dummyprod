import Layout from "../../../components/Layout"
import UserCard from "../../../components/UserCard"
import api from "../../../lib/api"
import { useQuery } from "@tanstack/react-query"


const Allusers = () => {
    const {data:allusers}= useQuery({
        queryKey:["getAllusers"],
        queryFn:api.getAllusers,
        select:(response)=> response.data
    })
    console.log(allusers)
  
  return (
    <>
     <Layout>
        <div className="mt-3 flex flex-wrap justify-start align-middle items-center gap-6">
        {
            allusers?.users && allusers.users?.map((users,index)=>(
                <>
                 <div>
                 <UserCard key={users.id} users={users}/>
                 </div>
                </>
            ))
        }
        </div>
     </Layout>
    </>
  )
}

export {Allusers}