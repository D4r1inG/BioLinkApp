import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLink, editLink } from '../../redux/Actions/LinkAction'
import MediaEmbed from '../MediaEmbed/MediaEmbed'

export default function ModalAddNewHeader() {

    const { loading, linkEdit } = useSelector(state => state.ModalReducer)
    const dispatch = useDispatch()

    const [modalInput, setModalInput] = useState()
    const [isHide, setIsHide] = useState()

    useEffect(() => {
        setIsHide(linkEdit?.isHide)
    }, [linkEdit])

    const handleChange = (e) => {
        const { name, value } = e.target
        setModalInput({ ...modalInput, [name]: value })
    }

    const handleSubmit = () => {
        let newLink = {
            ...linkEdit,
            linkHeader: modalInput?.title || linkEdit.linkHeader,
            link: modalInput?.url || linkEdit.link,
            isHide: isHide
        }

        dispatch(editLink(newLink))
    }

    const renderInput = () => {
        if (linkEdit.isHeader) {
            return <div className="input-main-wrap overflow-hidden rounded-sm w-full">
                <input defaultValue={linkEdit.linkHeader} onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
            </div>
        } else {
            return <div className="w-full flex justify-between flex-col">
                <div className="input-main-wrap overflow-hidden	rounded-sm w-full">
                    <input defaultValue={linkEdit.linkHeader} onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                </div>
                <div className="input-main-wrap overflow-hidden	rounded-sm w-full my-2">
                    <input defaultValue={linkEdit.link} onChange={handleChange} type="text" name="url" placeholder="URL" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                </div>
            </div>
        }
    }

    return (
        <div>
            <div className='flex mt-8 w-full justify-between'>
                {renderInput()}
                {linkEdit.isPlugIn ?
                    <div className='ml-6 flex-shrink-0 relative'>
                        <img src={linkEdit.imgSrc} style={{ width: '90px', height: '90px' }} alt={linkEdit.plugInName} />
                    </div> : ''}
            </div>

            {linkEdit.isPlugIn ? <MediaEmbed name={linkEdit.plugInName} url={linkEdit.link} hide={false} isAnimated={false} /> : ''}

            <div className="flex justify-between w-full mt-8">
                <div className="text-sm font-inter font-normal cursor-pointer text-red-500" onClick={() => {
                    dispatch(deleteLink(linkEdit.id))
                }}>
                    Delete
                </div>
                <div className="flex">
                    <span htmlFor={linkEdit?.id} className="text-14 font-inter font-normal cursor-pointer text-gray-500 mr-2">Hide</span>
                    <label id={linkEdit?.id} className="bl-toggle-btn relative inline-block ring-opacity-0">
                        <input type="checkbox" name='checkbox' className="bl-toggle-input" checked={isHide || false} onChange={() => {
                            setIsHide(!isHide)
                        }} />
                        <span className="bl-toggle-slider absolute cursor-pointer">
                        </span>
                    </label>
                </div>
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
