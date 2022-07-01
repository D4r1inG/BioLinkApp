import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import './PhoneView.css'

export default function PhoneView() {

    const { linkList, socialList } = useSelector(state => state.LinkReducer)
    const [idVisible, setIdVisible] = useState([])

    let pageItem = {
        border: '0px solid #FFFFFF',
        background: '#FFFFFF',
        borderRadius: '30px',
        boxShadow: '0px 6px 14px -6px rgb(24 39 75 / 12%), 0px 10px 32px -4px rgb(24 39 75 / 10%), inset 0px 0px 2px 1px rgb(24 39 75 / 5%)',
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: '0',
        top: '0',
        zIndex: '-1',
    }

    const renderSocialList = (list) => {
        return list.map((item, index) => {
            return <div key={index} className="page-social relative mx-3 mb-3">
                <a className="absolute h-full inset-0 w-full" href={`https://${item.name}.com/${item.link}`}></a>
                {socialLinkList.byName[item.name].svg}
            </div>
        })
    }

    const renderLink = (list) => {
        return list.filter(item => !item.isHide).map((item, index) => {
            console.log(item)
            if (item.isHeader) {

                return <div key={index} style={{ color: '#000' }} className="text-center font-bold text-base mt-8">
                    {item.linkHeader}
                </div>

            } else if (item.isPlugIn) {

                return <div key={index} className="my-4 relative transition-all hover:scale-105" onClick={() => {
                    if (idVisible.indexOf(item.id) === -1) {
                        idVisible.push(item.id)
                        setIdVisible([...idVisible])
                    } else {
                        setIdVisible([...idVisible.filter(id => id !== item.id)])
                    }
                }}>
                    <div style={pageItem} className="flex justify-center items-center"></div>
                    <div style={{ minHeight: '60px' }} className="z-10 py-3 cursor-pointer flex justify-center items-center relative">
                        {/* <img className="link-each-image" data-src="https://cdn.bio.link/biolink/icons/youtube.png" src="https://cdn.bio.link/biolink/icons/youtube.png" alt="youtube" /> */}
                        <span className="item-title text-center">{item.linkHeader}</span>
                        <svg style={{ transform: idVisible.indexOf(item.id) !== -1 ? 'rotate(0deg)' : 'rotate(-90deg)' }} className="embed-ind-arrow-icon embed-ind-arrow" fill="#0D0C22" viewBox="0 0 16 16" enableBackground="new 0 0 24 24">
                            <path d="M8.006 11c.266 0 .486-.106.695-.323l4.061-4.21A.807.807 0 0013 5.87a.855.855 0 00-.846-.87.856.856 0 00-.626.276L8.006 8.957 4.477 5.276A.87.87 0 003.852 5 .86.86 0 003 5.869c0 .235.087.428.243.599l4.062 4.215c.214.217.434.317.7.317z"></path>
                        </svg>
                    </div>
                    <div className="transition-all" style={{ height: idVisible.indexOf(item.id) !== -1 ? '100%' : '0' }}>
                        <div className="embed-wrap  relative">
                            <div className=" embed-wrap-preview ">
                                <iframe style={{ height: idVisible.indexOf(item.id) !== -1 ? '80px' : '0' }} className='w-full transition-all' src={item.link} title="Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                {/* Thay đổi height theo mỗi plugin khác nhau */}
                            </div>
                        </div>
                    </div>
                </div>

            } else {

                return <div key={index} className="my-4 relative transition-all hover:scale-105" >
                    <div style={pageItem} className="flex justify-center items-center"></div>
                    <a style={{ minHeight: '60px' }} href={item.link} className="z-10 py-3 cursor-pointer flex justify-center items-center relative">
                        {/* <img className="link-each-image" data-src="https://cdn.bio.link/biolink/icons/youtube.png" src="https://cdn.bio.link/biolink/icons/youtube.png" alt="youtube" /> */}
                        <span className="item-title text-center">{item.linkHeader}</span>
                    </a>
                </div>
            }
        })
    }

    return (
        <div className='overflow-auto phone_view transparent-scroll'>
            <div className=' w-full min-h-full flex justify-center relative'>
                <div className='absolute inset-0 w-full -z-10 h-full' style={{ background: '#fff' }}></div>
                <div style={{ width: '90%' }} className='mt-12 pb-32'>
                    <img style={{ width: '96px', height: '96px' }} className="display-image m-auto rounded-full" src="https://cdn.bio.link/uploads/profile_pictures/2022-06-24/uypEvJN3i7IAPaRcpuIgeBs3qlxRAeDD.png" alt="D4rl1nG" />
                    <h2 style={{ fontSize: '18px' }} className="font-semibold mt-4 text-center">
                        D4rl1nG
                    </h2>
                    <div className="text-base font-normal mt-3 text-center">
                        abc
                    </div>
                    <div className="flex justify-center items-center flex-wrap mt-4">
                        {renderSocialList(socialList)}
                    </div>
                    <div className='mt-6'>
                        {renderLink(linkList)}
                    </div>
                </div>
            </div>
        </div>
    )
}
