import React from "react";
import TitleRed from "../../images/who-we-are/title-bg.svg";
import Image from "next/image";
import BlogBox from "./blogBox";

function Blog() {
  return (
    <>
      <section className='bg-white  xl:w-auto lg:w-[110%] md:w-[150%] min-w-[60rem]'>
        <div className='container page-padding py-24'>
          {/* title div -- */}
          <div className='flex flex-col text-center relative items-center'>
            <p className='text-white relative z-10 md:text-sm uppercase font-bold md:mb-10 text-3xl md:pt-0 pt-3 md:ml-0 ml-3'>
              latest blog
            </p>
            <Image
              src={TitleRed}
              alt='text_bg'
              className='md:w-64 w-[30rem] absolute -top-3 md:ml-0 ml-1'
            />

            <h2 className='md:text-3xl font-bold md:mb-4 text-6xl md:mt-0 mt-24'>
              Our Recent News
            </h2>
          </div>
          <div className='md:flex md:flex-row flex flex-col gap-6 w-full mt-12'>
            <BlogBox
              date='22.03.2023'
              title='Yoga For Everyone in 2023'
              description='This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds. '
            />
            <BlogBox
              date='13.05.2023'
              title='Getting Back Into CrossFit After Vacation'
              description='Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.'
            />
            <BlogBox
              date='28.01.2023'
              title='Meet Fitness Ambassador Grace'
              description='Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals.'
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
