import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef} from "react";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 0.9 }}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};

export default function Features() {

  

    return (
      <div className=" px-[50px] sm:px-[100px] bg-[#131c61]">
        {/* Hero */}
        <div className="">
          <h1 className="text-center text-white font-extrabold text-[36px] sm:text-[52px] py-[100px]">Features</h1>
          
          {/* first */}
          <AnimatedSection>
         <div  className="sm:flex justify-around pb-[150px]  space-y-[50px] sm:space-x-[100px]">
       

         
         <Image src="/img1.png" alt="img" width={1180} height={326} />
         

          <div className="grid text-center ">
            <h3 className="font-semibold text-[20px] text-left text-white sm:text-[32px] pb-[10px]">Fully Onchain Process</h3>
            <p className="text-[15px] sm:text-[20px] text-left text-[#b2b0c6] font-normal">The platform is built entirely on the Base blockchain, ensuring decentralisation and transparency. All transactions, from eligibility verification to minting, are handled onchain via smart contracts, eliminating manual interventions.</p>
          </div>

         </div>
         </AnimatedSection>

         {/* second */}

         <AnimatedSection>
         <div className="sm:flex justify-around pb-[150px] space-y-[50px] sm:space-x-[100px] ">
         

          <div className="grid  text-center sm:text-left py-[50px]">
            <h3 className="font-semibold text-[20px] text-left text-white sm:text-[32px] pb-[10px]">Integration with Basenames and Smart Wallet</h3>
            <p className="text-[15px] sm:text-[20px] text-left text-[#b2b0c6]  font-normal">The platform integrates Basenames to simplify onchain identity management and Smart Wallet to make it easy for recipients to mint NFTs directly to their wallets. This ensures a seamless experience, even for users who may not be familiar with onchain processes.</p>
          </div>

          <Image src="/img2.png" alt="img" width={1180} height={326} />

         </div>
         </AnimatedSection>

         {/* third */}
         <AnimatedSection>
         <div className="sm:flex justify-around pb-[150px]  space-y-[50px] sm:space-x-[100px]">
         <Image src="/img3.png" alt="img" width={1080} height={326} />

          <div className="grid text-center sm:text-left">
            <h3 className="font-semibold text-[20px] text-left text-white sm:text-[32px] pb-[10px]">Personalization and Customization</h3>
            <p className="text-[15px] sm:text-[20px] text-left text-[#b2b0c6] font-normal">Project owners can personalize certificates or digital assets with specific details such as recipient names, dates, and metadata before minting, adding a unique touch to each NFT.</p>
          </div>

         </div>
         </AnimatedSection>

         {/* fourth */}
         <AnimatedSection>
         <div className="sm:flex justify-around pb-[150px] space-y-[50px] sm:space-x-[100px]">
         

         <div className="grid text-center sm:text-left py-[50px]">
           <h3 className="font-semibold text-[20px] text-left text-white sm:text-[32px] pb-[10px]">Streamlined Recipient Experience</h3>
           <p className="text-[15px] sm:text-[20px] text-left text-[#b2b0c6]  font-normal"> For recipients, the claiming process is user-friendly and intuitive. They simply check their eligibility, and if eligible, mint the NFT with one click. Wallet integration is simplified by supporting popular options like MetaMask and WalletConnect.</p>
         </div>

         <Image src="/img4.png" alt="img" width={1180} height={326} />

        </div>
        </AnimatedSection>
        
        </div>
      </div>
    );
  }
  