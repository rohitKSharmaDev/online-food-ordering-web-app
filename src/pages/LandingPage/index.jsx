import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FoodDeliveryBanner from '../../assets/images/food-delivery-banner.svg';

import LogoIcon from '../../assets/images/uk-online-food-app-logo.webp';
import RestaurantCard from "@/components/RestaurantCard";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <img src={LogoIcon} alt="UK Online Food Logo" width={'100px'} />
        <h2 className="my-3 ml-5 sm:my-10 text-3xl sm:text-6xl lg:text-7xl text-center font-extrabold text-blue-300">UK Cuisine</h2>

      </div>
      <h3 className="my-2 text-2xl sm:text-4xl lg:text-5xl text-center font-extrabold text-white">
        The only Food Delivery App you are looking in Uttarakhand, India.
      </h3>

      <img src={FoodDeliveryBanner} alt="Banner of Food delivery app" className="food-delivery-banner mb-5" />
      
      <div className="flex flex-col w-full">
        <RestaurantCard />
        <h3 className="text-3xl">FAQ's</h3>
        <Accordion type="multiple" collapsible={'true'}>
          <AccordionItem value="item-1">
            <AccordionTrigger>How does the this app works?</AccordionTrigger>
            <AccordionContent>
              When you enter a long URL, our system generates a shorter version of that URL. This shortened URL redirects to the original long URL when accessed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

      </div>

    </div>
  );
}

export default LandingPage;