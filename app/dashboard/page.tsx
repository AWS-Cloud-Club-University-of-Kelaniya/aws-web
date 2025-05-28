"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation"; // To access query params

interface User {
  fullName: string;
  email: string;
  studentID: string;
}

export default function Dashboard() {
  const router = useRouter();
  // const searchParams = useSearchParams();  // Get query params
  const [user, setUser] = useState<User | null>(null);
  // const [paymentStatusMessage, setPaymentStatusMessage] = useState<string | null>(null);
  // const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // const status = searchParams.get("status");

      // if (status === "success") {
      //   // Only check server if PayHere redirected back with ?status=success
      //   checkPaymentStatus(parsedUser.email);
      // } else if (status === "cancel") {
      //   setPaymentStatus("cancel");
      //   setPaymentStatusMessage("❌ Payment was canceled.");
      // }
    } else {
      // If no user found, redirect to login
      router.push("/login");
    }
  }, [router]);

  // const checkPaymentStatus = async (email: string) => {
  //   try {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/status?email=${email}`);
  //     const data = await res.json();

  //     if (res.ok && data.paid) {
  //       setPaymentStatus("success");
  //       setPaymentStatusMessage("✅ Payment confirmed via server.");
  //     } else {
  //       setPaymentStatus("pending");
  //       setPaymentStatusMessage("⏳ Payment not confirmed yet. Please wait a few minutes.");
  //     }
  //   } catch (error) {
  //     console.error("Error checking payment status:", error);
  //     setPaymentStatusMessage("⚠️ Failed to check payment status. Please try again.");
  //   }
  // };
  
  // const [isPaying, setIsPaying] = useState(false);

  // const handlePayment = async () => {
  //   if (!user) return;

  //   setIsPaying(true);

  //   try {

  //   // Build and submit PayHere form
  //   const form = document.createElement('form');
  //   form.method = 'POST';
  //   form.action = 'https://sandbox.payhere.lk/pay/obdfa4691'; // Use live URL in production

  //   document.body.appendChild(form);
  //   form.submit();
  // } catch (err) {
  //   console.error('Error:', err);
  //   alert('Something went wrong. Please check the console or try again.');
  // }
  // };


  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.fullName}!</h1>
      <p className="text-lg mb-2">Email: {user.email}</p>
      <p className="text-lg mb-4">Student No: {user.studentID}</p>

      {/* Display payment status message */}
      {/* {paymentStatusMessage && (
        <div className="text-xl text-center mb-4">
          <p>{paymentStatusMessage}</p>
        </div>
      )} */}

      {/* Conditionally render Pay Now button based on payment status */}
      {/* {paymentStatus !== "success" && (
        <button
          onClick={handlePayment}
          disabled={isPaying}
          className="bg-green-600 text-white p-2 rounded mt-4"
        >
          {isPaying? "Processing..." : "Pay Now"}
        </button>
      )} */}
    </div>
  );
}