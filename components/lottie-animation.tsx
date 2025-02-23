"use client"
import dynamic from "next/dynamic";
import animationData from "../public/hero-animation.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
