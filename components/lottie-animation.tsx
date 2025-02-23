"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../public/"; // Ajuste o caminho conforme necessário

interface LottieAnimationProps {
  className?: string;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ className }) => {
  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
