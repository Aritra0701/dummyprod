import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
  import { useNavigate } from "react-router-dom";

const UserCard = ({users}) => {

    const navigate = useNavigate()

    const handleDetailsClick=()=>{
        navigate(`/userDetails/${users.firstName}`,{
            state:{
                id:users?.id
            }
        })
    }
  return (
    <>
      <Card className="w-72" onClick={handleDetailsClick}>
      <CardHeader floated={false}>
        <img src={users?.image} alt="profile-picture" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {users?.firstName} {users?.lastName}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {users?.company?.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
    </>
  )
}

export default UserCard