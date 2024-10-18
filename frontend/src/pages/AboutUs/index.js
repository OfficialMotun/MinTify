import Image from "next/image";
export default function AboutUs() {
  return (
    <div className="bg-[#131c61]">
      <div
        className="relative"
        style={{ backgroundImage: "url('bgDesk.png')" }}
      >
        {/* Hero */}
        <div className="px-[50px] py-[50px]  text-center sm:px-[100px]">
          <div className="grid ">
            <h1 className="text-[45px] pt-[20px] text-[30px] sm:text-[40px] font-extrabold">
               About Mintify
            </h1>

            <p className="py-4 text-[#b2b0c6] text-[10px] sm:text-[13px] ">
              NFT Minting Platform for Community Certificates, Awards, Tickets
              and more
            </p>
          </div>
        </div>
      </div>

      <div className="px-[50px] sm:px-[100px] py-[40px] ">
        <div className="bg-white/5 rounded-lg p-[50px] border border-[#4d52a0] ">
          <div className=" sm:flex my-4  justify-center gap-8">
            <Image src="/A.png" alt="how" width={500} height={500} />
            <Image src="/B.png" alt="how" width={500} height={500} />
          </div>

          <div className="sm:flex my-4  justify-center gap-8">
            <Image src="/C.png" alt="how" width={500} height={500} />
            <Image src="/D.png" alt="how" width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
}
