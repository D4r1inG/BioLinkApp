import React, { useRef, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import './Modal.css'

export default function Modal() {

    const { isOpen, modalHeader, addNew, isHeader, linkEdit, isSocial } = useSelector(state => state.ModalReducer)
    const { socialList } = useSelector(state => state.LinkReducer)
    const dispatch = useDispatch()

    const [unUsedSocialLink, setUnUsedSocialLink] = useState(Object.keys(socialLinkList.byName).filter(item => socialList.map(link => link.name).indexOf(item) === -1))
    const [modalInput, setModalInput] = useState()
    const [modalSocialInput, setModalSocialInput] = useState([])

    const myModal = useRef(null)

    window.onclick = (e) => {
        if (e.target === myModal.current) {
            setModalInput()
            dispatch({
                type: 'CLOSE_MODAL'
            })
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
        setModalSocialInput([...modalSocialInput])
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_SOCIAL_LINK',
            id
        })
        let linkDelete = socialList.find(item => item.id === id)
        setModalSocialInput(modalSocialInput.filter(item => item.name !== linkDelete.name))
        
        unUsedSocialLink.unshift(linkDelete.name)
        setUnUsedSocialLink([...unUsedSocialLink])
    }

    const handleSave = () => {
        if (isSocial) {
            let newSocialArr = modalSocialInput.map(item => item.name)
            setUnUsedSocialLink(unUsedSocialLink.filter(item => newSocialArr.indexOf(item) === -1))
            dispatch({
                type: 'ADD_SOCIALLINK',
                newLinkList: modalSocialInput,
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
                linkEdit: linkEdit
            })
        }
    }

    const handleOnDragEnd = (res) => {
        if (!res.destination) return;
        dispatch({
            type: 'ADD_SOCIALLINK',
            newLinkList: modalSocialInput,
        })
        const items = Array.from(socialList);
        const dragItem = items.splice(res.source.index, 1);
        items.splice(res.destination.index, 0, dragItem[0]);

        dispatch({
            type: 'SET_SOCIAL_LIST',
            newList: items
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
                                    {socialList.map((item, index) => {
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
                            setModalInput()
                            dispatch({
                                type: 'CLOSE_MODAL'
                            })
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3222 2.6665L2.66663 13.3221" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.3311 13.3332L2.66663 2.6665" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex mt-8 w-full">
                        {renderInput(isHeader, isSocial)}
                    </div>
                    <div className='absolute left-0 bottom-0 w-full'>
                        <button onClick={() => {
                            setModalInput()
                            dispatch({
                                type: 'CLOSE_MODAL'
                            })
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
