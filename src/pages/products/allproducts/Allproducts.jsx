import Layout from "../../../components/Layout"
import api from "../../../lib/api"
import { useQuery } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const Allproducts = () => {
   const navigate = useNavigate()
  const {data:allProducts}= useQuery({
        queryKey:["getAllusers"],
        queryFn:api.getAllProducts,
        select:(response)=> response.data
    })

const productdetailscard= (id)=>{
    navigate(`/productdetails/${id}`,{
            state:{
                id:id
            }
        })
}

    // console.log(allProducts)
  return (
    <>
     <Layout>
        <div className="flex justify-start flex-wrap gap-5">

 {allProducts?.products?.map((items,index)=>(
   <div onClick={()=>productdetailscard(items.id)} className="relative flex flex-col my-4 bg-white shadow-sm border border-slate-200 rounded-lg w-96"  key={index}>
    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
      <img src={items.thumbnail} alt="card-image" />
    </div>
    <div className="p-4">
      <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 border border-transparent text-xs text-white transition-all shadow-sm w-20 text-center">
        POPULAR
      </div>
      <h6 className="mb-2 text-slate-800 text-xl font-semibold">
        {items.title}
      </h6>
      <p className="text-slate-600 leading-normal font-light">
        {items.description}
      </p>
    </div>
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img alt="Tania Andrew" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" className="relative inline-block h-8 w-8 rounded-full" />
        <div className="flex flex-col ml-3 text-sm">
          <span className="text-slate-800 font-semibold">Lewis Daniel</span>
          <span className="text-slate-600">
            January 10, 2024
          </span>
        </div>
      </div>
    </div>
  </div> 
 ))}



        </div>
     </Layout>
    </>
  )
}

export {Allproducts}