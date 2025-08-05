// import React from "react";
import api from "../../../lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography, Button,
} from "@material-tailwind/react";

const ProductDetails = () => {
  const { state } = useLocation();

  const { data: productDetailsDetails } = useQuery({
    queryKey: ["getuserDetails", state.id],
    queryFn: () => api.getProductsDetails(state.id),
    select: (response) => response.data,
  });

  console.log(productDetailsDetails);

  return (
    <div className="flex flex-wrap gap-3">
    
        <Card className="w-96" >
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={productDetailsDetails?.thumbnail}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">.
            <Typography color="blue-gray" className="font-medium">
             {productDetailsDetails?.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {productDetailsDetails?.price}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {productDetailsDetails?.description}
          </Typography>
          <Typography>{productDetailsDetails?.warrantyInformation}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button 
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
