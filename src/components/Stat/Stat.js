import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStat } from '../../redux/Actions/StatAction'

export default function Stat() {

  const { clickList } = useSelector(state => state.StatReducer)
  const [stat, setStat] = useState(7)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStat(stat))
  }, [stat])

  const renderLink = () => {
    return clickList.clickPluginsList?.filter(item => !item.isHeader).sort((a, b) => b.clickCount - a.clickCount).map((item, index) => {
      return <div key={index} className='flex mb-4 last:mb-0' >
        <div className="font-inter font-bold text-xl text-gray-400 flex items-center flex-shrink-0">{index + 1}</div>
        <div className='stat-progress-each flex justify-between py-3 px-6 ml-4 w-full relative '>
          <div className="pr-8">
            <div className="text-black text-sm font-inter font-semibold limit-one-line break-all">{item.title}</div>
            <div className="text-gray-500 text-sm font-inter font-normal limit-one-line break-all pr-8">
              {item.url}
            </div>
          </div>
          <div>
            <div className="text-black text-sm font-inter font-semibold text-center">{item.clickCount === null ? 0 : item.clickCount}</div>
            <div className="text-gray-500 text-sm font-inter font-normal">clicks</div>
          </div>
          <div className="absolute stat-progress-bar" style={{ width: (item.clickCount / clickList.totalClickPlugins) * 100 + '%' }}></div>
          {/* TODO: thay đổi width theo từng click count */}
        </div>
      </div>
    })
  }

  const renderSocialLink = () => {
    return clickList.clickSocialList?.filter(item => item.url).sort((a, b) => b.clickCount - a.clickCount).map((item, index) => {
      return <div key={index} className='flex mb-4 last:mb-0' >
        <div className="font-inter font-bold text-xl text-gray-400 flex items-center flex-shrink-0">{index + 1}</div>
        <div className='stat-progress-each flex justify-between py-3 px-6 ml-4 w-full relative '>
          <div className="pr-8">
            <div className="text-black text-sm font-inter font-semibold">{item.name}</div>
            <div className="text-gray-500 text-sm font-inter font-normal limit-one-line break-all pr-8">
              {item.url}
            </div>
          </div>
          <div>
            <div className="text-black text-sm font-inter font-semibold text-center">{item.clickCount === null ? 0 : item.clickCount}</div>
            <div className="text-gray-500 text-sm font-inter font-normal">clicks</div>
          </div>
          <div className="absolute stat-progress-bar" style={{ width: (item.clickCount / clickList.totalClickSocial) * 100 + '%' }}></div>
          {/* TODO: thay đổi width theo từng click count */}
        </div>
      </div>
    })
  }

  return (
    <div className='stat_tour' id='stat'>
      <div className="flex justify-between xs:px-16 xs:bg-white xs:pt-32">
        <div className="font-inter font-semibold text-blDark text-xl leading-6 flex items-center">Stats &amp; Insights</div>
        <ul className="flex stat-toolbar">
          <li onClick={() => { setStat(7) }} className={`cursor-pointer transition-all relative text-sm font-semibold hover:text-gray-800 duration-50 font-inter pb-1 ${stat === 7 ? 'active' : ''} stat-toolbar`} >
            7 Days
          </li>
          <li onClick={() => { setStat(30) }} className={`cursor-pointer transition-all relative text-sm font-semibold hover:text-gray-800 duration-50 font-inter pb-1 ml-4  ${stat === 30 ? 'active' : ''} stat-toolbar`}>
            30 Days
          </li>
          <li onClick={() => { setStat(1000) }} className={`cursor-pointer transition-all relative text-sm font-semibold hover:text-gray-800 duration-50 font-inter pb-1 ml-4 ${stat === 1000 ? 'active' : ''} stat-toolbar`}>
            All time
          </li>
        </ul>
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div className="font-inter font-semibold text-black text-xl leading-6 mb-6">Top Links</div>
        {clickList.clickPluginsList?.length === 0 &&
          <div className='flex justify-center items-center'>
            <div className="grey-border-block w-2/5 mr-4"></div>
            <div className="text-gray-500 text-sm font-inter font-normal " style={{ userSelect: 'none' }}>No data</div>
            <div className="grey-border-block w-2/5 ml-4"></div>
          </div>}
        {renderLink()}
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div className="font-inter font-semibold text-black text-xl leading-6 mb-6">Top Socials</div>
        {clickList.clickSocialList?.filter(item => item.url).length === 0 &&
          <div className='flex justify-center items-center'>
            <div className="grey-border-block w-2/5 mr-4"></div>
            <div className="text-gray-500 text-sm font-inter font-normal " style={{ userSelect: 'none' }}>No data</div>
            <div className="grey-border-block w-2/5 ml-4"></div>
          </div>}
        {renderSocialLink()}
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6 flex justify-between items-center'>
        <div className="font-inter font-semibold text-black text-xl leading-6">Page Views</div>
        <div className='flex flex-col items-center'>
          <p className='font-inter font-semibold text-black text-xl leading-6 underline'>
            {clickList.totalClickProfile}
          </p>
          <span className='text-base font-normal'>clicks</span>
        </div>
      </div>
    </div>
  )
}
