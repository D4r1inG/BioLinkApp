import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import './Stat.css'

export default function Stat() {

  const { linkList, socialList } = useSelector(state => state.LinkReducer)
  const [stat, setStat] = useState(true)

  const renderLink = useMemo(() => {
    return linkList.filter(item => !item.isHeader).map((item, index) => {
      return <div key={index} className='flex mb-4 last:mb-0' >
        <div className="font-inter font-bold text-xl text-gray-400 flex items-center flex-shrink-0">{index + 1}</div>
        <div className='stat-progress-each flex justify-between py-3 px-6 ml-4 w-full relative '>
          <div className="pr-8">
            <div className="text-black text-sm font-inter font-semibold limit-one-line break-all">{item.linkHeader}</div>
            <div className="text-gray-500 text-sm font-inter font-normal limit-one-line break-all pr-8">
              {item.link}
            </div>
          </div>
          <div>
            <div className="text-black text-sm font-inter font-semibold text-center">{item.click}</div>
            <div className="text-gray-500 text-sm font-inter font-normal">clicks</div>
          </div>
          <div className="absolute stat-progress-bar" style={{ width: '70%' }}></div>
          {/* TODO: thay đổi width theo từng click count */}
        </div>
      </div>
    })
  }, [linkList])

  const renderSocialLink = useMemo(() => {
    return socialList.map((item, index) => {
      return <div key={index} className='flex mb-4 last:mb-0' >
        <div className="font-inter font-bold text-xl text-gray-400 flex items-center flex-shrink-0">{index + 1}</div>
        <div className='stat-progress-each flex justify-between py-3 px-6 ml-4 w-full relative '>
          <div className="pr-8">
            <div className="text-black text-sm font-inter font-semibold">{item.name}</div>
            <div className="text-gray-500 text-sm font-inter font-normal limit-one-line break-all pr-8">
              {item.link}
            </div>
          </div>
          <div>
            <div className="text-black text-sm font-inter font-semibold text-center">{item.click}</div>
            <div className="text-gray-500 text-sm font-inter font-normal">clicks</div>
          </div>
          <div className="absolute stat-progress-bar" style={{ width: '50%' }}></div>
          {/* TODO: thay đổi width theo từng click count */}
        </div>
      </div>
    })
  }, [socialList])

  return (
    <div className='stat_tour'>
      <div className="flex justify-between xs:px-16 xs:bg-white xs:pt-32">
        <div className="font-inter font-semibold text-blDark text-xl leading-6 flex items-center">Stats &amp; Insights</div>
        <ul className="flex stat-toolbar">
          <li onClick={() => { setStat(!stat) }} className={`cursor-pointer transition-all relative text-sm font-semibold hover:text-gray-800 duration-50 font-inter pb-1 ${stat ? 'active' : ''} stat-toolbar`}>
            30 Days
          </li>
          <li onClick={() => { setStat(!stat) }} className={`cursor-pointer transition-all relative text-sm font-semibold hover:text-gray-800 duration-50 font-inter pb-1 ml-4 ${!stat ? 'active' : ''} stat-toolbar`}>
            All time
          </li>
        </ul>
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div className="font-inter font-semibold text-black text-xl leading-6 mb-6">Top Links</div>
        {linkList.length === 0 &&
          <div className='flex justify-center items-center'>
            <div className="grey-border-block w-2/5 mr-4"></div>
            <div className="text-gray-500 text-sm font-inter font-normal " style={{ userSelect: 'none' }}>No data</div>
            <div className="grey-border-block w-2/5 ml-4"></div>
          </div>}
        {renderLink}
      </div>

      <div className='bg-white round-sm shadow-sm p-8 mt-6'>
        <div className="font-inter font-semibold text-black text-xl leading-6 mb-6">Top Socials</div>
        {socialList.length === 0 &&
          <div className='flex justify-center items-center'>
            <div className="grey-border-block w-2/5 mr-4"></div>
            <div className="text-gray-500 text-sm font-inter font-normal " style={{ userSelect: 'none' }}>No data</div>
            <div className="grey-border-block w-2/5 ml-4"></div>
          </div>}
        {renderSocialLink}
      </div>
    </div>
  )
}
