import React, { useEffect, useRef, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import './Modal.css'

export default function Modal() {

    const { isOpen, modalHeader, addNew, isHeader, linkEdit, isSocial } = useSelector(state => state.ModalReducer)
    const { socialList } = useSelector(state => state.LinkReducer)
    let arr = Object.keys(socialLinkList.byName).filter(item => socialList.map(link => link.name).indexOf(item) === -1)
    const dispatch = useDispatch()

    const [unUsedSocialLink, setUnUsedSocialLink] = useState(arr)
    const [socialLink, setSocialLink] = useState()
    const [modalInput, setModalInput] = useState()
    const [modalSocialInput, setModalSocialInput] = useState([])
    const [isHide, setIsHide] = useState()
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        setSocialLink([...socialList])
        setIsHide(linkEdit?.isHide)
    }, [socialList, linkEdit])

    const myModal = useRef(null)

    window.onclick = (e) => {
        if (e.target === myModal.current) {
            cancelModal()
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setModalInput({ ...modalInput, [name]: value })
    }

    const handleSocialLinkChange = (e) => {
        const { name, value } = e.target
        let temp = modalSocialInput.find(item => item.name === name)
        if (temp) {
            temp.value = value
        } else {
            modalSocialInput.push({ name, value })
        }
        setModalSocialInput(modalSocialInput)
    }

    const handleDelete = (id) => {
        let linkDelete = socialLink.find(item => item.id === id)
        unUsedSocialLink.unshift(linkDelete.name)

        setModalSocialInput(modalSocialInput.filter(item => item.name !== linkDelete.name)) //Xóa các social input value đang sửa trong trường hợp social link ý bị xóa
        setSocialLink(socialLink.filter(item => item.id !== id)) // Xóa social link 
        setUnUsedSocialLink([...unUsedSocialLink]) //Thêm social link đã xóa vào unused social link
    }

    const handleSave = () => {
        if (isSocial) {
            let newSocialArrName = modalSocialInput.map(item => item.name)
            let newSocialLinkArr = socialLink.map(item => {
                if (newSocialArrName.includes(item.name)) {
                    return {
                        name: item.name,
                        value: modalSocialInput[newSocialArrName.indexOf(item.name)].value
                    }
                } else {
                    return {
                        name: item.name,
                        value: item.link
                    }
                }
            })
            modalSocialInput.forEach(item => {
                if (newSocialLinkArr.findIndex(link => link.name === item.name) === -1) {
                    newSocialLinkArr.push(item)
                }
            })
            setUnUsedSocialLink(unUsedSocialLink.filter(item => newSocialArrName.indexOf(item) === -1)) // Xóa link social chưa dùng khi thêm mới
            setModalSocialInput([])
            dispatch({
                type: 'ADD_SOCIALLINK',
                newLinkList: newSocialLinkArr,
            })
        } else if (addNew) {
            dispatch({
                type: 'ADD_NEW_LINK',
                newLink: modalInput,
            })
        } else {
            dispatch({
                type: 'EDIT_LINK',
                newLink: modalInput,
                linkEdit: { ...linkEdit, isHide: isHide }
            })
        }
    }

    const handleOnDragEnd = (res) => {
        if (!res.destination) return;
        modalSocialInput.forEach(item => {
            if (socialLink.find(link => link.name === item.name)) {
                socialLink.find(link => link.name === item.name).link = item.value
            }
        })
        const dragItem = socialLink.splice(res.source.index, 1);
        socialLink.splice(res.destination.index, 0, dragItem[0]);
        setSocialLink(socialLink)
    }

    const cancelModal = () => {
        setModalInput()
        setSocialLink([...socialList])
        setUnUsedSocialLink(arr)
        dispatch({
            type: 'CLOSE_MODAL'
        })

    }

    const renderInput = (isHeader, isSocial) => {
        if (isSocial) {
            return <div className='overflow-y-auto w-full transparent-scroll' style={{ height: '350px' }}>
                <div>
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId='modalDroppable'>
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {socialLink.map((item, index) => {
                                        return <Draggable key={item.id} draggableId={item.id.toString()} index={index} >
                                            {(provided) => (
                                                <div key={index} {...provided.draggableProps} ref={provided.innerRef} className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3">
                                                    <span className="modal-logo-holder social-link-dark absolute">
                                                        {socialLinkList.byName[item.name].svg}
                                                    </span>
                                                    <input type="text" name={item.name} placeholder={socialLinkList.byName[item.name].placeHolder} defaultValue={item.link} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleSocialLinkChange} />
                                                    <div className="flex absolute right-0 top-0 modal-right-opt" {...provided.dragHandleProps}>
                                                        <span className="modal-item-remove flex items-center justify-center cursor-pointer" onClick={() => { handleDelete(item.id) }}>
                                                            <svg width="12" height="12" viewBox="0  0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99166 2L2 9.99166" stroke="#6E6D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.99833 10L2 2" stroke="#6E6D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                                        </span>
                                                        <span className="modal-drag-drop flex items-center justify-center cursor-grab drag-handle"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.5" cy="1.5" r="1.5" fill="#6E6D7A"></circle><circle cx="1.5" cy="6.5" r="1.5" fill="#6E6D7A"></circle><circle cx="1.5" cy="11.5" r="1.5" fill="#6E6D7A"></circle><circle cx="6.5" cy="1.5" r="1.5" fill="#6E6D7A"></circle><circle cx="6.5" cy="6.5" r="1.5" fill="#6E6D7A"></circle><circle cx="6.5" cy="11.5" r="1.5" fill="#6E6D7A"></circle></svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div className="mt-6 text-blGrey text-xs font-inter font-normal uppercase tracking-1 mb-3">Other links</div>
                    <div>
                        {unUsedSocialLink.map((item, index) => {
                            return <div key={index} className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3">
                                <span className="modal-logo-holder social-link-dark absolute">
                                    {socialLinkList.byName[item].svg}
                                </span>
                                <input type="text" name={item} placeholder={`${socialLinkList.byName[item].placeHolder}`} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleSocialLinkChange} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        } else if (isHeader) {
            return <div className="input-main-wrap overflow-hidden rounded-sm w-full">
                <input defaultValue={addNew ? '' : linkEdit?.linkHeader} onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
            </div>
        } else {
            return <div className="w-full flex justify-between flex-col">
                <div className="input-main-wrap overflow-hidden	rounded-sm w-full">
                    <input defaultValue={addNew ? '' : linkEdit?.linkHeader} onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                </div>
                <div className="input-main-wrap overflow-hidden	rounded-sm w-full mt-2">
                    <input defaultValue={addNew ? '' : linkEdit?.link} onChange={handleChange} type="text" name="url" placeholder="URL" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                </div>
            </div>
        }
    }


    return (
        <div className={`${isOpen ? '' : 'hidden'} fixed w-screen z-50 h-screen inset-0  transition-all`} style={{ background: 'rgba(0, 0, 0, 0.8)' }} >
            <div ref={myModal} className='flex justify-center items-center h-full w-full'>
                <div className='modal-content overflow-hidden relative'>
                    <div className='modal-header border-b flex justify-between'>
                        <div className='flex items-center'>
                            <div className="font-inter font-semibold text-black text-base py-4" >{modalHeader}</div>
                        </div>
                        <div className="bl-modal-close cursor-pointer flex items-center" onClick={() => {
                            cancelModal()
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3222 2.6665L2.66663 13.3221" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.3311 13.3332L2.66663 2.6665" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex mt-8 w-full justify-between">
                        {renderInput(isHeader, isSocial)}

                        {addNew && !isHeader ?
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
                            : ''
                        }

                    </div>

                    {addNew || isSocial ? '' :
                        <div className="flex justify-between w-full mt-8">
                            <div className="text-sm font-inter font-normal cursor-pointer text-red-500" onClick={() => {
                                dispatch({
                                    type: 'DELETE_LINK',
                                    id: linkEdit.id
                                })
                                dispatch({
                                    type: 'CLOSE_MODAL'
                                })
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
                    }

                    <div className='absolute left-0 bottom-0 w-full'>
                        <button onClick={() => {
                            dispatch({
                                type: 'CLOSE_MODAL'
                            })
                            setModalInput()
                            handleSave()
                        }} className="bl-btn bl-btn-md bl-bg font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                            <span className="">{isHeader ? 'Add header' : 'Save'}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
