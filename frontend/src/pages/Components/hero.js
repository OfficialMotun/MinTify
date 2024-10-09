import Link from "next/link";
import Image from "next/image";
import { useMintifyContext } from "../../Context/mintifyContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {
  const { address } = useMintifyContext();
 
  const handleButtonMint = (e) => {
    if (!address) {
      e.preventDefault();
      toast.error('Please connect your wallet first!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleButtonEligibility = (e) => {
    if (!address) {
      e.preventDefault();
      toast.error('Please connect your wallet first!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    // style={{ backgroundImage: "url('cover.png')" }}
    <div className="bg-[#17123d] relative brightness-150 bg-blend-hue" >
      {/* Hero */}
      <div className="px-[50px] text-center sm:px-[100px]"  >
        
        
        <div className="grid ">
          <h1 className="text-[45px] pt-[20px] text-[40px] sm:text-[60px] font-extrabold"> Empowering Communities, <br /> Celebrating Achievements!</h1>

          <p className="py-4 text-[#b2b0c6] text-[12px] sm:text-[16px] ">
            NFT Minting Platform for Community Certificates, Awards, and Tickets
            and more
          </p>
          <div className="flex justify-center space-x-4 text-[15px] sm:text-[20px]   pt-[30px] mx-6">
            <Link href="/Mint" passHref>
            <button onClick={handleButtonMint} className="rounded-lg bg-[#8381d5]  px-4 py-3">Mint</button>
            </Link>
            <Link href="/Eligibility" passHref>
            <button onClick={handleButtonEligibility} className="border-solid border-2 border-[#8381d5] rounded-full text-[#b2b0c6] px-2 py-3">Check Eligibility</button>
            </Link>
          </div>

          <div className="pb-[40px]">
            <Image src="/certificate.png" alt="hero" width={1180} height={326} />
          </div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
}
