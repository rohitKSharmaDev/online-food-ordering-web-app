import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react";


const RestaurantCard = ({ offersApplied=false }) => {
  return (
    <Card className="w-70 hover:shadow-lg cursor-pointer">
      <div className="relative" style={{ maxHeight: '150px', overflow: 'hidden', marginTop: '-24px', filter: 'drop-shadow(rgba(0, 0, 0, 0.1) 0px 2px 8px)'}}>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv" alt="Restaurant Image" className="h-full w-full rounded-t-md object-cover" />

        {
          offersApplied && <div className="absolute offers-container">
            <span className="offers-text text-white uppercase">items at 79</span>
          </div>
        }
      </div>

      <CardHeader>
        <CardTitle>Restaurant Name</CardTitle>
        <CardDescription>
          <div className="flex items-center">
            <div 
              style={{
                width: '24px',
                height: '24px',
              }}
              className="flex flex-col items-center justify-center rounded-full bg-green-700"
            >
              <Star size={'16px'} fill="white" color="white" />
            </div>
            <span className="restaurant-ratings ml-1">4.3</span>
            <span className="align-middle"> • </span>
            <span className="">35-40 mins</span>
          </div>

        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">North Indian, Biryani, Tandoor</p>
        <p className="text-blue-700 font-medium">Chhindwara Locality</p>
      </CardContent>
    </Card>
  );
}

export default RestaurantCard;