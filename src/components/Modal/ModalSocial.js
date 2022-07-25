import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import Svg from '../Svg/Svg'

export default function ModalSocial() {

    const { loading } = useSelector(state => state.ModalReducer)
    const { socialList } = useSelector(state => state.LinkReducer)
    const dispatch = useDispatch()
    let arr = Object.keys(socialLinkList.byName).filter(item => socialList.map(link => link.name).indexOf(item) === -1)

    const [modalInput, setModalInput] = useState([])
    const [socialLink, setSocialLink] = useState()
    const [unUsedSocialLink, setUnUsedSocialLink] = useState(arr)

    useEffect(() => {
        setSocialLink([...socialList])
    }, [socialList])

    const handleChange = (e) => {
        const { name, value } = e.target
        let temp = modalInput.find(item => item.name === name)
        if (temp) {
            temp.value = value
        } else {
            modalInput.push({ name, value })
        }
        setModalInput(modalInput)
    }

    const handleOnDragEnd = (res) => {
        if (!res.destination) return;
        modalInput.forEach(item => {
            if (socialLink.find(link => link.name === item.name)) {
                socialLink.find(link => link.name === item.name).link = item.value
            }
        })
        const dragItem = socialLink.splice(res.source.index, 1);
        socialLink.splice(res.destination.index, 0, dragItem[0]);
        setSocialLink(socialLink)
    }

    const handleDelete = (id) => {
        let linkDelete = socialLink.find(item => item.id === id)
        unUsedSocialLink.unshift(linkDelete.name)

        setModalInput(modalInput.filter(item => item.name !== linkDelete.name)) //Xóa các social input value đang sửa trong trường hợp social link ý bị xóa
        setSocialLink(socialLink.filter(item => item.id !== id)) // Xóa social link 
        setUnUsedSocialLink([...unUsedSocialLink]) //Thêm social link đã xóa vào unused social link
    }

    const handleSubmit = () => {
        let newSocialArrName = modalInput.map(item => item.name)
        let newSocialLinkArr = socialLink.map(item => {
            if (newSocialArrName.includes(item.name)) {
                return {
                    name: item.name,
                    value: modalInput[newSocialArrName.indexOf(item.name)].value
                }
            } else {
                return {
                    name: item.name,
                    value: item.link
                }
            }
        })
        modalInput.forEach(item => {
            if (newSocialLinkArr.findIndex(link => link.name === item.name) === -1) {
                newSocialLinkArr.push(item)
            }
        })
        setUnUsedSocialLink(unUsedSocialLink.filter(item => newSocialArrName.indexOf(item) === -1)) // Xóa link social chưa dùng khi thêm mới
        dispatch({
            type: 'ADD_SOCIALLINK',
            newLinkList: newSocialLinkArr,
        })
        dispatch({
            type: 'CLOSE_MODAL'
        })
    }

    const renderInput = () => {
        return <div className='overflow-y-auto w-full transparent-scroll' style={{ height: '350px' }}>
            <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId='modalDroppable'>
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {socialLink?.map((item, index) => {
                                    return <Draggable key={item.id} draggableId={item.id.toString()} index={index} >
                                        {(provided) => (
                                            <div key={index} {...provided.draggableProps} ref={provided.innerRef} className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3">
                                                <span className="modal-logo-holder social-link-dark absolute">
                                                    <Svg name={item.name} color={'black'} />
                                                </span>
                                                <input type="text" name={item.name} placeholder={socialLinkList.byName[item.name].placeHolder} defaultValue={item.link} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleChange} />
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
                                <Svg name={item} color={'black'} />
                            </span>
                            <input type="text" name={item} placeholder={`${socialLinkList.byName[item].placeHolder}`} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleChange} />
                        </div>
                    })}
                </div>
            </div>
        </div>
    }

    return (
        <div>
            <div className='flex mt-8 w-full justify-between'>
                {renderInput()}
            </div>

            <div className='absolute left-0 bottom-0 w-full'>
                <button onClick={() => { handleSubmit() }} className="button-primary font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                    <span className={`${loading ? 'hidden' : 'block'}`}>Save</span>
                    <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span>
                </button>
            </div>
        </div>

    )
}
