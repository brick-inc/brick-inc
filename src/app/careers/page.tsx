'use client'

import Image from "next/image";
import CareerCard from "../components/CareerCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="mx-auto flex w-full sm:w-2/3 flex-col justify-center items-center">
          <div className="flex w-[600px] md:p-0 flex-col">
            <div className="flex items-center mx-auto gap-2 pt-12">
              <Image src="/Brick-Logo.png" alt="Brick Logo" width={50} height={50} />
              <h1 className="text-5xl font-sans font-bold">Careers</h1>
            </div>
            <div className="font-tinos">
              <h2 className="text-3xl mt-20">Working at Brick</h2>
              <div className="text-lg mt-4">
                We would love to hear from you. If you are intrested in our mission, please reach out to us.
              </div>
            </div>

            <div className="mt-4 border-t-2 border-gray-200 pt-4">
              <h2 className="font-tinos text-2xl mb-4">Careers</h2>
              <CareerCard title="Frontend Engineer" linkUrl="/careers/frontend-engineer" location="Remote" />
              <CareerCard title="Backend Engineer" linkUrl="/careers/backend-engineer" location="Remote" />
              <CareerCard title="Full Stack Engineer" linkUrl="/careers/full-stack-engineer" location="Remote" />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}