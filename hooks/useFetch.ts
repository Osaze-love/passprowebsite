import { updateEventBook, updateFeaturedEvents, updateFreeEvents, updatePopularEvents } from "@/redux/slices/eventslice";
import { AppDispatch } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

const useFetch= () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
//   const campaign = useSelector((state: RootState) => state.campaign);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const getFeaturedEvents = async () => {
    setLoading(true)
    try {        
      const response = await axios.get(
        `${base_url}/v1/featured-events`
      );
     dispatch(updateFeaturedEvents(response?.data?.events))
    
    } catch (error) {
      console.log(error);
     
    }finally{
      setLoading(false)
    }
  }

  const getFreeEvents = async () => {
    setLoading(true);
    try {        
      const response = await axios.get(
        `${base_url}/v1/event/free`
      );
      
     dispatch(updateFreeEvents(response?.data))
    
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const getPopularEvents = async () => {
    setLoading(true)
    try {        
      
      const response = await axios.get(
        `${base_url}/v1/event/popular`
      );
      
     dispatch(updatePopularEvents(response?.data))
    
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const getBookEvent = async (eventId: number) => {
    setLoading(true)
    try {
      const response = await axios.get(`${base_url}/v1/event/${eventId}/view`);
    dispatch(updateEventBook(response?.data))
    } catch (error) {
      console.log(error);   
    }finally{
      setLoading(false)
    }   
  }

  const contactPasspro = async (
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    message: string
  ) => {
    setLoading(true);
    console.log(`first_name: ${firstName},
      last_name: ${lastName},
      phone: ${phone}, 
      message: ${message},
      email: ${email}`);
    
    try {
      const response = await axios.post(
        `${base_url}/v1/contact`,
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone, 
          message: message,
          email: email
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response);
  
      // Handle the response as needed
    } catch (error) {
      console.log(error);
      // Optionally handle the error
    } finally {
      setLoading(false);
    }
  };
  

  return{
    getFeaturedEvents,
    getPopularEvents,
    getFreeEvents,
    getBookEvent,
    loading,
    contactPasspro
  }

}

export default useFetch;