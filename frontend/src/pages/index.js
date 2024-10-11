import { useRef, useCallback } from "react";
import Hero from "./Components/hero";
import Features from "./Components/features";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const hero = useRef(null);
  const features = useRef(null);


  return (
    <div className="">
      <ToastContainer />
      <div>
      <section id="hero">
          <Hero />
          </section>
        <section id="features">
          <Features />
          </section>
      </div>
    </div>
  );
}