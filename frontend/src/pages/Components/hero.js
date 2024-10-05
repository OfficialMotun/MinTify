export default function Hero() {
  return (
    <div className="">
      {/* Hero */}
      <div className="px-[100px]">
        
        
        <div className="grid text-center">
          <h1 className="text-[45px] pt-[20px] sm:text-[60px]"> Empowering Communities, <br /> Celebrating Achievements!</h1>

          <p className="py-4 text-[#b2b0c6]">
            NFT Minting Platform for Community Certificates, Awards, and Tickets
            and more
          </p>
          <div className="flex justify-center space-x-4 pb-[40px]  pt-[30px] mx-6">
            <button className="rounded-lg bg-[#8381d5]  px-4 py-3">Mint</button>
            <button className="border-solid border-2 border-[#8381d5] rounded-full text-[#b2b0c6] px-2 py-3">Check Eligibility</button>
          </div>
        </div>

      </div>
    </div>
  );
}
