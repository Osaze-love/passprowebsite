import { updateAllFreeEvents, updateAllPopularEvents, updateEventBook, updateFeaturedEvents, updateFreeEvents, updatePopularEvents } from "@/redux/slices/eventslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./use-toast";
import Cookies from 'js-cookie';


const useFetch= () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { toast } = useToast();


  const { first_name, last_name, email, confirm_email, phone_number, attendee_first_name, attendee_last_name, attendee_email, attendee_confirm_email, send_to_different_email, tickets } = useSelector((state: RootState) => state.payment);

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const getCsrfToken = async () => {
    await axios.get('/sanctum/csrf-cookie');
  };

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

  const getAllFeaturedEvents = async (search = "") => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/v1/all/featured-events?search=${search}`
        : `${base_url}/v1/all/featured-events`;
       console.log(endpoint);
       
      const response = await axios.get(endpoint);
  
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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

  const getAllFreeEvents = async (search = "") => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/v1/all/event/free?search=${search}`
        : `${base_url}/v1/all/event/free`;
  
      const response = await axios.get(endpoint);
       
      dispatch(updateAllFreeEvents(response?.data?.data))
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  

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

  const getAllPopularEvents = async (search = "") => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/v1/all/event/popular?search=${search}`
        : `${base_url}/v1/all/event/popular`;
        console.log(endpoint);
        
  
      const response = await axios.get(endpoint);
      dispatch(updateAllPopularEvents(response?.data?.data))
      // console.log(response);
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
    try {
      await axios.get('https://sub.passpro.africa/sanctum/csrf-cookie', {
        withCredentials: true,
      });
      // console.log(Cookies.get('XSRF-TOKEN'));
      // console.log(document.cookie);

      

      const response =  await axios.post(
        'https://sub.passpro.africa/api/v1/contact',
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone, 
          message: message,
          email: email
        },
        // {
        //   headers: {
        //     accept: 'application/json',
        //     'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        //   },
        //     withCredentials: true,
         
        // }
      );
      console.log(response);
      
      toast({
        title: 'Message Sent', 
        description: response?.data?.message || 'Message Sent Successfully', // Ensure it's a string
        variant: 'default', // Optional, for error styling
      });
  
      // Handle the response as needed
    } catch (error: any) {
      toast({
        title: 'Message Not Sent',
        description: error.response?.data?.message || 'An unexpected error occurred.', // Ensure it's a string
        variant: 'destructive', // Optional, for error styling
      });
      // Optionally handle the error
    } finally {
      setLoading(false);
    }
  };

  const makePayment = async () => {
    setLoading(true);
    
    try {
      // Prepare the payload by mapping tickets array to replace id with ticket_id
      const formattedTickets = tickets.map(({ id, ticket_quantity }) => ({
        ticket_id: id,
        ticket_quantity,
      }));
  
      // Create the payload
      const payload = {
        tickets: formattedTickets,
        first_name,
        last_name,
        email,
        confirm_email,
        phone_number,
        send_to_different_email,
        attendee_first_name,
        attendee_last_name,
        attendee_email,
        attendee_confirm_email,
      };
      console.log(payload);
      
  
      // Make the API call
      const response = await axios.post(`${base_url}/v1/order/checkout`, payload);

      console.log(response);
      
  
      // Handle success (e.g., redirect, show toast, etc.)
      
  
      // Redirect to confirmation page if necessary
      // router.push("/confirmation");
    } catch (error: any) {
      // Handle error
      console.log(error);
      
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
    contactPasspro, makePayment, getAllFeaturedEvents, getAllFreeEvents, getAllPopularEvents
  }

}

export default useFetch;