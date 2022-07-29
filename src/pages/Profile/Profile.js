import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProfileByUserName } from '../../redux/Actions/ProfileAction'
import { useSelector } from 'react-redux'
import Svg from '../../components/Svg/Svg'
import MediaEmbed from '../../components/MediaEmbed/MediaEmbed'

export default function Profile(props) {

    const { userProfileByUserName } = useSelector(state => state.ProfileReducer)
    const { name, bio, image, listPlugins, design, showLogo, showNSFW, listSocial } = userProfileByUserName
    const dispatch = useDispatch()
    console.log(userProfileByUserName)

    const [idVisible, setIdVisible] = useState([])
    const [theme, setTheme] = useState()
    const [warning, setWarning] = useState(null)

    useEffect(() => {
        dispatch(getProfileByUserName(props.match.params.username))
    }, [])

    useEffect(()=>{
        setTheme(design)
        setWarning(showNSFW)
    },[design, showNSFW])

    const renderImg = (item) => {
        switch (item.pluginName) {
            case 'Youtube': {
                return <img className='ml-3 rounded-full' src={'/assets/Imgs/youtube.png'} alt={'Youtube'} style={{ width: '40px', height: '40px' }} />
            }

            case 'Spotify': {
                return <img className='ml-3 rounded-full' src={'/assets/Imgs/spotify.png'} alt={'Spotify'} style={{ width: '40px', height: '40px' }} />
            }

            default: {
                return <img className='ml-3 rounded-full absolute left-0' src={item.image} alt={item.name} style={{ width: '40px', height: '40px', top: '10px' }} />
            }
        }
    }

    let pageItem = {
        borderStyle: theme?.btnBdStyle,
        borderWidth: theme?.btnBdWidth,
        borderColor: theme?.btnBdColor,
        background: theme?.btnBg,
        borderRadius: theme?.btnRadius,
        boxShadow: theme?.boxShadow,
    }

    const renderSocialList = (list) => {
        return list?.map((item, index) => {
            return <div key={index} className="page-social relative mx-3 mb-3" style={{ color: theme?.color }}>
                <a className="absolute h-full inset-0 w-full" target="_blank" href={`https://${item.name}.com/${item.link}`} ></a>
                <Svg name={item.name} color={theme?.colorHeader} />
            </div>
        })
    }

    const renderLink = (list) => {
        return list?.filter(item => !item.isHide).map((item, index) => {
            if (item.isHeader) {

                return <div key={index} style={{ color: theme?.colorHeader, fontFamily: theme?.fontFamily }} className="text-center font-bold text-base mt-9 limit-one-line break-all overflow-hidden">
                    {item.title}
                </div>

            } else if (item.isPlugin) {

                return <div key={index} className="my-4 relative transition-all hover:scale-105" onClick={() => {
                    if (idVisible.indexOf(item.id) === -1) {
                        idVisible.push(item.id)
                        setIdVisible([...idVisible])
                    } else {
                        setIdVisible([...idVisible.filter(id => id !== item.id)])
                    }
                }}>
                    <div style={pageItem} className="flex justify-center items-center pill-item"></div>
                    <div style={{ minHeight: '60px' }} className="z-10 py-2 cursor-pointer flex justify-between items-center relative">
                        {renderImg(item)}
                        {/* <img className='ml-3 rounded-full' src={item.imgSrc} alt="youtube" style={{ width: '40px', height: '40px' }} /> */}
                        <span className="item-title text-center limit-one-line break-all pl-3 pr-12 " style={{ color: theme?.colorLink, fontFamily: theme?.fontFamily }}>{item.title}</span>
                        <svg style={{ transform: idVisible.indexOf(item.id) !== -1 ? 'rotate(0deg)' : 'rotate(-90deg)', position: 'relative', marginBottom: 0 }} className="embed-ind-arrow-icon embed-ind-arrow" fill={theme?.colorLink} viewBox="0 0 16 16" enableBackground="new 0 0 24 24">
                            <path d="M8.006 11c.266 0 .486-.106.695-.323l4.061-4.21A.807.807 0 0013 5.87a.855.855 0 00-.846-.87.856.856 0 00-.626.276L8.006 8.957 4.477 5.276A.87.87 0 003.852 5 .86.86 0 003 5.869c0 .235.087.428.243.599l4.062 4.215c.214.217.434.317.7.317z"></path>
                        </svg>
                    </div>
                    <div className={`embed-wrap relative ${idVisible.indexOf(item.id) !== -1 ? 'py-4' : 'py-0'} px-4 transition-all duration-200`}>
                        <MediaEmbed isAnimated={true} url={item.url} name={item.pluginName} hide={idVisible.indexOf(item.id) !== -1 ? false : true} />
                    </div>
                </div>

            } else {

                return <div key={index} className="my-4 relative transition-all hover:scale-105" >
                    <div style={pageItem} className="flex justify-center items-center pill-item"></div>
                    <a style={{ minHeight: '60px' }} href={item.url} target="_blank" className="z-10 py-3 cursor-pointer flex justify-center items-center relative">
                        {renderImg(item)}
                        <span className="item-title text-center limit-one-line break-all overflow-hidden px-4" style={{ color: theme?.colorLink, fontFamily: theme?.fontFamily }}>{item.title}</span>
                    </a>
                </div>
            }
        })
    }

    return (
        <div id='profile'>
            <div className={`${warning ? 'flex' : 'hidden'} page-overlay justify-center items-center flex-col text-center`}>
                <svg width="81" height="70" fill='none' xmlns="http://www.w3.org/2000/svg"><path d="M31.445 44.048a12.672 12.672 0 01-3.753-9.043A12.818 12.818 0 0140.53 22.159c3.517 0 6.755 1.424 9.047 3.753M53.13 37.281a12.812 12.812 0 01-10.294 10.314" stroke={theme?.colorHeader} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M18.844 56.647C12.404 51.592 6.952 44.207 3 35.002c3.992-9.247 9.482-16.672 15.962-21.768C25.4 8.138 32.829 5.371 40.53 5.371c7.745 0 15.17 2.808 21.65 7.94M70.751 22.236c2.792 3.709 5.246 7.99 7.311 12.765-7.98 18.489-22.083 29.626-37.53 29.626a32.38 32.38 0 01-10.273-1.676M72.531 3l-64 64" stroke={theme?.colorHeader} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <h1 style={{ color: theme?.colorHeader }} className="page-text-color mt-8 text-center page-overlay-title" >Sensitive Content</h1>
                <div style={{ color: theme?.colorHeader }} className="text-lg page-text-color mt-2 text-center page-overlay-text" >You must be of a legal age to
                    view this content
                </div>
                <button style={{ color: theme?.colorHeader, borderColor: theme?.colorHeader }} className="mt-8 page-text-color page-overlay-btn" onClick={() => {
                    setWarning(false)
                }}>
                    Yes, I’m 18 or older
                </button>
            </div>
            <div className=' w-full min-h-screen flex justify-center relative'>
                <div className='absolute inset-0 w-full -z-10 h-full' style={{ background: theme?.background }}></div>
                <img className={`pride-page-image ${!theme?.backgroundImg ? 'hidden' : 'block'}`} style={{ zIndex: -1 }} src={theme?.backgroundImg} alt="background" />
                <div style={{ width: '670px' }} className='mt-12 pb-32'>
                    <img style={{ width: '96px', height: '96px' }} className="display-image m-auto rounded-full" src={image} alt="D4rl1nG" />
                    <h2 style={{ fontSize: '18px', color: theme?.colorHeader, fontFamily: theme?.fontFamily }} className="font-semibold mt-4 text-center">
                        {name}
                    </h2>
                    <div className="text-base font-normal mt-3 text-center" style={{ color: theme?.colorHeader, fontFamily: theme?.fontFamily }}>
                        {bio}
                    </div>
                    <div className="flex justify-center items-center flex-wrap mt-4">
                        {renderSocialList(listSocial)}
                    </div>
                    <div className='mt-6 px-4'>
                        {renderLink(listPlugins)}
                    </div>

                    <div className={`page-logo text-center ${showLogo ? 'block' : 'hidden'}`}>
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="bl-logo-br" opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M0 0.390244C0 0.174718 0.174718 0 0.390244 0H31.6098C31.8253 0 32 0.174718 32 0.390244V31.6098C32 31.8253 31.8253 32 31.6098 32H0.390244C0.174718 32 0 31.8253 0 31.6098V0.390244ZM0.780488 0.780488V31.2195H31.2195V0.780488H0.780488ZM8.89232 9.48226V7.81313C8.89232 7.57935 8.76608 7.46247 8.51361 7.46247H7.36345V9.83291H8.51361C8.76608 9.83291 8.89232 9.71603 8.89232 9.48226ZM8.89232 13.2834V11.5441C8.89232 11.4226 8.86427 11.3384 8.80816 11.2916C8.75206 11.2355 8.65387 11.2075 8.51361 11.2075H7.36345V13.634H8.51361C8.76608 13.634 8.89232 13.5172 8.89232 13.2834ZM5.38574 6.08789H9.08869C10.2762 6.08789 10.87 6.60219 10.87 7.63078V9.20173C10.87 9.89369 10.6596 10.3285 10.2388 10.5062C10.6596 10.6651 10.87 11.0672 10.87 11.7124V13.4517C10.87 14.4896 10.2762 15.0086 9.08869 15.0086H5.38574V6.08789ZM12.0985 6.08789H14.0903V15.0086H12.0985V6.08789ZM19.0034 6.08789H17.1239C15.9363 6.08789 15.3426 6.60219 15.3426 7.63078V13.4517C15.3426 14.4896 15.9363 15.0086 17.1239 15.0086H19.0034C20.1816 15.0086 20.7707 14.4896 20.7707 13.4517V7.63078C20.7707 6.60219 20.1816 6.08789 19.0034 6.08789ZM18.765 7.91131V13.1852C18.765 13.419 18.6434 13.5359 18.4003 13.5359H17.727C17.4746 13.5359 17.3483 13.419 17.3483 13.1852V7.91131C17.3483 7.67754 17.4746 7.56065 17.727 7.56065H18.4003C18.6434 7.56065 18.765 7.67754 18.765 7.91131ZM9.95113 24.4704H7.38431V17.0225H5.39258V25.9432H9.95113V24.4704ZM12.6315 17.0225H10.6397V25.9432H12.6315V17.0225ZM17.6709 17.0225H19.5083V25.9432H17.7129L15.7633 20.5992V25.9432H13.9399V17.0225H15.7492L17.6709 22.3525V17.0225ZM24.885 21.4267L26.6803 17.0225H24.5203L22.7951 21.4267L24.5203 25.9432H26.6803L24.885 21.4267ZM20.7612 17.0225V25.9432H22.753V17.0225H20.7612ZM22.0195 13.7761C22.0195 14.4442 22.5612 14.9858 23.2293 14.9858C23.8974 14.9858 24.439 14.4442 24.439 13.7761V13.698C24.439 13.0299 23.8974 12.4883 23.2293 12.4883C22.5612 12.4883 22.0195 13.0299 22.0195 13.698V13.7761Z" fill="#0D0C22"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
