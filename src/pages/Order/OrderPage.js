/**
* Objective: component to display depending upon order status after payment is done. 
* Date Created:
* Modified:
*/
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess data={state.data} /> : <OrderFail /> }
    </main>
  )
}
