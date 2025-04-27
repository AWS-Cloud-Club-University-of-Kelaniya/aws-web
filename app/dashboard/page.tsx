"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { string } from "zod";

interface User {
  fullName: string;
  email: string;
  studentId: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(JSON.parse(storedUser));
    } else {
      // If no user found, redirect to login
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    router.push("/login");
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
      <p className="text-lg mb-4">Student No: {user.studentId}</p>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}