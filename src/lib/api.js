import axios from "axios"

const baseUrl = "https://dummyjson.com"

const api={

    getheaders:()=>{
        const token = localStorage.getItem("token")
        return token ? {
            Authorization : `Bearer${token}`
        }:{}
    },
    login:async(username,password)=>{
        const response = await axios.post(
            `${baseUrl}/auth/login`,{
                username:username,
                password:password
            }
        )
    return response
    },
    
    getAllProducts:async()=>{
        const headers = api.getheaders();
        const response = await axios.get(
            `${baseUrl}/products`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },

    getProductsDetails:async(id)=>{
        const headers = api.getheaders();
        const response = await axios.get(
            `${baseUrl}/products/${id}`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    searchProducts: (query) =>
        axios.get(`${baseUrl}/products/search`, {
          params: query,
          headers: {
            ...headers,
          },
        }),

    getAllProductCategory: async()=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/products/categories`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    
    getProductCategoryList:async()=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/products/category-list`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    addProduct: async(data)=>{
        const headers = api.getheaders();
        const response = axios.post(
            `${baseUrl}/products/add`,data,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    UpdateProduct: async(id,data)=>{
        const headers = api.getheaders();
        const response = await axios.put(
            `${baseUrl}/products/${id}`,data,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    deleteProducts:async(id)=>{
        const headers = api.getheaders()
        const response = await axios.delete(
            `${baseUrl}/products/${id}`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },

    getAllusers:async()=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/users`,{
                headers:{
                    ...headers
                }
            }   
        )
    return response
    },
    getuserDetails:async(id)=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/users/${id}`,{
                headers:{
                    ...headers
                }
            }
        )
    return response
    },
    
     getAllpost:async()=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/posts`,{
                headers:{
                    ...headers
                }
            }   
        )
    return response
    },
    postDetails:async(id)=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/posts/${id}`,{
                headers:{
                    ...headers
                }
            }
        )
        return response
    },

 Customcarts:async()=>{
        const headers = api.getheaders()
        const response = await axios.get(
            `${baseUrl}/carts`,{
                headers:{
                    ...headers
                }
            }
        )
        return response
    },

Commentcard:async()=>{
    const headers = api.getheaders()
    const response = await axios.get(
        `${baseUrl}/comments`,{
            headers:{
                ...headers
            }
        }
    )
    return response
},

FoodCard:async()=>{
    const headers = api.getheaders()
    const response = await axios.get(
        `${baseUrl}/recipes`,{
            headers:{
                ...Headers
            }
        }
    )
    return response
}




}

export default api