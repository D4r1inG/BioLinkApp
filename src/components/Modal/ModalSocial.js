import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import Svg from '../Svg/Svg'

export default function ModalSocial() {

    const { loading } = useSelector(state => state.ModalReducer)
    const { socialList } = useSelector(state => state.LinkReducer)
    const dispatch = useDispatch()

    const [socialArr, setSocialArr] = useState()

    useEffect(() => {
        setSocialArr([...socialList])
    }, [socialList])

    const handleChange = (e) => {
        const { name, value } = e.target
        let temp = socialArr.find(item => item.name === name)
        temp.url = value
        temp.status = true
        setSocialArr(socialArr)
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE_SOCIAL_LINK',
            id
        })
    }

    const handleSubmit = () => {
        
        console.log(socialArr)
        dispatch({
            type: 'CLOSE_MODAL'
        })
    }

    const renderInput = () => {
        return <div className='overflow-y-auto w-full transparent-scroll' style={{ height: '350px' }}>
            <div>
                {socialArr?.filter(item => item.status).map((item, index) => {
                    return <div key={index} className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3">
                        <span className="modal-logo-holder social-link-dark absolute">
                            <Svg name={item.name} color={'black'} />
                        </span>
                        <input type="text" name={item.name} placeholder={socialLinkList.byName[item.name].placeHolder} defaultValue={item.url} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleChange} />
                        <div className="flex absolute right-0 top-0 modal-right-opt" >
                            <span className="modal-item-remove flex items-center justify-center cursor-pointer" onClick={() => { handleDelete(item.id) }}>
                                <svg width="12" height="12" viewBox="0  0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99166 2L2 9.99166" stroke="#6E6D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.99833 10L2 2" stroke="#6E6D7A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </span>
                        </div>
                    </div>
                })}
                <div className="mt-6 text-blGrey text-xs font-inter font-normal uppercase tracking-1 mb-3">Other links</div>
                <div>
                    {socialArr?.filter(item => !item.status).map((item, index) => {
                        return <div key={index} className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3">
                            <span className="modal-logo-holder social-link-dark absolute">
                                <Svg name={item.name} color={'black'} />
                            </span>
                            <input type="text" name={item.name} placeholder={`${socialLinkList.byName[item.name].placeHolder}`} maxLength="200" className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey" onChange={handleChange} />
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
