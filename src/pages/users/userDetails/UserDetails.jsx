import Layout from "../../../components/Layout"
import { useLocation } from "react-router-dom"
import api from "../../../lib/api"
import { useQuery } from "@tanstack/react-query"
const UserDetails = () => {

    const {state}= useLocation()

    const {data : userDetails}= useQuery({
        queryKey:["getuserDetails",state.id],
        queryFn:()=> api.getuserDetails(state.id),
        select:(response)=> response.data
    })

    console.log(userDetails)
  return (
    <>
     <Layout>
     <section className="relative pt-12 pb-24">
        <img
          src="https://pagedone.io/asset/uploads/1705473908.png"
          alt="cover-image"
          className="w-full absolute top-0 left-0 z-0 h-40 object-cover"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img
              src={userDetails?.image}
              alt="user-avatar-image"
              className="border-2 border-solid border-white object-fit h-52 w-52 rounded-full"
            />
          </div>
          <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl mb-1 max-sm:text-center">
                {userDetails?.firstName} {userDetails?.maidenName} {userDetails?.lastName}
              </h3>
              <p className="font-normal text-base leading-7   max-sm:text-center">
                age : {userDetails?.age} Gender : {userDetails?.gender} Email: {userDetails?.email}<br className="hidden sm:block" />
                Phone : {userDetails?.phone} DOB- {userDetails?.birthDate} BloodGroup : {userDetails?.bloodGroup}
                <br className="hidden sm:block" />
                Height : {userDetails?.height} Weight: {userDetails?.weight} Eye-Color : {userDetails?.eyeColor}
              </p>
            </div>
            <a href="/" target="blank">
              <button className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.3011 8.69881L8.17808 11.8219M8.62402 12.5906L8.79264 12.8819C10.3882 15.6378 11.1859 17.0157 12.2575 16.9066C13.3291 16.7974 13.8326 15.2869 14.8397 12.2658L16.2842 7.93214C17.2041 5.17249 17.6641 3.79266 16.9357 3.0643C16.2073 2.33594 14.8275 2.79588 12.0679 3.71577L7.73416 5.16033C4.71311 6.16735 3.20259 6.67086 3.09342 7.74246C2.98425 8.81406 4.36221 9.61183 7.11813 11.2074L7.40938 11.376C7.79182 11.5974 7.98303 11.7081 8.13747 11.8625C8.29191 12.017 8.40261 12.2082 8.62402 12.5906Z"
                    stroke="white"
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="px-2 font-semibold text-base leading-7 text-white">
                  Home Page
                </span>
              </button>
            </a>
          </div>
          <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-4 mb-3">
            <a
              href="javascript:;"
              className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900"
            >
              IP- {userDetails?.ip}  Mac-Address- {userDetails?.macAddress}
            </a>
          </div>

          <div className="mb-3">
            <div className="text-3xl mb-2">Biography</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, neque tempore.
          </div>
          <div>
            <div className="text-3xl mb-2">Known for</div>

            <div className="flex flex-wrap gap-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus maxime reprehenderit perferendis, repellat nulla qui blanditiis illum, similique iusto enim cupiditate voluptate, soluta id fugiat quisquam maiores quaerat nisi eveniet?
            </div>
          </div>
        </div>
      </section>
     </Layout>
    </>
  )
}

export {UserDetails}