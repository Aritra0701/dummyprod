import React from "react";
import api from "../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const Allpost = () => {
  const navigate = useNavigate();
  const { data: Allposts } = useQuery({
    queryKey: ["apost"],
    queryFn: api.getAllpost,
    select: (response) => response.data,
  });

const handlepostDetails= (id)=>{
      navigate(`/detailspost/${id}`,{
            state:{
                id:id
            }
        })
}

  return (
<Layout>
    <div>
      <div className="container mx-auto my-10">
        <div className="flex flex-wrap gap-5">
          {Allposts?.posts?.map((post, index) => (
            <div
              className="w-96 rounded-[20px] bg-white shadow-lg py-12 px-4 text-center "
              key={index}
            >
              <h3 className="text-gray-900 pb-2 px-4 text-xl font-bold sm:text-2xl h-24">
                {post.title}
              </h3>
              <span className="bg-blue-500 mx-auto mb-6 inline-block h-1 w-[90px] rounded" />
              <p className="text-gray-500 mb-10 text-base leading-relaxed  line-clamp-4 my-2">
                {post.body}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <button className="text-gray-900 block w-full rounded-lg border border-gray-200 p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                    Cancel
                  </button>
                </div>
                <div className="flex-1">
                  <button onClick={()=> handlepostDetails(post?.id)}  className="bg-blue-500 whitespace-nowrap border-blue-500 block w-full rounded-lg border p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
</Layout>
  );
};

export default Allpost;
