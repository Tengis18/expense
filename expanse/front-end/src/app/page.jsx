"use client"
import { useEffect } from "react";
import { Login } from "./components/login/Login";
import {useRouter} from "next/navigation";
import { toast } from "react-toastify";


export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    const isLoggedIn= localStorage.getItem("isLoggedIn")
    if(isLoggedIn){
      toast.success("you already login");
      router.push("/dashboard");
    }
  }, [router]);
  return (
    <div>
      <Login />
    </div>
  );
}
