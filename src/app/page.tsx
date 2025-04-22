'use client'

import Image from "next/image";
import Link from "next/link";
import CareerCard from "./components/CareerCard";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="mx-auto flex w-full sm:w-2/3 flex-col justify-center items-center">
          <div className="flex w-[300px] sm:w-[600px] md:p-0 flex-col mt-20">
            <div className="flex items-center mx-auto gap-2 pt-52 p-3">
              <Image src="/Brick-Logo.png" alt="Brick Logo" width={50} height={50} />
              <h1 className="text-5xl font-sans font-bold">Brick</h1>
            </div>
            <div className="font-tinos">
              <h2 className="text-3xl mt-20">Building Brick by Brick</h2>
              <div className="text-lg mt-4">
              Brick is a technology lab focused on creating intuitive, reliable applications that help people move through the world with the little things. 
              <br />
              <br />
              Our team of engineers, designers, and product thinkers is dedicated to building innovative tools brick by brick. 
              <br />
              <br />  
              At Brick, we believe that seamless mobility should be accessible to everyone.
              If you are instrested we would love to hear from you.
              <br />
              <br />
              — <a className="hover:text-gray-500 underline" href="https://www.davidyoum.com">David Youm</a> and the Brick Team
              </div>
            </div>

            <div className="mt-4 border-t-2 border-gray-200 pt-4">
              <Link href="/careers" className="font-tinos text-2xl mb-4 inline-block hover:text-gray-500">Careers</Link>
              <CareerCard title="Marketing Manager" linkUrl="/careers/marketing-manager" location="Remote" />
              <CareerCard title="Social Media Content Creator" linkUrl="/careers/social-media-content-creator" location="Remote" />
              <CareerCard title="Founding Engineer" linkUrl="/careers/founding-engineer" location="Remote" />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}