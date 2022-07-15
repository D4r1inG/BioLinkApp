import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './DesignCom.css'

export default function DesignCom() {

  const { loading } = useSelector(state => state.ModalReducer)
  const { name, bio, image, themes, activeTheme } = useSelector(state => state.ProfileReducer)
  const dispatch = useDispatch()

  //TODO: Skeleton data cho mỗi theme 
  //TODO: Người dùng tự tạo theme và có thể xóa được 

  const [displayBtn, setDisplayBtn] = useState(false)
  const [valueInput, setValueInput] = useState({
    name: '',
    bio: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDisplayBtn(true)
    setValueInput({ ...valueInput, [name]: value })
  }

  const selectTheme = (id) => {
    dispatch({
      type: 'SELECT_THEME',
      id
    })
  }

  const renderThemes = () => {
    return themes.map((item) => {
      return <div key={item.id} className='ring-0 cursor-pointer hover:scale-105 transition-all' onClick={() => { selectTheme(item.id) }}>
        <div className='rounded-xl relative p-1 transition-all' style={{ border: activeTheme === item.id ? '2px solid #0095f6' : '2px solid transparent' }}>
          <div style={{ backgroundColor: item.background }} className='theme-bg-box br-grey rounded-lg overflow-hidden flex flex-col justify-between relative'>
            <div className='pt-10 px-4 pb-0 w-full z-10 relative'>
              {Array(4).fill(0)
                .map((_, index) => (
                  <div key={index} className='mb-2 w-full theme-btn' style={{ backgroundColor: item.btnBg, borderRadius: item.btnRadius, border: item.btnBorder }}></div>
                ))}
            </div>
          </div>
        </div>
        <div className="text-sm text-black font-inter font-normal text-center mt-2">{item.name}</div>
      </div>
    })
  }

  return (
    <div>
      <div className="bg-white rounded-sm shadow-sm p-8 mb-8">
        <div className="font-inter font-semibold text-blDark text-xl leading-24 xs:text-16">Profile</div>
        <div className="mt-8">
          <div className="flex">
            <div className="w-full">
              <div>
                <div className="input-main-wrap overflow-hidden	rounded-sm">
                  <input defaultValue={name} type="text" name="name" placeholder="Name" className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
                </div>
              </div>
              <div className="mt-6">
                <div className="input-main-wrap overflow-hidden	rounded-sm">
                  <input defaultValue={bio} type="text" maxLength="80" name="bio" placeholder="Bio" className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="flex items-center flex-shrink-0 ml-8">
              <div style={{ width: '115px', height: '115px' }} className="profile-img-up relative">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute pro-img-close-btn cursor-pointer z-10 right-0"><circle cx="12" cy="12" r="11" fill="#0D0C22" stroke="white" strokeWidth="2"></circle><g clipPath="url(#clip0)"><path d="M15.7766 8.21582L8.86487 15.1275" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.7823 15.1347L8.86487 8.21582" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0"><rect width="10.3784" height="10.3784" fill="white" transform="translate(7.13513 6.48633)"></rect></clipPath></defs></svg> <div alt="Quân Nguyễn Thế" className="bl-user-pic object-cover rounded-52 profile-img-up image-loader-wrap flex-shrink-0" style={{ position: 'relative', paddingBottom: '0px', transitionDuration: '0.5s' }}>
                  <span mode="in-out" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px' }}>
                    <canvas width="128" height="128" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px', display: 'none' }}></canvas>
                    <img src={image} alt="Quân Nguyễn Thế" style={{ height: '100%', width: '100%', position: 'absolute', inset: '0px', width: '115px', height: '115px' }} />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className={`${displayBtn ? 'block' : 'hidden'} bl-bg bl-btn-md text-white rounded-sm leading-4 relative flex items-center justify-center mt-8 w-full uppercase font-bold tracking-wider`} onClick={() => {
            dispatch({
              type: 'EDIT_VALUE',
              payload: valueInput
            })
            setDisplayBtn(false)
          }}>
            <span className={`${loading ? 'hidden' : 'block'}`}>Save</span>
            <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-sm shadow-sm p-8 ">
        <div className="font-inter font-semibold text-blDark text-xl leading-24 xs:text-16">Themes</div>
        <div className='mt-8'>
          <div className='grid grid-cols-3 gap-6 gap-x-8'>
            {renderThemes()}
          </div>
        </div>
      </div>
    </div>
  )
}