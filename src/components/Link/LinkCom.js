import React from 'react'
import './Link.css'

export default function LinkCom() {

  return (
    <div>
      <div className='flex '>
        <button className="bl-btn bl-btn-md bl-bg text-white rounded-md relative mr-4 uppercase tracking-wide btn-h-48 bl-bg">
          <span className="font-bold">+ ADD LINK</span>
        </button>
        <div style={{ whiteSpace: 'nowrap' }} className="px-8 uppercase tracking-wide bg-blPrimary w-165 rounded-md select-none cursor-pointer hover:opacity-95 font-inter text-sm font-semibold text-white flex flex-col justify-center items-center text-center">
          + ADD EMBED
        </div>
      </div>

      <div className="font-inter text-gray-500 mt-6 inline-flex items-center cursor-pointer select-none hover:text-black font-semibold">+ Add header</div>
      <div className='mt-8'>
        <div className='mt-6'>
          <div className='mb-4'>
            <div className="py-6 pl-6 pr-16 bg-white shadow-sm relative cursor-pointer rounded-sm ">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="py-2 flex justify-between flex-col">
                    <div className="text-sm font-inter font-bold text-blDark leading-24">
                      abc
                    </div>
                    <div className="text-sm font-inter font-normal overflow-hidden break-all cursor-pointer">
                      https://www.facebook.com/
                    </div>
                  </div>
                </div>
                <div className="flex ml-4 font-inter text-blDark text-base  font-medium  xs:hidden">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M8.09782 11.9999C8.09782 14.1332 9.84416 15.869 12.0003 15.869C14.1466 15.869 15.8929 14.1332 15.8929 11.9999C15.8929 9.85685 14.1466 8.12109 12.0003 8.12109C9.84416 8.12109 8.09782 9.85685 8.09782 11.9999ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0013 14.4125C13.3379 14.4125 14.4305 13.3265 14.4305 11.998C14.4305 10.6598 13.3379 9.57373 12.0013 9.57373C11.8009 9.57373 11.6595 9.7471 11.618 9.9431C11.427 10.8453 10.6247 11.5228 9.65982 11.5228C9.63152 11.5228 9.60718 11.5429 9.60231 11.5708C9.57795 11.7101 9.56226 11.8501 9.56226 11.998C9.56226 13.3265 10.6549 14.4125 12.0013 14.4125Z" fill="#6E6D7A"></path>
                  </svg>
                  0
                </div>
              </div>
              <div className="drag-and-drop bg-gray-100 bg-btn-grey flex justify-center items-center absolute cursor-grab drag-handle">
                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="16.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="16.5" r="2.5" fill="#6E6D7A"></circle></svg>
              </div>
            </div>
          </div>
          <div className='mb-4'>
            <div className="py-6 pl-6 pr-16 bg-white shadow-sm relative cursor-pointer rounded-sm ">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <div className="py-2 flex justify-between flex-col">
                    <div className="text-sm font-inter font-bold text-blDark leading-24">
                      abc
                    </div>
                    <div className="text-sm font-inter font-normal overflow-hidden break-all cursor-pointer">
                      https://www.facebook.com/
                    </div>
                  </div>
                </div>
                <div className="flex ml-4 font-inter text-blDark text-base  font-medium  xs:hidden">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M8.09782 11.9999C8.09782 14.1332 9.84416 15.869 12.0003 15.869C14.1466 15.869 15.8929 14.1332 15.8929 11.9999C15.8929 9.85685 14.1466 8.12109 12.0003 8.12109C9.84416 8.12109 8.09782 9.85685 8.09782 11.9999ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0013 14.4125C13.3379 14.4125 14.4305 13.3265 14.4305 11.998C14.4305 10.6598 13.3379 9.57373 12.0013 9.57373C11.8009 9.57373 11.6595 9.7471 11.618 9.9431C11.427 10.8453 10.6247 11.5228 9.65982 11.5228C9.63152 11.5228 9.60718 11.5429 9.60231 11.5708C9.57795 11.7101 9.56226 11.8501 9.56226 11.998C9.56226 13.3265 10.6549 14.4125 12.0013 14.4125Z" fill="#6E6D7A"></path>
                  </svg>
                  0
                </div>
              </div>
              <div className="drag-and-drop bg-gray-100 bg-btn-grey flex justify-center items-center absolute cursor-grab drag-handle">
                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="16.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="16.5" r="2.5" fill="#6E6D7A"></circle></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ letterSpacing: '1px' }} className="mt-12  text-gray-500 text-sm font-inter font-bold mb-4">SOCIALS</div>
      <div className="flex flex-wrap">
        <div className="mr-3 mb-3 socio sociallink-each flex justify-center items-center bg-white hover:shadow-sm transform hover:scale-105 duration-50 rounded-full w-h-48 cursor-pointer last:mr-0">
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.25 9C0.25 4.16751 4.16751 0.25 9 0.25H21C25.8325 0.25 29.75 4.16751 29.75 9V21C29.75 25.8325 25.8325 29.75 21 29.75H9C4.16751 29.75 0.25 25.8325 0.25 21V9ZM9 1.75C4.99594 1.75 1.75 4.99594 1.75 9V21C1.75 25.0041 4.99594 28.25 9 28.25H21C25.0041 28.25 28.25 25.0041 28.25 21V9C28.25 4.99594 25.0041 1.75 21 1.75H9ZM24 7.75H22V6.25H24V7.75ZM8.25 15C8.25 11.2721 11.2721 8.25 15 8.25C18.7279 8.25 21.75 11.2721 21.75 15C21.75 18.7279 18.7279 21.75 15 21.75C11.2721 21.75 8.25 18.7279 8.25 15ZM15 9.75C12.1005 9.75 9.75 12.1005 9.75 15C9.75 17.8995 12.1005 20.25 15 20.25C17.8995 20.25 20.25 17.8995 20.25 15C20.25 12.1005 17.8995 9.75 15 9.75Z" fill="black"></path></svg>
          </span>
        </div>
        <div className="mr-3 mb-3 socio sociallink-each flex justify-center items-center bg-white hover:shadow-sm transform hover:scale-105 duration-50 rounded-full w-h-48 cursor-pointer last:mr-0">
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M29.2021 2.29128C29.4871 2.3899 29.6853 2.64956 29.7052 2.95041C29.8142 4.59396 29.734 5.81882 29.3639 6.86221C29.0225 7.8245 28.4577 8.56742 27.7099 9.31547V10.375C27.7099 19.9699 19.9435 27.75 10.3606 27.75L10.2857 27.75C7.10613 27.7502 3.76846 27.7503 0.583588 25.6238C0.308808 25.4403 0.186459 25.0986 0.282317 24.7824C0.378175 24.4662 0.669657 24.25 1.00006 24.25C4.6982 24.25 7.82719 22.5613 9.52731 21.2664C5.55292 19.6867 2.78453 17.2448 1.43666 14.1767C-0.0476899 10.7979 0.256627 6.81007 2.32594 2.66503C2.45925 2.39801 2.7382 2.23543 3.03624 2.25106C3.33429 2.26669 3.5947 2.45754 3.69935 2.73704C4.59654 5.13323 7.9449 9.87584 14.2285 10.2291L14.2285 9.08222C14.2285 5.31 17.282 2.25003 21.0513 2.25003C22.8547 2.25003 24.4912 2.96875 25.6893 4.13362C26.6713 3.90172 27.6414 3.3409 28.3993 2.49842C28.6009 2.27427 28.9172 2.19266 29.2021 2.29128ZM26.6834 8.22046C27.3244 7.57355 27.715 7.02367 27.9502 6.36072C28.1163 5.89237 28.2154 5.33778 28.2424 4.61274C27.4133 5.17664 26.485 5.5459 25.5445 5.68833L25.1461 5.74867L24.8759 5.4498C23.9308 4.4046 22.5677 3.75003 21.0513 3.75003C18.1126 3.75003 15.7285 6.13624 15.7285 9.08222L15.7285 11.75H14.9785C8.56761 11.75 4.7119 7.74457 3.01957 4.78232C1.71748 8.06916 1.7083 11.0657 2.80998 13.5734C4.07399 16.4506 6.86624 18.8344 11.2221 20.2886C11.4685 20.3709 11.6548 20.5748 11.7145 20.8276C11.7743 21.0804 11.6989 21.3461 11.5154 21.5299C10.3491 22.698 7.43534 24.7769 3.65251 25.4965C5.76005 26.2408 7.96828 26.25 10.3606 26.25C19.1128 26.25 26.2099 19.1436 26.2099 10.375V8.91784C26.2099 8.60128 26.406 8.33053 26.6834 8.22046Z" fill="black"></path></svg>
          </span>
        </div>
        <div className="mr-3 mb-3 socio sociallink-each flex justify-center items-center bg-white hover:shadow-sm transform hover:scale-105 duration-50 rounded-full w-h-48 cursor-pointer last:mr-0">
          <span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.7672 1H18.2672V2.93103C18.2672 7.31599 21.8219 10.8707 26.2069 10.8707V12.3707C22.8756 12.3707 19.9473 10.6451 18.2672 8.03892V22.2414C18.2672 26.3883 14.9055 29.75 10.7586 29.75C6.61172 29.75 3.25 26.3883 3.25 22.2414C3.25 18.0945 6.61172 14.7328 10.7586 14.7328V16.2328C7.44015 16.2328 4.75 18.9229 4.75 22.2414C4.75 25.5598 7.44015 28.25 10.7586 28.25C14.0771 28.25 16.7672 25.5598 16.7672 22.2414V1Z" fill="black"></path></svg>
          </span>
        </div>
        <div className="cursor-pointer socio flex justify-center items-center bg-white rounded-full w-h-48 hover:shadow-sm duration-50"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83807 14.0625H8.22443V8.22443H14.0625V5.83807H8.22443V0H5.83807V5.83807H0V8.22443H5.83807V14.0625Z" fill="#6E6D7A"></path></svg></div></div>
    </div>
  )
}
