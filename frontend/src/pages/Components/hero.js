import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#211a37]">
      {/* Hero */}
      <div className="px-[50px] text-center sm:px-[100px]">
        
        
        <div className="grid ">
          <h1 className="text-[45px] pt-[20px] text-[40px] sm:text-[60px] font-extrabold"> Empowering Communities, <br /> Celebrating Achievements!</h1>

          <p className="py-4 text-[#b2b0c6] text-[12px] sm:text-[16px] ">
            NFT Minting Platform for Community Certificates, Awards, and Tickets
            and more
          </p>
          <div className="flex justify-center space-x-4 text-[10px] sm:text-[16px]   pt-[30px] mx-6">
            <Link href="/Mint">
            <button className="rounded-lg bg-[#8381d5]  px-4 py-3">Mint</button>
            </Link>
            <Link href="/Eligibility">
            <button className="border-solid border-2 border-[#8381d5] rounded-full text-[#b2b0c6] px-2 py-3">Check Eligibility</button>
            </Link>
          </div>

          <div className="pb-[40px]">
            <Image src="/certificate.png" alt="hero" width={1180} height={326} />
          </div>
        </div>

      </div>
    </div>
  );
}
