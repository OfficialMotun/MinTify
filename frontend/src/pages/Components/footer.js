import Link from "next/link";

export default function Footer() {
    return (
      <div className="bg-[#353747] py-10">
        
        <div className="px-[50px] sm:px-[100px] sm:flex justify-between">
          
          
          <div className="sm:flex sm:space-x-6 space-y-6 sm:space-y-0 font-semibold sm:text-[16px]">
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
            <h1>FAQs</h1>
            <h1>About us</h1>
          </div>

          <div className="pt-[40px] sm:pt-[0px]">
            <Link   href="/">
            Logo
            </Link>
          </div>
  
        </div>
      </div>
    );
  }
  