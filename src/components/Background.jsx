"use client";
import Image from "next/image";

const PageBackground = ({ src, size = 300 }) => {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      <Image
        src={src}
        width={size}
        height={size}
        alt="Page background"
        className="opacity-20"
        priority
      />
    </div>
  );
};

export default PageBackground;
