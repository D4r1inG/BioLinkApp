import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { addNewLink } from '../../redux/Actions/LinkAction'

const youtubeURLRegex = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
const spotifyURLRegex = /^(https:\/\/open.spotify.com\/user\/spotify\/playlist\/track\/|spotify:user:spotify:playlist:)([a-zA-Z0-9]+)(.*)$/gm


export default function ModalAddNewPlugin() {

    const { loading, modalHeader } = useSelector(state => state.ModalReducer)
    const [modalInput, setModalInput] = useState({
        url: '',
        title: '',
        urlEmbed: ''
    })
    const [imgSrc, setImgSrc] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        switch (modalHeader) {
            case 'Youtube': {
                setImgSrc("/assets/Imgs/youtube.png")
                break;
            }

            case 'Spotify': {
                setImgSrc("/assets/Imgs/spotify.png")
                break
            }

            default: {
                break
            }
        }
    }, [modalHeader])

    const handleChange = (e) => {
        const { name, value } = e.target
        let newModalInput = { ...modalInput, [name]: value }

        if (name === 'url' && modalHeader === 'Youtube') {
            let match = value.match(youtubeURLRegex);
            if (match && match[2].length === 11) {
                newModalInput.urlEmbed = match[2]
            } else {
                //validate
            }
        }

        if (name === 'url' && modalHeader === 'Spotify') {
            // if (value.test(spotifyURLRegex)) {
                newModalInput.urlEmbed = value.replace('https://open.spotify.com/', 'https://open.spotify.com/embed/')
            // }
        }

        setModalInput({ ...newModalInput })
    }

    console.log(modalInput)
    
    const handleSubmit = () => {
        let newLink = {
            linkHeader: modalInput.title,
            link: modalInput.url,
            click: 0,
            isHeader: false,
            isHide: false,
            isPlugIn: true,
            imgSrc: imgSrc
        }
        dispatch(addNewLink(newLink))
    }

    const renderInput = () => {
        return <div className="w-full flex justify-between flex-col">
            <div className="input-main-wrap overflow-hidden	rounded-sm w-full">
                <input onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
            </div>
            <div className="input-main-wrap overflow-hidden	rounded-sm w-full mt-2">
                <input onChange={handleChange} type="text" name="url" placeholder="URL" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
            </div>
        </div>
    }


    const renderIframe = () => {
        switch (modalHeader) {
            case 'Youtube': {
                return <iframe className={`${modalInput?.url ? 'block' : 'hidden'}`} width="100%" height="217" src={`https://www.youtube.com/embed/${modalInput?.urlEmbed}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            }

            case 'Spotify': {
                return <iframe  className={`${modalInput?.url ? 'block' : 'hidden'} mt-4`} height="80" width="100%" src={modalInput.urlEmbed} type="application/pdf" frameBorder="0" ></iframe>
            }

            default: {
                break
            }
        }
    }

    return (
        <div>
            <div className='flex mt-8 w-full justify-between'>
                {renderInput()}
                <div className='ml-6 flex-shrink-0 relative'>
                    <img className={`link-thumb-img-upload`} alt="not fount" src={imgSrc} />
                </div>
            </div>

            <div className='mt-4'>
                {renderIframe()}
            </div>

            <div className='absolute left-0 bottom-0 w-full'>
                <button onClick={() => { handleSubmit() }} className="bl-btn bl-btn-md bl-bg font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                    <span className={`${loading ? 'hidden' : 'block'}`}>Save</span>
                    <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span>
                </button>
            </div>
        </div>
    )
}
