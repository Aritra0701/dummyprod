import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import api from "../../../lib/api";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate= useNavigate()
  const [FormData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    });
  };

  const userLogin = useMutation({
    mutationFn: ({ username,password }) => api.login(username,password),
    onSuccess:(response)=>{
      if(response.status === 200){
        toast.success("login Successfull")
        localStorage.setItem("token",response.data.accessToken)
        navigate("/home")
      }
    },
    onError:(error)=> toast.error(error.message)
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin.mutate(FormData);
    setFormData({
      username:"",
      password:""
    })
  };
  return (
    <>
      <Card 
        color="transparent"
        shadow={false}
        className="flex justify-center align-middle items-center"
      >
        <Typography variant="h4" color="blue-gray">
          Log in
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your username
            </Typography>
            <Input
              name="username"
              value={FormData.username}
              onChange={handleInputChange}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              value={FormData.password}
              onChange={handleInputChange}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Log in
          </Button>
        </form>
      </Card>
    </>
  );
};

export { Login };
