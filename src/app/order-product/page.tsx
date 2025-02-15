"use client";
import { useRouter } from "next/navigation";

export default function () {
  const router = useRouter();

  const handlePlaceOrder = () => {
    console.log("Order placed");
    router.replace("/");
  };
  return <button onClick={handlePlaceOrder}>Place Order lol</button>;
}
