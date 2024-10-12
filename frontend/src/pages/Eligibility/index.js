import { useState } from "react";
import { motion } from "framer-motion";

export default function Eligibility() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "address":
        setAddress(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {}

  return (
    <div className="">
      <div className="bg-[#131c61] relative brightness-150 bg-blend-hue" style={{ backgroundImage: "url('cover.png')" }}>
      {/* Hero */}
      <div className="px-[50px] py-[50px]  text-center sm:px-[100px]"  >
        
        
        <div className="grid ">
          <h1 className="text-[45px] pt-[20px] text-[30px] sm:text-[40px] font-extrabold"> Empowering Communities, <br /> Celebrating Achievements!</h1>

          <p className="py-4 text-[#b2b0c6] text-[10px] sm:text-[13px] ">
            NFT Minting Platform for Community Certificates, Awards, and Tickets
            and more
          </p>
         
        </div>

      </div>
    </div>

      <h2 className="font-semibold	text-[36px] text-center py-[100px]">Check Eligibility</h2>

      <div className="w-full max-w-4xl mx-auto items-center justify-center flex flex-col pb-5">
      <form className="shadow-md rounded-lg px-8 pb-[50px] flex flex-col w-full" onSubmit={handleSubmit}>
        <div className="pb-5 appearance-none w-full">
          <label
            className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
            htmlFor="address"
          >
            Contract Address
          </label>
          <input
            className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter the contract address"
          />
        </div>
        <motion.div whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }} className="bg-[#8080d7] px-5 py-2.5 rounded-full justify-center items-center gap-2 inline-flex">
          <button
            type="submit"
            className="text-white cursor-pointer w-full py-2 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Checking..pls wait" : "Check Eligibility"}
          </button>
        </motion.div>
      </form>
    </div>
    </div>
  );
}
