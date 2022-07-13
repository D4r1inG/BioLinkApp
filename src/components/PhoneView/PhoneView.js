import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {  getLinkDataFirstTime } from '../../redux/Actions/LinkAction'
import { socialLinkList } from '../../utils/SocialLink'
import './PhoneView.css'

export default function PhoneView() {

    const { linkList, socialList } = useSelector(state => state.LinkReducer)
    const { name, bio, image, activeTheme, themes } = useSelector(state => state.ProfileReducer)
    const dispatch = useDispatch()

    const [idVisible, setIdVisible] = useState([])
    const [theme, setTheme] = useState()

    useEffect(() => {
        dispatch(getLinkDataFirstTime())
      }, [])

    useEffect(() => {
        setTheme(themes.find(item => item.id === activeTheme))
    }, [activeTheme, themes])

    let pageItem = {
        border: theme?.btnBorder,
        background: theme?.btnBg,
        borderRadius: theme?.btnRadius,
        boxShadow: theme?.boxShadow
    }

    const renderSocialList = (list) => {
        return list.map((item, index) => {
            return <div key={index} className="page-social relative mx-3 mb-3" style={{ color: theme?.color }}>
                <a className="absolute h-full inset-0 w-full" href={`https://${item.name}.com/${item.link}`} ></a>
                {socialLinkList.byName[item.name].svg}
            </div>
        })
    }

    const renderLink = (list) => {
        return list?.filter(item => !item.isHide).map((item, index) => {
            if (item.isHeader) {

                return <div key={index} style={{ color: theme?.color }} className="text-center font-bold text-base mt-8">
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
                    <div style={pageItem} className="flex justify-center items-center pill-item"></div>
                    <div style={{ minHeight: '60px' }} className="z-10 py-3 cursor-pointer flex justify-center items-center relative">
                        {/* <img className="link-each-image" data-src="https://cdn.bio.link/biolink/icons/youtube.png" src="https://cdn.bio.link/biolink/icons/youtube.png" alt="youtube" /> */}
                        <span className="item-title text-center" style={{ color: theme?.color }}>{item.linkHeader}</span>
                        <svg style={{ transform: idVisible.indexOf(item.id) !== -1 ? 'rotate(0deg)' : 'rotate(-90deg)' }} className="embed-ind-arrow-icon embed-ind-arrow" fill="#0D0C22" viewBox="0 0 16 16" enableBackground="new 0 0 24 24">
                            <path d="M8.006 11c.266 0 .486-.106.695-.323l4.061-4.21A.807.807 0 0013 5.87a.855.855 0 00-.846-.87.856.856 0 00-.626.276L8.006 8.957 4.477 5.276A.87.87 0 003.852 5 .86.86 0 003 5.869c0 .235.087.428.243.599l4.062 4.215c.214.217.434.317.7.317z"></path>
                        </svg>
                    </div>
                    <div className="transition-all" style={{ height: idVisible.indexOf(item.id) !== -1 ? '100%' : '0' }}>
                        <div className="embed-wrap  relative">
                            <div className=" embed-wrap-preview ">
                                <iframe style={{ height: idVisible.indexOf(item.id) !== -1 ? '80px' : '0' }} className='w-full transition-all' src={item.link} title="Player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                {/*TODO: Thay đổi height theo mỗi plugin khác nhau */}
                            </div>
                        </div>
                    </div>
                </div>

            } else {

                return <div key={index} className="my-4 relative transition-all hover:scale-105" >
                    <div style={pageItem} className="flex justify-center items-center pill-item"></div>
                    <a style={{ minHeight: '60px' }} href={item.link} className="z-10 py-3 cursor-pointer flex justify-center items-center relative">
                        {/* <img className="link-each-image" data-src="https://cdn.bio.link/biolink/icons/youtube.png" src="https://cdn.bio.link/biolink/icons/youtube.png" alt="youtube" /> */}
                        <span className="item-title text-center" style={{ color: theme?.color }}>{item.linkHeader}</span>
                    </a>
                </div>
            }
        })
    }

    return (
        <div className='overflow-auto phone_view transparent-scroll'>
            <div className=' w-full min-h-full flex justify-center relative'>
                <div className='absolute inset-0 w-full -z-10 h-full' style={{ background: theme?.background }}></div>
                <div style={{ width: '90%' }} className='mt-12 pb-32'>
                    <img style={{ width: '96px', height: '96px' }} className="display-image m-auto rounded-full" src={image} alt="D4rl1nG" />
                    <h2 style={{ fontSize: '18px', color: theme?.color  }} className="font-semibold mt-4 text-center">
                        {name}
                    </h2>
                    <div className="text-base font-normal mt-3 text-center" style={{ color: theme?.color }}>
                        {bio}
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
