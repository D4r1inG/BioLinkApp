import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { socialLinkList } from "../../utils/SocialLink";
import ModalAddNewLink from "../Modal/ModalAddNewLink";
import ModalAddNewHeader from "../Modal/ModalAddNewHeader";
import ModalEdit from "../Modal/ModalEdit";
import ModalSocial from "../Modal/ModalSocial";
import Svg from "../Svg/Svg";
import { updateList } from "../../redux/Actions/LinkAction";

export default function LinkCom() {
  const { linkList, socialList } = useSelector((state) => state.LinkReducer);
  const { visibleSkeleton } = useSelector((state) => state.SkeletonReducer);
  const dispatch = useDispatch();

  const handleOnDragEnd = async (res) => {
    if (!res.destination) return;
    const items = Array.from(linkList);
    const dragItem = items.splice(res.source.index, 1);
    items.splice(res.destination.index, 0, dragItem[0]);

    dispatch({
      type: "SET_LIST",
      linkList: items,
    });

    // dispatch(updateList(items))
  };

  const renderImg = (item) => {
    switch (item.pluginName) {
      case "Youtube": {
        return (
          <img
            className="w-full h-full mr-3"
            src={"/assets/Imgs/youtube.png"}
            alt={"Youtube"}
            style={{ width: "52px", height: "52px" }}
          />
        );
      }

      case "Spotify": {
        return (
          <img
            className="w-full h-full mr-3"
            src={"/assets/Imgs/spotify.png"}
            alt={"Spotify"}
            style={{ width: "52px", height: "52px" }}
          />
        );
      }

      default: {
        return (
          <img
            className="w-full h-full mr-3"
            src={item.image}
            alt={item.title}
            style={{ width: "52px", height: "52px" }}
          />
        );
      }
    }
  };

  const renderLink = (list) => {
    return visibleSkeleton
      ? Array(3)
          .fill(0)
          .map((item, index) => (
            <div
              key={index}
              className="py-6 pl-6 pr-16 bg-white shadow-sm relative cursor-pointer rounded-sm mb-4"
            >
              <div className="py-2 flex justify-between flex-col">
                <div
                  className="skeleton w-1/2 mb-1"
                  style={{ height: "15px" }}
                ></div>
                <div
                  className="skeleton w-1/2 "
                  style={{ height: "15px" }}
                ></div>
              </div>
              <div className="drag-and-drop bg-gray-100 bg-btn-grey flex justify-center items-center absolute cursor-grab drag-handle"></div>
            </div>
          ))
      : list.map((item, index) => (
          <Draggable
            key={item.id}
            draggableId={item.id.toString()}
            index={index}
          >
            {(provided) => (
              <div
                className="mb-4 relative "
                key={index}
                {...provided.draggableProps}
                ref={provided.innerRef}
                onClick={() => {
                  dispatch({
                    type: "MODAL_EDIT",
                    modalHeader: `Edit ${item.isHeader ? "header" : ""}`,
                    linkEdit: item,
                    component: <ModalEdit />,
                  });
                }}
              >
                <div
                  className={`py-6 pl-6 pr-16 bg-white shadow-sm relative cursor-pointer rounded-sm ${
                    item.isHide ? "opacity-40" : ""
                  }`}
                >
                  {item.isHeader ? (
                    <div className="text-center px-6 text-black font-inter font-bold text-base w-full limit-one-line break-all overflow-hidden">
                      {item.title}
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {item.image || item.isPlugin ? renderImg(item) : ""}
                        <div className="py-2 flex justify-between flex-col">
                          <div className="text-sm font-inter font-bold text-black leading-6 overflow-hidden break-all limit-one-line">
                            {item.title}
                          </div>
                          <div className="text-sm font-inter font-normal overflow-hidden break-all cursor-pointer limit-one-line">
                            {item.url}
                          </div>
                        </div>
                      </div>
                      <div className="flex ml-4 font-inter text-black text-base  font-medium  xs:hidden">
                        {item.isHide ? (
                          <div>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z"
                                fill="rgb(75, 85, 99)"
                              ></path>
                            </svg>
                          </div>
                        ) : (
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.5"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.09782 11.9999C8.09782 14.1332 9.84416 15.869 12.0003 15.869C14.1466 15.869 15.8929 14.1332 15.8929 11.9999C15.8929 9.85685 14.1466 8.12109 12.0003 8.12109C9.84416 8.12109 8.09782 9.85685 8.09782 11.9999ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0013 14.4125C13.3379 14.4125 14.4305 13.3265 14.4305 11.998C14.4305 10.6598 13.3379 9.57373 12.0013 9.57373C11.8009 9.57373 11.6595 9.7471 11.618 9.9431C11.427 10.8453 10.6247 11.5228 9.65982 11.5228C9.63152 11.5228 9.60718 11.5429 9.60231 11.5708C9.57795 11.7101 9.56226 11.8501 9.56226 11.998C9.56226 13.3265 10.6549 14.4125 12.0013 14.4125Z"
                              fill="#6E6D7A"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </div>
                  )}
                  <div
                    {...provided.dragHandleProps}
                    className="drag-and-drop bg-gray-100 bg-btn-grey flex justify-center items-center absolute cursor-grab drag-handle"
                  >
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#6E6D7A"></circle>{" "}
                      <circle cx="2.5" cy="9.5" r="2.5" fill="#6E6D7A"></circle>{" "}
                      <circle
                        cx="2.5"
                        cy="16.5"
                        r="2.5"
                        fill="#6E6D7A"
                      ></circle>{" "}
                      <circle
                        cx="10.6327"
                        cy="2.5"
                        r="2.5"
                        fill="#6E6D7A"
                      ></circle>{" "}
                      <circle
                        cx="10.6327"
                        cy="9.5"
                        r="2.5"
                        fill="#6E6D7A"
                      ></circle>{" "}
                      <circle
                        cx="10.6327"
                        cy="16.5"
                        r="2.5"
                        fill="#6E6D7A"
                      ></circle>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </Draggable>
        ));
  };

  const renderSocialLink = () => {
    return socialList?.map((item, index) => {
      return (
        <div
          key={index}
          className="mr-3 mb-3 socio sociallink-each flex justify-center items-center bg-white hover:shadow-sm transform hover:scale-105 duration-50 rounded-full w-h-48 cursor-pointer last:mr-0"
          onClick={() => {
            dispatch({
              type: "MODAL_ADD_NEW",
              modalHeader: "Socials",
              component: <ModalSocial />,
            });
          }}
        >
          <span>
            <Svg name={item.name} color={"black"} />
          </span>
        </div>
      );
    });
  };

  return (
    <div className="linkcomponent">
      <div className="add_link_tour">
        <div className="flex  relative">
          <button
            className="button-primary text-white rounded-md relative mr-4 uppercase tracking-wide btn-h-48 bl-bg"
            onClick={() => {
              dispatch({
                type: "MODAL_ADD_NEW",
                modalHeader: "Add",
                component: <ModalAddNewLink />,
              });
            }}
          >
            <span className="font-bold">+ ADD LINK</span>
          </button>
          <div
            style={{ whiteSpace: "nowrap" }}
            className="px-8 uppercase tracking-wide bg-blPrimary w-165 rounded-md select-none cursor-pointer hover:opacity-95 font-inter text-sm font-semibold text-white flex flex-col justify-center items-center text-center"
            onClick={() => {
              dispatch({ type: "OPEN_PLUGIN" });
            }}
          >
            + ADD EMBED
          </div>
        </div>

        <div
          className="font-inter text-gray-500 mt-6 inline-flex items-center cursor-pointer select-none hover:text-black font-semibold"
          onClick={() => {
            dispatch({
              type: "MODAL_ADD_NEW",
              modalHeader: "Add header",
              component: <ModalAddNewHeader />,
            });
          }}
        >
          + Add header
        </div>
      </div>
      <div className="mt-8 link_tour">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="draggable">
            {(provided) => (
              <div
                className="mt-6"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {linkList.length === 0 && (
                  <div className="py-12 flex justify-center items-center">
                    <div className="grey-border-block w-2/5 mr-4"></div>
                    <div
                      className="text-gray-500 text-sm font-inter font-normal "
                      style={{ userSelect: "none" }}
                    >
                      No data
                    </div>
                    <div className="grey-border-block w-2/5 ml-4"></div>
                  </div>
                )}
                {renderLink(linkList)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="social_tour">
        <div
          style={{ letterSpacing: "1px" }}
          className="mt-12  text-gray-500 text-sm font-inter font-bold mb-4"
        >
          SOCIALS
        </div>
        <div className="flex flex-wrap">
          {renderSocialLink()}
          <div
            className="cursor-pointer socio flex justify-center items-center bg-white rounded-full w-h-48 hover:shadow-sm duration-50"
            onClick={() => {
              dispatch({
                type: "MODAL_ADD_NEW",
                modalHeader: "Socials",
                component: <ModalSocial />,
              });
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.83807 14.0625H8.22443V8.22443H14.0625V5.83807H8.22443V0H5.83807V5.83807H0V8.22443H5.83807V14.0625Z"
                fill="#6E6D7A"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
