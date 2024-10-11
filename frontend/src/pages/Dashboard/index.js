import Image from "next/image";

export default function Dashboard() {
  

  return (
    <div className="bg-[#17123d] grid space-y-6  justify-center my-[200px]">
 
        <Image src="/logo.png" alt="logo" width={100} height={100}  className="pl-[20px]"/>


        <div className="flex">  
            <h1 className="text-[20px] sm:text-[40px]">Coming soon..</h1>
        </div>
       
      
    </div>
  );
}
