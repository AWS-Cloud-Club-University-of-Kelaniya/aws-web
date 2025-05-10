"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation"; // To access query params

interface User {
  fullName: string;
  email: string;
  studentID: string;
}

export default function Dashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();  // Get query params
  const [user, setUser] = useState<User | null>(null);
  const [paymentStatusMessage, setPaymentStatusMessage] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      //const parsedUser = JSON.parse(storedUser)
      setUser(JSON.parse(storedUser));
    } else {
      // If no user found, redirect to login
      router.push("/login");
    }

    // Check for payment status from query params
    const status = searchParams.get("status");
    if (status === "success") {
      setPaymentStatus("success");
      setPaymentStatusMessage("Payment was successful!");
    } else if (status === "cancel") {
      setPaymentStatus("cancel");
      setPaymentStatusMessage("Payment was canceled.");
    }
  }, [router,searchParams]);
  const [isPaying, setIsPaying] = useState(false);

  const handlePayment = async () => {
    try{
      // Optional: show a loader
      const res = await fetch("http://localhost:5000/payhere-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          fullName: user?.fullName,
          amount: "500.00",
          return_url: "http://localhost:3000/dashboard?status=success",
          cancel_url: "http://localhost:3000/dashboard?status=cancel",
        }),
      });
    
      const data = await res.json();
      
      // Dynamically insert PayHere button
      const payDiv = document.createElement("div");
      payDiv.id = "payhere-form";
      payDiv.setAttribute("data-pay-id", data.pay_id);  // Use the pay_id returned from backend
      payDiv.setAttribute("data-type", "SANDBOX"); // or "LIVE" in production
      document.body.appendChild(payDiv);
    
      // Load PayHere script dynamically
      const script = document.createElement("script");
      script.src = "https://sandbox.payhere.lk/payhere.pay.button.js";
      script.id = "payhere-button";
      document.body.appendChild(script);
    }catch (error) {
      console.error("Payment initiation failed", error);
    } finally {
      setIsPaying(false);
    }
  };

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
      {paymentStatusMessage && (
        <div className="text-xl text-center mb-4">
          <p>{paymentStatusMessage}</p>
        </div>
      )}

      {/* Conditionally render Pay Now button based on payment status */}
      {paymentStatus !== "success" && (
        <button
          onClick={handlePayment}
          disabled={isPaying}
          className="bg-green-600 text-white p-2 rounded mt-4"
        >
          {isPaying? "Processing..." : "Pay Now"}
        </button>
      )}
    </div>
  );
}