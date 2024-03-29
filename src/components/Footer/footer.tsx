import React from "react";
import FooterLogo from "../../images/logo/logo-footer.svg";
import Image from "next/image";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";

function Footer() {
  return (
    <>
      <footer className='bg-white  xl:w-auto lg:w-[110%] md:w-[150%] min-w-[60rem]'>
        <div className='container page-padding py-24'>
          <div className='md:flex md:flex-row flex flex-col md:justify-between items-center !text-left'>
            <div className='flex flex-col md:w-1/3 w-full gap-6'>
              <div className='space-y-6'>
                <Image
                  src={FooterLogo}
                  alt='footer_logo'
                  className='md:w-44 w-72'
                />
                <p className='md:text-[13px] text-3xl text-[#646464] w-auto'>
                  Take your health and body to the next level with our
                  comprehensive program designed to help you reach your fitness
                  goals.
                </p>
              </div>
              <div className='md:flex-row md:flex text-2xl gap-4 items-center hidden'>
                <AiOutlineTwitter className='text-sky-500 cursor-pointer' />
                <FaInstagram className='text-secondary cursor-pointer' />
                <SiFacebook className='text-blue-900 cursor-pointer' />
              </div>
              <div>
                <p className='text-sm font-medium text-[#646464] hidden md:block'>
                  Privacy Policy | © {new Date().getFullYear()}
                </p>
              </div>
            </div>

            <div className='flex flex-col gap-5 relative md:mt-0 mt-9'>
              <p className='md:text-xl text-4xl font-bold footer-main'>
                Our Classes
              </p>

              <span className='md:top-[32px] top-[45px] absolute md:w-12 w-32 md:h-[2px] h-[8px] bg-[#ff0366]'></span>

              <p className='md:text-sm text-3xl text-[#646464] font-medium md:mt-0 mt-9'>
                Fitness Classes
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                Aerobics Classes
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                Power Yoga
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                Learn Machines
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                Full-body Strength
              </p>
            </div>

            {/* right div */}
            <div className='flex flex-col gap-5 relative md:mt-0 mt-16'>
              <p className='md:text-[22px] text-4xl font-bold footer-main'>
                Working Hours
              </p>

              <span className='md:top-[39px] top-[45px] absolute md:w-20 w-44 md:h-[2px] h-[8px] bg-[#ff0366]'></span>

              <p className='md:text-sm text-3xl  text-[#646464] font-bold md:mt-0 mt-9'>
                Monday - Friday:
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                7:00am - 21:00pm
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-bold'>
                Saturday:
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-medium'>
                7:00am - 19:00pm
              </p>
              <p className='md:text-sm text-3xl text-[#646464] font-bold '>
                Sunday - Closed
              </p>
            </div>
            <div className='flex flex-row md:text-2xl text-6xl md:gap-4 gap-8 items-center md:hidden md:mt-0 mt-28'>
              <AiOutlineTwitter className='text-sky-500 cursor-pointer' />
              <FaInstagram className='text-secondary cursor-pointer' />
              <SiFacebook className='text-blue-900 cursor-pointer' />
            </div>
            <div>
              <p className='md:text-sm text-3xl font-medium text-[#646464] block md:hidden md:mt-0 mt-9'>
                Privacy Policy | © {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
