import React from 'react'
import './Design.css'

export default function Design() {
  return (
    <div>
      <div className="bg-white rounded-sm shadow-sm p-8 ">
        <div className="font-inter font-semibold text-blDark text-xl leading-24 xs:text-16">Profile</div>
        <div className="mt-8">
          <div className="flex">
            <div className="w-full"><div>
              <div className="input-main-wrap overflow-hidden	rounded-sm">
                <input type="text" name="title" placeholder="Name" className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
              </div>
            </div>
              <div className="mt-6">
                <div className="input-main-wrap overflow-hidden	rounded-sm">
                  <input type="text" maxLength="80" name="bio_line" placeholder="Bio" className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" /></div>
              </div>
            </div>
            <div className="flex items-center flex-shrink-0 ml-8">
              <div style={{ width: '115px', height: '115px' }} className="profile-img-up relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute pro-img-close-btn cursor-pointer z-10 right-0"><circle cx="12" cy="12" r="11" fill="#0D0C22" stroke="white" strokeWidth="2"></circle><g clipPath="url(#clip0)"><path d="M15.7766 8.21582L8.86487 15.1275" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.7823 15.1347L8.86487 8.21582" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0"><rect width="10.3784" height="10.3784" fill="white" transform="translate(7.13513 6.48633)"></rect></clipPath></defs></svg> <div alt="Quân Nguyễn Thế" className="bl-user-pic object-cover rounded-52 profile-img-up image-loader-wrap flex-shrink-0" style={{ position: 'relative', paddingBottom: '0px', transitionDuration: '0.5s' }}>
                  <span mode="in-out" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px' }}>
                    <canvas width="128" height="128" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px', display: 'none' }}></canvas>
                    <img src="https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png" alt="Quân Nguyễn Thế" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px', width: '115px', height: '115px' }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="bl-btn bl-btn-md text-white rounded-sm leading-4 relative flex items-center justify-center mt-8 w-full uppercase tracking-2">
            <span className="bl-circle-loader ">Save</span></button>
        </div>
      </div>
    </div>
  )
}
