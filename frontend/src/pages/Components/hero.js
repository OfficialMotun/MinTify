import Link from "next/link";
import Image from "next/image";
import { useMintifyContext } from "../../Context/mintifyContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from "framer-motion"

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
    
    <div className="relative bg-blend-multiply bg-la" style={{ backgroundImage: "url('Desktop.png')" }} >
      {/* Hero */}
      <div className="px-[50px] text-center sm:px-[100px]"  >
        
        
        <div className="grid ">
          <h1 className="text-[45px] pt-[20px] text-[40px] sm:text-[60px] font-extrabold"> Empowering Communities, <br /> Celebrating Achievements!</h1>

          <p className="py-4 text-white text-[#b2b0c6] text-[12px] sm:text-[16px] ">
            NFT Minting Platform for Community Certificates, Awards, Tickets
            and more
          </p>
          <div className="flex justify-center space-x-4 text-[15px] sm:text-[20px] text-white  pt-[30px] mx-6">
            <Link href="/Mint" passHref>
            <motion.div whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <button onClick={handleButtonMint} className="rounded-lg bg-[#8381d5]  px-4 py-3">Mint</button>
            </motion.div>
            </Link>

            <Link href="/Eligibility" passHref>
            <motion.div whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }} >
            <button  onClick={handleButtonEligibility} className="border-solid border-2 border-[#8381d5] rounded-full text-white px-2 py-3">Check Eligibility</button>
            </motion.div>
          </Link>
           
          </div>

          <motion.div drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }} whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}  transition={{ease: [0.17, 0.67, 0.83, 0.67],duration: 2,x: { duration: 1 }}} className="pb-[40px]">
            <Image src="/certificate.png" alt="hero" width={1180} height={326} />
          </motion.div>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
}
