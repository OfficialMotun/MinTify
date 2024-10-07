import Image from "next/image";
import { useState } from "react";

export default function Mint() {

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
      <div className="relativew-full h-full">
        <Image src="/bg.png" alt="hero" width={2000} height={1000}/>
      </div>
      
      <h2 className="font-semibold	text-[36px] text-center py-[100px]">Mint</h2>

      <div className="w-full max-w-4xl mx-auto items-center justify-center flex flex-col pb-5">
      <form className="shadow-md rounded-lg px-8 pb-[50px] flex flex-col w-full" onSubmit={handleSubmit}>
       
      <div className="pb-5 appearance-none w-full">
          <label
            className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
            htmlFor="address"
          >
            Tag
          </label>
          <input
            className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="Enter one tag in form of a acronym"
          />
        </div>


       {/* Community information */}
       <div className="pb-5 appearance-none w-full">
          <label
            className="block text-white sm:text-[20px] pb-2 font-semibold leading-snug"
            htmlFor="address"
          >
            Community-specific information
          </label>
          <input
            className="border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-lg"
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={handleChange}
            placeholder="e.g., course name, award type, etc."
          />
        </div>



        <div className="bg-[#8080d7] px-5 py-2.5 rounded-full justify-center items-center gap-2 inline-flex">
          <button
            type="submit"
            className="text-white cursor-pointer w-full py-2 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Minting..pls wait" : "Mint"}
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
