import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-[1440px] h-[5278px] left-1/2 top-1/2  bg-white">
      {/**navbar */}
      <div className="flex flex-col items-start px-[100px] py-[32px] gap-[10px] absolute w-[1440px] h-[120px] left-1/2 transform -translate-x-1/2 top-0">
        <div className="flex flex-row justify-between items-center p-0 gap-[356px] w-[1240px] h-14">
          <div className="flex flex-col justify-between items-start pr-[182px] gap-[10px] my-auto w-[149px] h-[48px]">
          <svg width="48" height="48" className="mx-auto" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.253 5.1292C21.8999 2.81311 24.9454 1.581 29.2144 1.89433C36.2194 2.40848 41.544 6.0273 44.2285 10.6079C46.8665 15.109 46.9597 20.5921 43.4693 24.7791C43.4347 25.1186 43.4493 25.7009 43.5393 26.515C43.6449 27.4696 43.8359 28.603 44.0606 29.746C44.3802 31.3716 44.7616 32.9843 45.0425 34.0708L45.5014 35.8457L43.739 35.2975C37.8599 33.4688 32.3785 34.4086 27.8792 36.3578C23.3644 38.3138 19.8897 41.2665 18.0973 43.3528L15.6908 46.1539L16.3007 42.5234C16.3617 42.1602 16.2935 41.6355 16.0408 40.9502C15.7937 40.2801 15.4027 39.5434 14.9285 38.7968C14.1341 37.5462 13.1544 36.343 12.3751 35.4875C9.8069 36.185 7.45708 35.7364 5.62121 34.4844C3.65435 33.143 2.36069 30.9382 1.97132 28.4514C1.19083 23.4665 4.00445 17.4309 12.021 14.1151C12.25 13.7928 12.4759 13.4737 12.6992 13.1583C14.9692 9.9526 16.9699 7.12696 19.253 5.1292ZM15.337 12.9876C18.5783 12.097 21.3817 11.026 27.0822 11.5814L27.2512 11.6333C21.2951 11.6333 16.5317 14.51 13.0723 15.8922C5.55822 18.8945 3.38638 24.1985 4.00324 28.1382C4.3171 30.1428 5.3435 31.8195 6.78609 32.8033C8.20616 33.7718 10.1121 34.1275 12.3527 33.3601C14.0822 32.7676 16.0394 31.4932 18.0973 29.254C17.2692 31.9358 16.1215 33.8641 14.4185 34.7051C15.1515 35.5574 15.9701 36.6103 16.6682 37.7092C17.1878 38.5273 17.6579 39.3977 17.972 40.2494C17.9961 40.3149 18.0196 40.381 18.0423 40.4474C20.1602 38.4233 23.2687 36.1292 27.0563 34.4883C31.4638 32.5789 36.8333 31.5378 42.6354 32.8845C42.4677 32.1664 42.2926 31.3751 42.1288 30.569C41.2576 30.1348 35.9367 28.3898 32.1772 29.746L34.4419 28.9827C37.5471 27.8625 40.0218 27.863 41.7064 28.2679C41.621 27.7354 41.5486 27.2189 41.4953 26.7375C41.4509 26.3357 41.4162 25.9314 41.4024 25.5476C41.4024 25.5476 40.4024 23.3872 23.9521 26.515C35.1446 22.4689 41.9602 23.3872 41.9602 23.3872C44.7303 19.9821 44.7168 15.4996 42.4509 11.6333C40.1233 7.66171 35.4234 4.39561 29.0626 3.92875C25.3713 3.65781 22.8648 4.6889 20.6132 6.65911C18.8258 8.22315 17.2127 10.3611 15.337 12.9876Z" fill="#9AD983"/>
          </svg>
          </div>
        </div>
        <div className="flex flex-row items-center p-0 gap-[10px] w-[342px] h-8 rounded-lg">
          <div className="flex flex-row items-center pt-[4px] gap-2 w-[47px] h-8">
            <h1 className="font-['inter'] font-medium text-base leading-6 w-[47px] h-[24px] text-[#888888]">Home</h1>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 6L10.5 1" stroke="#747476" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-row items-center pt-[4px] gap-2 w-[47px] h-8">
            <h1 className="font-['inter'] font-medium text-base leading-6 w-[47px] h-[24px] text-[#888888]">Home</h1>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 6L10.5 1" stroke="#747476" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-row items-center pt-[4px] gap-2 w-[47px] h-8">
            <h1 className="font-['inter'] font-medium text-base leading-6 w-[47px] h-[24px] text-[#888888]">Home</h1>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 6L10.5 1" stroke="#747476" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-row items-center pt-[4px] gap-2 w-[47px] h-8">
            <h1 className="font-['inter'] font-medium text-base leading-6 w-[47px] h-[24px] text-[#888888]">Home</h1>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5.5 6L10.5 1" stroke="#747476" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </div>


      <div className="absolute flex flex-col items-center gap-[64px]  h-[919px] left-1/2 transform -translate-x-1/2 w-[1440px] top-[160px]">
        <div className="flex flex-col items-center gap-[32px] w-[696px] h-[344px]">
          <div className="flex flex-col items-center isolate p-0 w-[696px] h-[176px]">
          <h1 className=" w-[696px] h-[176px]  text-center text-[57px] leading-[88px] font-bold font-['inter'] text-[#323434]">
              Your Favorite Food Delivered Hot & Fresh
          </h1>
          <div className="absolute w-[219.21px] h-[119.43px] left-[840px] top-[88px]  ">
          <svg width="225" height="124" viewBox="0 0 225 124" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M222.189 40.9974C216.472 51.7321 202.749 61.8299 184.8 70.4238M184.8 70.4238C118.722 102.062 -4.63017 113.318 3.34313 60.9357C17.1072 -29.4893 205.195 -7.50834 184.8 70.4238ZM184.8 70.4238C179.869 89.2646 151.574 111.434 101.074 121.434" stroke="#9AD983" stroke-width="4" stroke-linecap="round"/>
          </svg>
          </div>
          </div>
          <p className=" w-[667px] h-[48px] text-center text-[16px] leading-6 font-normal font-['inter'] text-[#888888]">
              Best food catering service in your town. We are ready to serve your desire. The <br /> ultimate destination for all your healthy food delivery needs.
          </p>
          <div className="flex flex-row items-center gap-4 w-[362px] h-[56px] rounded-[100px]">
            <button className="flex justify-center items-center gap-2 p-4 w-[173px] h-[56px] bg-[#9AD983] shadow-lg rounded-[12px]">
              <p className="  text-white ">order now</p>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6.5" cy="7" r="3" stroke="white" stroke-width="1.5" stroke-linecap="square"/>
                  <path d="M12.5 7H21.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  <circle cx="18.5" cy="17" r="3" transform="rotate(-180 18.5 17)" stroke="white" stroke-width="1.5" stroke-linecap="square"/>
                  <path d="M12.5 17H3.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <button className="flex justify-center items-center gap-2 p-4 w-[173px] h-[56px] bg-gray-900 rounded-[12px]">
            <p className="  text-white">see the menus</p>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[6px] w-[1562.05px] h-[439px]">
          <div className="w-[298px] h-[357px] ml-[100px]">
          <img src="/Rectangle.png" alt="" />
          </div>
          <div className="w-[298px] h-[357px] mt-[100px]">
          <img src="/Rectangle (1).png" alt="" />
          </div>
          <div className="w-[298px] h-[400px]">
          <img src="/Rectangle (2).png" alt="" />
          </div>
          <div className="w-[273.17px] h-[273.17px] ml-[50px]">
          <img src="/Vector.png" alt="" />
          </div>
          <div className="w-[220.61px] h-[222.09px] ml-[40px]">
          <img src="/Vector (1).png" alt="" />
          </div>
        </div>
        <div className="flex flex-row justify-center -mt-7 items-center gap-[8px] p-0 w-[358px] h-8">
        <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.000610352" width="24" height="8" rx="4" fill="#9AD983"/>
        </svg>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.000610352" width="8" height="8" rx="4" fill="#F5F5F5"/>
        </svg>
        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.000610352" width="8" height="8" rx="4" fill="#F5F5F5"/>
        </svg>
        </div>
      </div>


      <div className="absolute flex flex-col items-start p-0 w-[1440px] h-[4199px] top-[1100px]">
        <div className="flex flex-col justify-center items-center gap-[20px] px-[64px] py-[100px] w-[1440px]  h-[564px]">
          <div className="flex flex-col justify-center items-center gap-2 w-[492px] h-[108px]">
            <h1 className="font-['Inter'] text-center font-semibold text-[45px] text-[#323434] w-[492px] h-[52px]">How it works </h1>
            <p className="font-['Inter'] font-medium text-[16px] text-center top-[60px] leading-6 text-[#888888] w-[492px] h-[48px]">This lesson provides a basic framework for conducting a <br />recipe demonstration</p>
          </div>
          <div className="flex-row flex gap-8 mt-12">
          <div className="flex flex-row flex-wrap items-start justify-start order-1 gap-8 w-[286px]  h-[280px] shadow-md">
            <div className="flex flex-col items-start px-8 py-6 gap-14 w-[286px] h-[280px] bg-[#9AD983] rounded-[12px]">
              <div className="flex lex-row items-center justify-center w-10 h-10 bg-[#323434] rounded-[40px]">
                <h1 className="w-[23px] h-6 text-white font-['Inter'] font-medium text-[16px] leading-[24px] "> 04.</h1>
              </div>
              <div className="flex flex-col items-start gap-4 w-[238px] h-[120px]">
              <h1 className="w-[208px] h-[32px] font-semibold text-[24px] leading-8 text-[#323434] font-['Inter']" >
              Fast Delivery
              </h1>
              <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#323434]">Offers fresh foods and <br /> calculate calories, portion size.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start p-0 gap-8 w-[286px] left-[318px]  h-[280px] shadow-md">
            <div className="flex flex-col items-start px-8 py-6 gap-14 w-[286px] h-[280px] bg-[#9AD983] rounded-[12px]">
              <div className="flex lex-row items-center justify-center w-10 h-10 bg-[#323434] rounded-[40px]">
                <h1 className="w-[23px] h-6 text-white font-['Inter'] font-medium text-[16px] leading-[24px] "> 01.</h1>
              </div>
              <div className="flex flex-col items-start gap-4 w-[238px] h-[120px]">
              <h1 className="w-[208px] h-[32px] font-semibold text-[24px] leading-8 text-[#323434] font-['Inter']" >
              Fresh & Nutritious 
              </h1>
              <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#323434]">Offers fresh foods and <br /> calculate calories, portion size.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start p-0 gap-8 w-[286px]  h-[280px] shadow-md">
            <div className="flex flex-col items-start px-8 py-6 gap-14 w-[286px] h-[280px] bg-[#9AD983] rounded-[12px]">
              <div className="flex lex-row items-center justify-center w-10 h-10 bg-[#323434] rounded-[40px]">
                <h1 className="w-[23px] h-6 text-white font-['Inter'] font-medium text-[16px] leading-[24px] "> 02.</h1>
              </div>
              <div className="flex flex-col items-start gap-4 w-[238px] h-[120px]">
              <h1 className="w-[208px] h-[32px] font-semibold text-[24px] leading-8 text-[#323434] font-['Inter']" >
              Pick Meals
              </h1>
              <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#323434]">Offers fresh foods and <br /> calculate calories, portion <br /> size.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-start p-0 gap-8 w-[286px] left-[318px]  h-[280px] shadow-md">
            <div className="flex flex-col items-start px-8 py-6 gap-14 w-[286px] h-[280px] bg-[#9AD983] rounded-[12px]">
              <div className="flex lex-row items-center justify-center w-10 h-10 bg-[#323434] rounded-[40px]">
                <h1 className="w-[23px] h-6 text-white font-['Inter'] font-medium text-[16px] leading-[24px] "> 03.</h1>
              </div>
              <div className="flex flex-col items-start gap-4 w-[238px] h-[120px]">
              <h1 className="w-[208px] h-[32px] font-semibold text-[24px] leading-8 text-[#323434] font-['Inter']" >
              Place A Order
              </h1>
              <p className="font-normal text-base leading-6 tracking-[0.5px] text-[#323434]">Offers fresh foods and <br /> calculate calories, portion <br /> size.</p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="flex absolute mt-[500px] flex-col justify-center items-center px-[100px] py-[64px] gap-12 w-[1440px] h-[682px]">
          <div className="flex flex-col justify-center items-center gap-2 w-[492px] h-[108px]">
            <h1 className="font-['Inter'] font-[700] text-[45px] leading-[52px] text-center text-[#323434] w-[492px] h-[52px]">Our special Catering</h1>
            <p className="w-[492px] h-[48px] font-['Inter'] text-center text-[16px] leading-[24px] tracking-[0.15px] ">This lesson provides a basic framework for conducting a <br /> recipe demonstration</p>
          </div>

          <div className="flex-row flex gap-8">
          <div className="flex flex-row flex-wrap items-start content-start gap-8 w-[222.4px] h-[310px]">
            <div className=" flex flex-col justify-end items-center p-0 isolate w-[222.4px] h-[310px]">
              <div className="ml-7 -mt-[20px] h-[170px] w-[222.4px]">
                <img src="/img-1.png" className="absolute" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center gap-[10px] w-[222.4px] h-[204px] rounded-[12px] bg-[#F5F5F5]">
                <p className="w-[206.4px]  py-[70px] h-[40px] font-['Inter'] font-semibold not-italic text-[14px] leading-[20px] tracking-[0.1px] text-[#323434] ">Bhuna Khichuri and Thai Chiken</p>
                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-[206.4px] h-[16px]">
                  <div className="flex flex-row items-center p-0 gap-1 w-[38px] h-4 ">
                    <div className="flex flex-row items-start p-0 -mt-[20px] w-4 h-4 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63678 2.78762C7.77479 2.4884 7.8438 2.3388 7.94983 2.31423C7.98284 2.30658 8.01716 2.30658 8.05017 2.31423C8.1562 2.3388 8.22521 2.4884 8.36322 2.78762L9.59904 5.46687C9.63967 5.55496 9.65999 5.599 9.69426 5.62969C9.70553 5.63979 9.7178 5.64871 9.73089 5.65631C9.77067 5.67941 9.81883 5.68512 9.91517 5.69655L12.8452 6.04395C13.1724 6.08274 13.336 6.10214 13.3921 6.19539C13.4096 6.22442 13.4202 6.25706 13.4231 6.29082C13.4325 6.39925 13.3116 6.51112 13.0697 6.73484L10.9034 8.7381C10.8322 8.80397 10.7966 8.8369 10.778 8.87897C10.7719 8.89281 10.7672 8.90724 10.764 8.92204C10.7543 8.96701 10.7638 9.01458 10.7827 9.10973L11.3577 12.0037C11.4219 12.3269 11.454 12.4885 11.3827 12.5707C11.3605 12.5963 11.3327 12.6164 11.3015 12.6297C11.2013 12.6721 11.0575 12.5916 10.77 12.4307L8.19538 10.9895C8.11073 10.9421 8.0684 10.9184 8.02264 10.9138C8.00759 10.9122 7.99241 10.9122 7.97736 10.9138C7.9316 10.9184 7.88927 10.9421 7.80462 10.9895L5.23 12.4307C4.94247 12.5916 4.79871 12.6721 4.69848 12.6297C4.66728 12.6164 4.63952 12.5963 4.61731 12.5707C4.54597 12.4885 4.57808 12.3269 4.6423 12.0037L5.21732 9.10973C5.23623 9.01458 5.24568 8.96701 5.236 8.92204C5.23281 8.90724 5.22812 8.89281 5.222 8.87897C5.2034 8.8369 5.16779 8.80397 5.09657 8.7381L2.93034 6.73484C2.68842 6.51112 2.56746 6.39925 2.57686 6.29082C2.57978 6.25706 2.59039 6.22442 2.60787 6.19539C2.664 6.10214 2.82761 6.08274 3.15483 6.04395L6.08483 5.69655C6.18117 5.68512 6.22933 5.67941 6.26911 5.65631C6.2822 5.64871 6.29447 5.63979 6.30574 5.62969C6.34001 5.599 6.36033 5.55496 6.40096 5.46687L7.63678 2.78762Z" fill="#FFC804" stroke="#FFC804" stroke-width="0.666667" stroke-linejoin="round"/>
                    </svg>
                    <p className="absolute ml-5 w-[18px] h-4 not-italic font-['Inter] text-[12px] leading-4 text-[#323434]">4.8</p>
                    </div>
                    <div className="flex ml-[120px] -mt-[20px] justify-end p-0 gap-[2px] w-[65px] h-4">
                      <div className="w-4 h-4">
                        <img src="/Vector (2).png" alt="" />
                      </div>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">150</p>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">Kcal</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-0 gap-2 w-[206.4px] h-[32px] ">
                  <p className="w-[29px] h-[20px] font-['Inter'] not-italic font-semibold text-[14px] leading-[20px] text-[#9AD983]">BDT</p>
                  <p className="w-[97.83px] h-[28px] font-['Inter'] not-italic font-semibold text-[22px] leading-[28px] text-[#323434]">250</p>
                  <div className="flex flex-row items-center p-[9.14286px] gap-[4.57px] w-[32px] h-[32px] bg-[#9AD983] rounded-md ml-[70px] mb-3">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.31431" y1="2.28572" x2="7.31431" y2="11.7143" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="2.6859" y1="7.08571" x2="12.1145" y2="7.08571" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-start content-start gap-8 w-[222.4px] h-[310px]">
            <div className=" flex flex-col justify-end items-center p-0 isolate w-[222.4px] h-[310px]">
              <div className="ml-7 -mt-[20px] h-[170px] w-[222.4px]">
                <img src="/img-2.png" className="absolute" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center gap-[10px] w-[222.4px] h-[204px] rounded-[12px] bg-[#F5F5F5]">
                <p className="w-[206.4px]  py-[70px] h-[40px] font-['Inter'] font-semibold not-italic text-[14px] leading-[20px] tracking-[0.1px] text-[#323434] ">Bhuna Khichuri and Thai Chiken</p>
                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-[206.4px] h-[16px]">
                  <div className="flex flex-row items-center p-0 gap-1 w-[38px] h-4 ">
                    <div className="flex flex-row items-start p-0 -mt-[20px] w-4 h-4 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63678 2.78762C7.77479 2.4884 7.8438 2.3388 7.94983 2.31423C7.98284 2.30658 8.01716 2.30658 8.05017 2.31423C8.1562 2.3388 8.22521 2.4884 8.36322 2.78762L9.59904 5.46687C9.63967 5.55496 9.65999 5.599 9.69426 5.62969C9.70553 5.63979 9.7178 5.64871 9.73089 5.65631C9.77067 5.67941 9.81883 5.68512 9.91517 5.69655L12.8452 6.04395C13.1724 6.08274 13.336 6.10214 13.3921 6.19539C13.4096 6.22442 13.4202 6.25706 13.4231 6.29082C13.4325 6.39925 13.3116 6.51112 13.0697 6.73484L10.9034 8.7381C10.8322 8.80397 10.7966 8.8369 10.778 8.87897C10.7719 8.89281 10.7672 8.90724 10.764 8.92204C10.7543 8.96701 10.7638 9.01458 10.7827 9.10973L11.3577 12.0037C11.4219 12.3269 11.454 12.4885 11.3827 12.5707C11.3605 12.5963 11.3327 12.6164 11.3015 12.6297C11.2013 12.6721 11.0575 12.5916 10.77 12.4307L8.19538 10.9895C8.11073 10.9421 8.0684 10.9184 8.02264 10.9138C8.00759 10.9122 7.99241 10.9122 7.97736 10.9138C7.9316 10.9184 7.88927 10.9421 7.80462 10.9895L5.23 12.4307C4.94247 12.5916 4.79871 12.6721 4.69848 12.6297C4.66728 12.6164 4.63952 12.5963 4.61731 12.5707C4.54597 12.4885 4.57808 12.3269 4.6423 12.0037L5.21732 9.10973C5.23623 9.01458 5.24568 8.96701 5.236 8.92204C5.23281 8.90724 5.22812 8.89281 5.222 8.87897C5.2034 8.8369 5.16779 8.80397 5.09657 8.7381L2.93034 6.73484C2.68842 6.51112 2.56746 6.39925 2.57686 6.29082C2.57978 6.25706 2.59039 6.22442 2.60787 6.19539C2.664 6.10214 2.82761 6.08274 3.15483 6.04395L6.08483 5.69655C6.18117 5.68512 6.22933 5.67941 6.26911 5.65631C6.2822 5.64871 6.29447 5.63979 6.30574 5.62969C6.34001 5.599 6.36033 5.55496 6.40096 5.46687L7.63678 2.78762Z" fill="#FFC804" stroke="#FFC804" stroke-width="0.666667" stroke-linejoin="round"/>
                    </svg>
                    <p className="absolute ml-5 w-[18px] h-4 not-italic font-['Inter] text-[12px] leading-4 text-[#323434]">4.8</p>
                    </div>
                    <div className="flex ml-[120px] -mt-[20px] justify-end p-0 gap-[2px] w-[65px] h-4">
                      <div className="w-4 h-4">
                        <img src="/Vector (2).png" alt="" />
                      </div>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">150</p>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">Kcal</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-0 gap-2 w-[206.4px] h-[32px] ">
                  <p className="w-[29px] h-[20px] font-['Inter'] not-italic font-semibold text-[14px] leading-[20px] text-[#9AD983]">BDT</p>
                  <p className="w-[97.83px] h-[28px] font-['Inter'] not-italic font-semibold text-[22px] leading-[28px] text-[#323434]">250</p>
                  <div className="flex flex-row items-center p-[9.14286px] gap-[4.57px] w-[32px] h-[32px] bg-[#9AD983] rounded-md ml-[70px] mb-3">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.31431" y1="2.28572" x2="7.31431" y2="11.7143" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="2.6859" y1="7.08571" x2="12.1145" y2="7.08571" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-start content-start gap-8 w-[222.4px] h-[310px]">
            <div className=" flex flex-col justify-end items-center p-0 isolate w-[222.4px] h-[310px]">
              <div className="ml-7 -mt-[20px] h-[170px] w-[222.4px]">
                <img src="/img-3.png" className="absolute" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center gap-[10px] w-[222.4px] h-[204px] rounded-[12px] bg-[#F5F5F5]">
                <p className="w-[206.4px]  py-[70px] h-[40px] font-['Inter'] font-semibold not-italic text-[14px] leading-[20px] tracking-[0.1px] text-[#323434] ">Bhuna Khichuri and Thai Chiken</p>
                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-[206.4px] h-[16px]">
                  <div className="flex flex-row items-center p-0 gap-1 w-[38px] h-4 ">
                    <div className="flex flex-row items-start p-0 -mt-[20px] w-4 h-4 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63678 2.78762C7.77479 2.4884 7.8438 2.3388 7.94983 2.31423C7.98284 2.30658 8.01716 2.30658 8.05017 2.31423C8.1562 2.3388 8.22521 2.4884 8.36322 2.78762L9.59904 5.46687C9.63967 5.55496 9.65999 5.599 9.69426 5.62969C9.70553 5.63979 9.7178 5.64871 9.73089 5.65631C9.77067 5.67941 9.81883 5.68512 9.91517 5.69655L12.8452 6.04395C13.1724 6.08274 13.336 6.10214 13.3921 6.19539C13.4096 6.22442 13.4202 6.25706 13.4231 6.29082C13.4325 6.39925 13.3116 6.51112 13.0697 6.73484L10.9034 8.7381C10.8322 8.80397 10.7966 8.8369 10.778 8.87897C10.7719 8.89281 10.7672 8.90724 10.764 8.92204C10.7543 8.96701 10.7638 9.01458 10.7827 9.10973L11.3577 12.0037C11.4219 12.3269 11.454 12.4885 11.3827 12.5707C11.3605 12.5963 11.3327 12.6164 11.3015 12.6297C11.2013 12.6721 11.0575 12.5916 10.77 12.4307L8.19538 10.9895C8.11073 10.9421 8.0684 10.9184 8.02264 10.9138C8.00759 10.9122 7.99241 10.9122 7.97736 10.9138C7.9316 10.9184 7.88927 10.9421 7.80462 10.9895L5.23 12.4307C4.94247 12.5916 4.79871 12.6721 4.69848 12.6297C4.66728 12.6164 4.63952 12.5963 4.61731 12.5707C4.54597 12.4885 4.57808 12.3269 4.6423 12.0037L5.21732 9.10973C5.23623 9.01458 5.24568 8.96701 5.236 8.92204C5.23281 8.90724 5.22812 8.89281 5.222 8.87897C5.2034 8.8369 5.16779 8.80397 5.09657 8.7381L2.93034 6.73484C2.68842 6.51112 2.56746 6.39925 2.57686 6.29082C2.57978 6.25706 2.59039 6.22442 2.60787 6.19539C2.664 6.10214 2.82761 6.08274 3.15483 6.04395L6.08483 5.69655C6.18117 5.68512 6.22933 5.67941 6.26911 5.65631C6.2822 5.64871 6.29447 5.63979 6.30574 5.62969C6.34001 5.599 6.36033 5.55496 6.40096 5.46687L7.63678 2.78762Z" fill="#FFC804" stroke="#FFC804" stroke-width="0.666667" stroke-linejoin="round"/>
                    </svg>
                    <p className="absolute ml-5 w-[18px] h-4 not-italic font-['Inter] text-[12px] leading-4 text-[#323434]">4.8</p>
                    </div>
                    <div className="flex ml-[120px] -mt-[20px] justify-end p-0 gap-[2px] w-[65px] h-4">
                      <div className="w-4 h-4">
                        <img src="/Vector (2).png" alt="" />
                      </div>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">150</p>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">Kcal</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-0 gap-2 w-[206.4px] h-[32px] ">
                  <p className="w-[29px] h-[20px] font-['Inter'] not-italic font-semibold text-[14px] leading-[20px] text-[#9AD983]">BDT</p>
                  <p className="w-[97.83px] h-[28px] font-['Inter'] not-italic font-semibold text-[22px] leading-[28px] text-[#323434]">250</p>
                  <div className="flex flex-row items-center p-[9.14286px] gap-[4.57px] w-[32px] h-[32px] bg-[#9AD983] rounded-md ml-[70px] mb-3">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.31431" y1="2.28572" x2="7.31431" y2="11.7143" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="2.6859" y1="7.08571" x2="12.1145" y2="7.08571" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-start content-start gap-8 w-[222.4px] h-[310px]">
            <div className=" flex flex-col justify-end items-center p-0 isolate w-[222.4px] h-[310px]">
              <div className="ml-7 -mt-[20px] h-[170px] w-[222.4px]">
                <img src="/img-4.png" className="absolute" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center gap-[10px] w-[222.4px] h-[204px] rounded-[12px] bg-[#F5F5F5]">
                <p className="w-[206.4px]  py-[70px] h-[40px] font-['Inter'] font-semibold not-italic text-[14px] leading-[20px] tracking-[0.1px] text-[#323434] ">Bhuna Khichuri and Thai Chiken</p>
                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-[206.4px] h-[16px]">
                  <div className="flex flex-row items-center p-0 gap-1 w-[38px] h-4 ">
                    <div className="flex flex-row items-start p-0 -mt-[20px] w-4 h-4 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63678 2.78762C7.77479 2.4884 7.8438 2.3388 7.94983 2.31423C7.98284 2.30658 8.01716 2.30658 8.05017 2.31423C8.1562 2.3388 8.22521 2.4884 8.36322 2.78762L9.59904 5.46687C9.63967 5.55496 9.65999 5.599 9.69426 5.62969C9.70553 5.63979 9.7178 5.64871 9.73089 5.65631C9.77067 5.67941 9.81883 5.68512 9.91517 5.69655L12.8452 6.04395C13.1724 6.08274 13.336 6.10214 13.3921 6.19539C13.4096 6.22442 13.4202 6.25706 13.4231 6.29082C13.4325 6.39925 13.3116 6.51112 13.0697 6.73484L10.9034 8.7381C10.8322 8.80397 10.7966 8.8369 10.778 8.87897C10.7719 8.89281 10.7672 8.90724 10.764 8.92204C10.7543 8.96701 10.7638 9.01458 10.7827 9.10973L11.3577 12.0037C11.4219 12.3269 11.454 12.4885 11.3827 12.5707C11.3605 12.5963 11.3327 12.6164 11.3015 12.6297C11.2013 12.6721 11.0575 12.5916 10.77 12.4307L8.19538 10.9895C8.11073 10.9421 8.0684 10.9184 8.02264 10.9138C8.00759 10.9122 7.99241 10.9122 7.97736 10.9138C7.9316 10.9184 7.88927 10.9421 7.80462 10.9895L5.23 12.4307C4.94247 12.5916 4.79871 12.6721 4.69848 12.6297C4.66728 12.6164 4.63952 12.5963 4.61731 12.5707C4.54597 12.4885 4.57808 12.3269 4.6423 12.0037L5.21732 9.10973C5.23623 9.01458 5.24568 8.96701 5.236 8.92204C5.23281 8.90724 5.22812 8.89281 5.222 8.87897C5.2034 8.8369 5.16779 8.80397 5.09657 8.7381L2.93034 6.73484C2.68842 6.51112 2.56746 6.39925 2.57686 6.29082C2.57978 6.25706 2.59039 6.22442 2.60787 6.19539C2.664 6.10214 2.82761 6.08274 3.15483 6.04395L6.08483 5.69655C6.18117 5.68512 6.22933 5.67941 6.26911 5.65631C6.2822 5.64871 6.29447 5.63979 6.30574 5.62969C6.34001 5.599 6.36033 5.55496 6.40096 5.46687L7.63678 2.78762Z" fill="#FFC804" stroke="#FFC804" stroke-width="0.666667" stroke-linejoin="round"/>
                    </svg>
                    <p className="absolute ml-5 w-[18px] h-4 not-italic font-['Inter] text-[12px] leading-4 text-[#323434]">4.8</p>
                    </div>
                    <div className="flex ml-[120px] -mt-[20px] justify-end p-0 gap-[2px] w-[65px] h-4">
                      <div className="w-4 h-4">
                        <img src="/Vector (2).png" alt="" />
                      </div>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">150</p>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">Kcal</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-0 gap-2 w-[206.4px] h-[32px] ">
                  <p className="w-[29px] h-[20px] font-['Inter'] not-italic font-semibold text-[14px] leading-[20px] text-[#9AD983]">BDT</p>
                  <p className="w-[97.83px] h-[28px] font-['Inter'] not-italic font-semibold text-[22px] leading-[28px] text-[#323434]">250</p>
                  <div className="flex flex-row items-center p-[9.14286px] gap-[4.57px] w-[32px] h-[32px] bg-[#9AD983] rounded-md ml-[70px] mb-3">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.31431" y1="2.28572" x2="7.31431" y2="11.7143" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="2.6859" y1="7.08571" x2="12.1145" y2="7.08571" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-start content-start gap-8 w-[222.4px] h-[310px]">
            <div className=" flex flex-col justify-end items-center p-0 isolate w-[222.4px] h-[310px]">
              <div className="ml-7 -mt-[20px] h-[170px] w-[222.4px]">
                <img src="/img-5.png" className="absolute" alt="" />
              </div>
              <div className="flex flex-col justify-end items-center gap-[10px] w-[222.4px] h-[204px] rounded-[12px] bg-[#F5F5F5]">
                <p className="w-[206.4px]  py-[70px] h-[40px] font-['Inter'] font-semibold not-italic text-[14px] leading-[20px] tracking-[0.1px] text-[#323434] ">Bhuna Khichuri and Thai Chiken</p>
                <div className="flex flex-row justify-between items-center p-0 gap-[10px] w-[206.4px] h-[16px]">
                  <div className="flex flex-row items-center p-0 gap-1 w-[38px] h-4 ">
                    <div className="flex flex-row items-start p-0 -mt-[20px] w-4 h-4 ">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.63678 2.78762C7.77479 2.4884 7.8438 2.3388 7.94983 2.31423C7.98284 2.30658 8.01716 2.30658 8.05017 2.31423C8.1562 2.3388 8.22521 2.4884 8.36322 2.78762L9.59904 5.46687C9.63967 5.55496 9.65999 5.599 9.69426 5.62969C9.70553 5.63979 9.7178 5.64871 9.73089 5.65631C9.77067 5.67941 9.81883 5.68512 9.91517 5.69655L12.8452 6.04395C13.1724 6.08274 13.336 6.10214 13.3921 6.19539C13.4096 6.22442 13.4202 6.25706 13.4231 6.29082C13.4325 6.39925 13.3116 6.51112 13.0697 6.73484L10.9034 8.7381C10.8322 8.80397 10.7966 8.8369 10.778 8.87897C10.7719 8.89281 10.7672 8.90724 10.764 8.92204C10.7543 8.96701 10.7638 9.01458 10.7827 9.10973L11.3577 12.0037C11.4219 12.3269 11.454 12.4885 11.3827 12.5707C11.3605 12.5963 11.3327 12.6164 11.3015 12.6297C11.2013 12.6721 11.0575 12.5916 10.77 12.4307L8.19538 10.9895C8.11073 10.9421 8.0684 10.9184 8.02264 10.9138C8.00759 10.9122 7.99241 10.9122 7.97736 10.9138C7.9316 10.9184 7.88927 10.9421 7.80462 10.9895L5.23 12.4307C4.94247 12.5916 4.79871 12.6721 4.69848 12.6297C4.66728 12.6164 4.63952 12.5963 4.61731 12.5707C4.54597 12.4885 4.57808 12.3269 4.6423 12.0037L5.21732 9.10973C5.23623 9.01458 5.24568 8.96701 5.236 8.92204C5.23281 8.90724 5.22812 8.89281 5.222 8.87897C5.2034 8.8369 5.16779 8.80397 5.09657 8.7381L2.93034 6.73484C2.68842 6.51112 2.56746 6.39925 2.57686 6.29082C2.57978 6.25706 2.59039 6.22442 2.60787 6.19539C2.664 6.10214 2.82761 6.08274 3.15483 6.04395L6.08483 5.69655C6.18117 5.68512 6.22933 5.67941 6.26911 5.65631C6.2822 5.64871 6.29447 5.63979 6.30574 5.62969C6.34001 5.599 6.36033 5.55496 6.40096 5.46687L7.63678 2.78762Z" fill="#FFC804" stroke="#FFC804" stroke-width="0.666667" stroke-linejoin="round"/>
                    </svg>
                    <p className="absolute ml-5 w-[18px] h-4 not-italic font-['Inter] text-[12px] leading-4 text-[#323434]">4.8</p>
                    </div>
                    <div className="flex ml-[120px] -mt-[20px] justify-end p-0 gap-[2px] w-[65px] h-4">
                      <div className="w-4 h-4">
                        <img src="/Vector (2).png" alt="" />
                      </div>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">150</p>
                      <p className="w-[21px] h-4 font-['Inter'] not-italic font-normal text-[12px] leading-4 text-[#323434]">Kcal</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center p-0 gap-2 w-[206.4px] h-[32px] ">
                  <p className="w-[29px] h-[20px] font-['Inter'] not-italic font-semibold text-[14px] leading-[20px] text-[#9AD983]">BDT</p>
                  <p className="w-[97.83px] h-[28px] font-['Inter'] not-italic font-semibold text-[22px] leading-[28px] text-[#323434]">250</p>
                  <div className="flex flex-row items-center p-[9.14286px] gap-[4.57px] w-[32px] h-[32px] bg-[#9AD983] rounded-md ml-[70px] mb-3">
                  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.31431" y1="2.28572" x2="7.31431" y2="11.7143" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="2.6859" y1="7.08571" x2="12.1145" y2="7.08571" stroke="white" stroke-width="0.857143" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className=" flex flex-row cursor-pointer  items-start p-0 gap-4 mt-[578px] ml-[672px] w-24 h-10 ">
          <button className="w-10 h-10 bg-[#9AD983] rounded-[100px]">
          <svg width="15" className="ml-3" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 5H2M2 5L6 9M2 5L6 1" stroke="white" stroke-width="1.5"/>
          </svg>
          </button>
          <button className="w-10 h-10 bg-[#F5F5F5] rounded-[100px]">
          <svg width="14" className="ml-3" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.000488281 5L12.5005 5M12.5005 5L8.50049 1M12.5005 5L8.50049 9" stroke="#323434" stroke-width="1.5"/>
          </svg>
          </button>
        </div>

        <div className="flex flex-col items-start px-16 py-[100px] w-[1440px] h-[288px]">
          <div className="flex flex-row items-start p-0 gap-8 w-[1240px] h-[160px]">
            <div className="flex flex-row gap-8">
              <div className="flex flex-col items-center gap-4 px-[32px] w-[286px] h-[160px] bg-[#9AD983] rounded-[16px]">
                <h1 className="w-[113px] h-[52px] font-['Inter'] not-italic font-bold text-[45px] leading-[52px] mt-10 text-[#323434]">10K+</h1>
                <p className="w-[170px] h-7 font-['Inter'] not-italic font-[500] text-[22px] leading-[28px]  text-[#323434]">Total customers</p>
              </div>
              <div className="flex flex-col items-center gap-4 px-[32px] w-[286px] h-[160px] bg-[#9AD983] rounded-[16px]">
                <h1 className="w-[113px] h-[52px] font-['Inter'] not-italic font-bold text-[45px] leading-[52px] mt-10 text-[#323434]">09+</h1>
                <p className="w-[209px] h-7 font-['Inter'] not-italic font-[500] text-[22px] leading-[28px]  text-[#323434]">Years of experience</p>
              </div>
              <div className="flex flex-col items-center gap-4 px-[32px] w-[286px] h-[160px] bg-[#9AD983] rounded-[16px]">
                <h1 className="w-[113px] h-[52px] font-['Inter'] not-italic font-bold text-[45px] leading-[52px] mt-10 text-[#323434]">12K</h1>
                <p className="w-[188px] h-7 font-['Inter'] not-italic font-[500] text-[22px] leading-[28px]  text-[#323434]">Total destinations</p>
              </div>
              <div className="flex flex-col items-center gap-4 px-[32px] w-[286px] h-[160px] bg-[#9AD983] rounded-[16px]">
                <h1 className="w-[113px] h-[52px] font-['Inter'] not-italic font-bold text-[45px] leading-[52px] mt-10 text-[#323434]">4.9</h1>
                <p className="w-[170px] h-7 font-['Inter'] not-italic font-[500] text-[22px] leading-[28px]  text-[#323434]">Average rating</p>
              </div>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </main>
  );
}
