import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function SettingCom() {

  const dispatch = useDispatch()
  const { showLogo, showWarning } = useSelector(state => state.ProfileReducer)

  const [displayBtn, setDisplayBtn] = useState(false)
  const [isHide, setIsHide] = useState()
  const [warning, setWarning] = useState()

  useEffect(() => {
    setIsHide(showLogo)
    setWarning(showWarning)
  }, [showLogo, showWarning])

  const handleChange = (e) => {
    const { name, value } = e.target
    setDisplayBtn(true)
  }

  return (
    <div className='setting_tour'>
      <div className="font-inter font-semibold text-blDark text-2xl leading-6 flex items-center">Setting</div>
      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div>
          <div className="border-b-gray-100 border-b-2 py-8"><div className="flex justify-between"><div className="w-11/12 pr-24">
            <div className="font-inter font-semibold text-black text-xl leading-6 flex ">
              Show
              <svg width="23" height="23" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2" ><path d="M18.4277 19.4216V16.0401C18.4277 15.5665 18.169 15.3297 17.6514 15.3297H15.2936V20.132H17.6514C18.169 20.132 18.4277 19.8952 18.4277 19.4216ZM18.4277 27.1224V23.5988C18.4277 23.3526 18.3702 23.1821 18.2552 23.0873C18.1402 22.9737 17.9389 22.9168 17.6514 22.9168H15.2936V27.8328H17.6514C18.169 27.8328 18.4277 27.596 18.4277 27.1224ZM11.2393 12.5449H18.8303C21.2648 12.5449 22.482 13.5868 22.482 15.6707V18.8533C22.482 20.2552 22.0507 21.1361 21.1881 21.496C22.0507 21.8181 22.482 22.6327 22.482 23.9398V27.4634C22.482 29.5662 21.2648 30.6176 18.8303 30.6176H11.2393V12.5449Z" fill="black"></path> <path d="M25.0005 12.5449H29.0835V30.6176H25.0005V12.5449Z" fill="black"></path> <path d="M35.3025 12.5449H39.1555C41.5708 12.5449 42.7785 13.5868 42.7785 15.6707V27.4634C42.7785 29.5662 41.5708 30.6176 39.1555 30.6176H35.3025C32.868 30.6176 31.6507 29.5662 31.6507 27.4634V15.6707C31.6507 13.5868 32.868 12.5449 35.3025 12.5449ZM38.6667 26.9235V16.239C38.6667 15.7654 38.4175 15.5286 37.9191 15.5286H36.5389C36.0213 15.5286 35.7625 15.7654 35.7625 16.239V26.9235C35.7625 27.3971 36.0213 27.6339 36.5389 27.6339H37.9191C38.4175 27.6339 38.6667 27.3971 38.6667 26.9235Z" fill="black"></path> <path d="M47.8208 30.5696C46.4512 30.5696 45.3408 29.4593 45.3408 28.0896V27.9898C45.3408 26.6201 46.4512 25.5098 47.8208 25.5098C49.1905 25.5098 50.3008 26.6201 50.3008 27.9898V28.0896C50.3008 29.4593 49.1905 30.5696 47.8208 30.5696Z" fill="black"></path> <path d="M15.3379 49.7824H20.5999V52.7661H11.2549V34.6934H15.3379V49.7824Z" fill="black"></path> <path d="M22.0115 34.6934H26.0946V52.7661H22.0115V34.6934Z" fill="black"></path> <path d="M36.4253 34.6934H40.1921V52.7661H36.5116L32.5148 41.9395V52.7661H28.7768V34.6934H32.4861L36.4253 45.4915V34.6934Z" fill="black"></path> <path d="M54.8948 34.6934L51.2143 43.616L54.8948 52.7661H50.4667L46.93 43.616L50.4667 34.6934H54.8948ZM42.7606 52.7661V34.6934H46.8437V52.7661H42.7606Z" fill="black"></path> <path d="M1 1H65V64.2483H1V1Z" stroke="black" strokeWidth="2" strokeLinejoin="round"></path></svg>
              credit
            </div>
          </div>
            <div>
              <label className="bl-toggle-btn relative inline-block ring-opacity-0">
                <input checked={isHide || false} type="checkbox" className="bl-toggle-input" onChange={() => { dispatch({ type: 'TOGGLE_LOGO' }) }} />
                <span className="bl-toggle-slider absolute cursor-pointer rounded-52" >
                </span>
              </label>
            </div>
          </div>
            <div className="font-inter font-normal text-black text-sm leading-6 mt-4">We appreciate you showing our logo credit in the footer, but feel free to hide it.</div>
          </div>
        </div>

        <div>
          <div className="py-8"><div className="flex justify-between"><div className="w-11/12 pr-24">
            <div className="font-inter font-semibold text-black text-xl leading-6 flex ">
              NSFW warning
            </div>
          </div>
            <div>
              <label className="bl-toggle-btn relative inline-block ring-opacity-0">
                <input checked={warning || false} type="checkbox" className="bl-toggle-input" onChange={() => { dispatch({ type: 'TOGGLE_WARNING' }) }} />
                <span className="bl-toggle-slider absolute cursor-pointer rounded-52" >
                </span>
              </label>
            </div>
          </div>
            <div className="font-inter font-normal text-black text-sm leading-6 mt-4">Show a warning before displaying your page.</div>
          </div>
        </div>
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div className="font-inter font-semibold text-black text-xl leading-6 ">Account</div>
        <div className="mt-6">
          <div className="relative bl-input-with-suffix-wrap">
            <div className="bl-input-prefix on-profile text-sm text-gray-400 font-inter font-normal absolute" style={{ top: '11px', left: '16px' }}>bio.link/</div>
            <div className="input-main-wrap overflow-hidden	rounded-sm">
              <input type="text" name="username" placeholder="username" className="bl-input-with-prefix bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="input-main-wrap overflow-hidden	rounded-sm mt-4">
          <input type="text" name="title" placeholder="Email" className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
        </div>
        <button className="bl-btn-md bg-gray-100 text-dark font-inter leading-4 relative flex justify-center items-center hover:bg-gray-200 rounded-sm px-8 py-4 mt-6">
          <span className="flex font-semibold text-14">
            Set Password
          </span>
          <span className="bl-circle-loader absolute hidden"></span>
        </button>
        <button className={`${displayBtn ? 'flex' : 'hidden'} font-bold bl-btn-md bl-bg text-white rounded-sm leading-4 relative justify-center items-center w-full uppercase tracking-wider mt-8`}>
          <span className="">Save changes</span>
          <span className="bl-circle-loader absolute hidden">
          </span>
        </button>
      </div>
    </div>
  )
}
