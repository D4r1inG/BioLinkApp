import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewLink } from '../../redux/Actions/LinkAction'

export default function ModalAddNewHeader() {


    const { loading } = useSelector(state => state.ModalReducer)
    const [modalInput, setModalInput] = useState()
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { name, value } = e.target
        setModalInput({ ...modalInput, [name]: value })
    }

    const handleSubmit = () => {
        let newLink = {
            linkHeader: modalInput.title,
            link: '',
            click: 0,
            isHeader: true,
            isHide: false,
            isPlugIn: false,
            imgSrc: '',
            plugInName: ''
        }
        dispatch(addNewLink(newLink))
    }

    const renderInput = () => {
        return <div className="input-main-wrap overflow-hidden rounded-sm w-full">
            <input onChange={handleChange} type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
        </div>
    }

    return (
        <div>
            <div className='flex mt-8 w-full justify-between'>
                {renderInput()}
            </div>

            <div className='absolute left-0 bottom-0 w-full'>
                <button onClick={() => { handleSubmit() }} className="button-primary font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                    <span className={`${loading ? 'hidden' : 'block'}`}>Add header</span>
                    <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span>
                </button>
            </div>
        </div>

    )
}
