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
    </main>
  );
}
