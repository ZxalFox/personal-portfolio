"use client";
import { LottieComponentProps } from "lottie-react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = ({
  className,
  animationData,
}: {
  className?: string;
  animationData: LottieComponentProps["animationData"];
}) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
