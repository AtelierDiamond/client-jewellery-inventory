import Login from "@/components/auth/SignIn";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
         {/* <h1 className="font-lg text-lg">Welcome to Jewellery B2B Platform</h1>
         <span>Powered by Diamond Atelier</span> */}
         <Login/>
    </div>
  );
}
