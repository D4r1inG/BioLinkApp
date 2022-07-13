import React from 'react'
import './Link.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { socialLinkList } from '../../utils/SocialLink'
import ModalAddNewLink from '../Modal/ModalAddNewLink'
import ModalAddNewHeader from '../Modal/ModalAddNewHeader'
import ModalEdit from '../Modal/ModalEdit'
import ModalSocial from '../Modal/ModalSocial'

export default function LinkCom() {

  const { linkList, socialList } = useSelector(state => state.LinkReducer)
  const dispatch = useDispatch()

  //TODO: Skeleton data

  const handleOnDragEnd = (res) => {
    if (!res.destination) return;
    const items = Array.from(linkList);
    const dragItem = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, dragItem[0]);

    dispatch({
      type: 'SET_LIST',
      linkList: items
    })
  }

  const renderLink = (list) => {
    return list?.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index} >
        {(provided) => (
          <div className='mb-4' key={index} {...provided.draggableProps} ref={provided.innerRef} onClick={() => {
            dispatch({
              type: 'MODAL_EDIT',
              modalHeader: `Edit ${item.isHeader ? 'header' : ''}`,
              linkEdit: item,
              component: <ModalEdit />
            })
          }}>
            <div className="py-6 pl-6 pr-16 bg-white shadow-sm relative cursor-pointer rounded-sm ">
              {item.isHeader
                ?
                <div className="text-center px-6 text-blDark font-inter font-bold text-base w-full">
                  {item.linkHeader}
                </div>
                :
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <div className="py-2 flex justify-between flex-col">
                      <div className="text-sm font-inter font-bold text-blDark leading-24">
                        {item.linkHeader}
                      </div>
                      <div className="text-sm font-inter font-normal overflow-hidden break-all cursor-pointer">
                        {item.link}
                      </div>
                    </div>
                  </div>
                  <div className="flex ml-4 font-inter text-blDark text-base  font-medium  xs:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2"><path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M8.09782 11.9999C8.09782 14.1332 9.84416 15.869 12.0003 15.869C14.1466 15.869 15.8929 14.1332 15.8929 11.9999C15.8929 9.85685 14.1466 8.12109 12.0003 8.12109C9.84416 8.12109 8.09782 9.85685 8.09782 11.9999ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0013 14.4125C13.3379 14.4125 14.4305 13.3265 14.4305 11.998C14.4305 10.6598 13.3379 9.57373 12.0013 9.57373C11.8009 9.57373 11.6595 9.7471 11.618 9.9431C11.427 10.8453 10.6247 11.5228 9.65982 11.5228C9.63152 11.5228 9.60718 11.5429 9.60231 11.5708C9.57795 11.7101 9.56226 11.8501 9.56226 11.998C9.56226 13.3265 10.6549 14.4125 12.0013 14.4125Z" fill="#6E6D7A"></path>
                    </svg>
                    {item.click}
                  </div>
                </div>
              }
              <div {...provided.dragHandleProps} className="drag-and-drop bg-gray-100 bg-btn-grey flex justify-center items-center absolute cursor-grab drag-handle">
                <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="2.5" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="2.5" cy="16.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="2.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="9.5" r="2.5" fill="#6E6D7A"></circle> <circle cx="10.6327" cy="16.5" r="2.5" fill="#6E6D7A"></circle></svg>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    ))
  }

  const renderSocialLink = () => {
    return socialList.map((item, index) => {
      return <div key={index} className="mr-3 mb-3 socio sociallink-each flex justify-center items-center bg-white hover:shadow-sm transform hover:scale-105 duration-50 rounded-full w-h-48 cursor-pointer last:mr-0" onClick={() => {
        dispatch({
          type: 'MODAL_ADD_NEW',
          modalHeader: 'Socials',
          component: <ModalSocial />
        })
      }}>
        <span>
          {socialLinkList.byName[item.name].svg}
        </span>
      </div>
    })
  }

  return (
    <div>
      <div className='flex '>
        <button className="bl-btn bl-btn-md bl-bg text-white rounded-md relative mr-4 uppercase tracking-wide btn-h-48 bl-bg" onClick={() => {
          dispatch({
            type: 'MODAL_ADD_NEW',
            modalHeader: 'Add',
            component: <ModalAddNewLink />
          })
        }}>
          <span className="font-bold">+ ADD LINK</span>
        </button>
        <div style={{ whiteSpace: 'nowrap' }} className="px-8 uppercase tracking-wide bg-blPrimary w-165 rounded-md select-none cursor-pointer hover:opacity-95 font-inter text-sm font-semibold text-white flex flex-col justify-center items-center text-center">
          + ADD EMBED
        </div>
      </div>

      <div className="font-inter text-gray-500 mt-6 inline-flex items-center cursor-pointer select-none hover:text-black font-semibold" onClick={() => {
        dispatch({
          type: 'MODAL_ADD_NEW',
          modalHeader: 'Add header',
          component: <ModalAddNewHeader />
        })
      }}>+ Add header</div>
      <div className='mt-8'>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='draggable'>
            {(provided) => (
              <div className='mt-6' {...provided.droppableProps} ref={provided.innerRef}>
                {linkList.length === 0 ?
                  <div className='py-12 flex justify-center items-center'>
                    <div className="grey-border-block w-2/5 mr-4"></div>
                    <div className="text-gray-500 text-sm font-inter font-normal " style={{ userSelect: 'none' }}>No data</div>
                    <div className="grey-border-block w-2/5 ml-4"></div>
                  </div> :
                  renderLink(linkList)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </div>
      <div style={{ letterSpacing: '1px' }} className="mt-12  text-gray-500 text-sm font-inter font-bold mb-4">SOCIALS</div>
      <div className="flex flex-wrap">
        {renderSocialLink()}
        <div className="cursor-pointer socio flex justify-center items-center bg-white rounded-full w-h-48 hover:shadow-sm duration-50" onClick={() => {
          dispatch({
            type: 'MODAL_ADD_NEW',
            modalHeader: 'Socials',
            component: <ModalSocial />
          })
        }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.83807 14.0625H8.22443V8.22443H14.0625V5.83807H8.22443V0H5.83807V5.83807H0V8.22443H5.83807V14.0625Z" fill="#6E6D7A"></path></svg></div>
      </div>
    </div>
  )
}
