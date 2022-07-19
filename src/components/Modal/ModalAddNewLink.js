import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewLink } from '../../redux/Actions/LinkAction'

export default function ModalAddNewLink() {

    const {loading } = useSelector(state => state.ModalReducer)
    const [modalInput, setModalInput] = useState()
    const [selectedImage, setSelectedImage] = useState(null)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setModalInput({ ...modalInput, [name]: value })
    }

    const handleSubmit = () => {
        let newLink = {
            linkHeader: modalInput?.title,
            link: modalInput.url || '',
            click: 0,
            isHeader: modalInput.url ? false : true,
            isHide: false,
            isPlugIn: false,
            imgSrc: '',
            plugInName: ''
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

    return (
        <div>
            <div className='flex mt-8 w-full justify-between'>
                {renderInput()}
                <div className='ml-6 flex-shrink-0 relative'>
                    <label htmlFor='img-input' className={`${selectedImage === null ? 'block' : 'hidden'} link-thumb-img-upload relative flex justify-center items-center rounded-sm cursor-pointer xs:mx-auto img-upload-br`}>
                        <div className="text-gray-400 font-inter text-xs text-center mt-2">
                            Insert
                            <p>Picture</p>
                        </div>
                    </label>
                    <input className='hidden' id='img-input' type='file' name='myImage' onChange={(e) => {
                        setSelectedImage(e.target.files[0]);
                        console.log(window.URL.createObjectURL(new Blob([e.target.files[0]], { type: "application/zip" })))
                        console.log(e.target.files[0])
                    }} />
                    <svg onClick={() => { setSelectedImage(null) }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${selectedImage === null ? 'hidden' : 'block'} absolute img-close-btn cursor-pointer`}><circle cx="12" cy="12" r="11" fill="#0D0C22" stroke="white" strokeWidth="2"></circle> <g clipPath="url(#clip0)"><path d="M15.7766 8.21582L8.86487 15.1275" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M15.7823 15.1347L8.86487 8.21582" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></g> <defs><clipPath id="clip0"><rect width="10.3784" height="10.3784" fill="white" transform="translate(7.13513 6.48633)"></rect></clipPath></defs></svg>
                    <img className={`${selectedImage === null ? 'hidden' : 'block'} link-thumb-img-upload`} alt="not fount" src={window.URL.createObjectURL(new Blob([selectedImage], { type: "application/zip" }))} />
                </div>
            </div>

            <div className='absolute left-0 bottom-0 w-full'>
                <button onClick={() => { handleSubmit()}} className="bl-btn bl-btn-md bl-bg font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                    <span className={`${loading ? 'hidden' : 'block'}`}>Save</span>
                    <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span>
                </button>
            </div>
        </div>

    )
}
