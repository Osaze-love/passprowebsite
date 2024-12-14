import { updateAllFreeEvents, updateAllPopularEvents, updateCategories, updateCategoryEvents, updateEventBook, updateFeaturedEvents, updateFreeEvents, updatePopularEvents } from "@/redux/slices/eventslice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./use-toast";
import { 
  updateTicketEmail,
  revertState} from "@/redux/slices/paymentInfoslice";

const useFetch= () => {
  const base_url = process.env.NEXT_PUBLIC_BASE_URL;
  const { toast } = useToast();


  const { first_name, last_name, email, confirm_email, phone_number, attendee_first_name, attendee_last_name, attendee_email, attendee_confirm_email, send_to_different_email, tickets } = useSelector((state: RootState) => state.payment);

  const {categoryId} = useSelector((state: RootState) => state.event)

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
      // console.log(error);
     
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
       
      const response = await axios.get(endpoint);
  
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      // console.log(error);
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
      (error);
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

      dispatch(updateAllFreeEvents(response?.data))
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      // console.log(error);
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
      // console.log(error);
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
  
      const response = await axios.get(endpoint);
      dispatch(updateAllPopularEvents(response?.data?.data))
      // console.log(response);
      // Update Redux or state with the fetched events
      // dispatch(updateFeaturedEvents(response?.data?.events));
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getBookEvent = async (eventId: any, eventName: any) => {
    setLoading(true)
    try {
      
      const response = await axios.get(`${base_url}/v1/event/${eventId}/view`);      
      
    dispatch(updateEventBook(response?.data));
    router.push(`/booking/${eventName}/${eventId}`)
    } catch (error) {
      // console.log(error);   
    }finally{
      setLoading(false)
    }   
  }

  const getCategories = async () => {
    setLoading(true)
    try {        
      
      const response = await axios.get(
        `${base_url}/v1/landing-page-categories`
      );
            
     dispatch(updateCategories(response?.data))
    
    } catch (error) {
      // console.log(error);
    }finally{
      setLoading(false)
    }
  }

  const getCategoryEvents = async (search = "") => {
    setLoading(true);
    try {
      const endpoint = search
        ? `${base_url}/v1/categories/${categoryId}/events?search=${search}`
        : `${base_url}/v1/categories/${categoryId}/events`;
          
      const response = await axios.get(endpoint);
      dispatch(updateCategoryEvents(response?.data?.events?.data))
     
    } catch (error) {
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const contactPasspro = async (
    firstName: string, 
    lastName: string, 
    email: string, 
    phone: string, 
    message: string
  ) => {
    setLoading(true);  
    try {
      // await axios.get('https://sub.passpro.africa/sanctum/csrf-cookie', {
      //   withCredentials: true,
      // });
      const response =  await axios.post(
        'https://sub.passpro.africa/api/v1/contact',
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone, 
          message: message,
          email: email
        },
      
      );
      
      toast({
        title: 'Message Sent', 
        description: response?.data?.message || 'Message Sent Successfully', // Ensure it's a string
        variant: 'default', // Optional, for error styling
      });
  
      // Handle the response as needed
    } catch (error: any) {
      // console.log(error);
      
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
      // Prepare the tickets array by mapping to replace id with ticket_id
      const formattedTickets = tickets.map(({ id, ticket_quantity }) => ({
        ticket_id: id,
        ticket_quantity,
      }));
  
      // Dynamically create the payload
      const payload: any = {
        tickets: formattedTickets,
        first_name,
        last_name,
        email,
        confirm_email,
        phone_number,
        send_to_different_email,
      };
  
      // Only add attendee details if send_to_different_email is true
      if (send_to_different_email) {
        payload.attendee_first_name = attendee_first_name;
        payload.attendee_last_name = attendee_last_name;
        payload.attendee_email = attendee_email;
        payload.attendee_confirm_email = attendee_confirm_email;
      }
  
  
      // Make the API call
      const response = await axios.post(`${base_url}/v1/order/checkout`, payload);

      const ticketEmail = send_to_different_email ? attendee_email : email;
      dispatch(updateTicketEmail(ticketEmail));
  
      dispatch(revertState())


      const paymentUrl = response.data.payment_url;
    window.location.href = paymentUrl;

      // router.push("/confirmation");
    } catch (error: any) {
      // Handle error
      // console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const makeFreePayment = async () => {
    setLoading(true);
  
    try {
      
     
      const formattedTickets = tickets.map(({ id, ticket_quantity }) => ({
        ticket_id: id,
        ticket_quantity,
      }));
  
      const payload: any = {
        tickets: formattedTickets,
        first_name,
        last_name,
        email,
        confirm_email,
        phone_number,
        send_to_different_email,
      };
  
      
      if (send_to_different_email) {
        payload.attendee_first_name = attendee_first_name;
        payload.attendee_last_name = attendee_last_name;
        payload.attendee_email = attendee_email;
        payload.attendee_confirm_email = attendee_confirm_email;
      }
  
  
      const response = await axios.post(`${base_url}/v1/order/checkout`, payload);

      const ticketEmail = send_to_different_email ? attendee_email : email;
      dispatch(updateTicketEmail(ticketEmail));
      dispatch(revertState());
      router.push('/payment/callback')
       

     
    } catch (error: any) {
      // Handle error
      // console.log(error);
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
    contactPasspro, makePayment, getAllFeaturedEvents, getAllFreeEvents, getAllPopularEvents,
    getCategories,
    getCategoryEvents, 
    makeFreePayment
  }

}

export default useFetch;