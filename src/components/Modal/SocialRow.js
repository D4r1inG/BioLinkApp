import React from "react";
import { useDispatch } from "react-redux";
import { socialLinkList } from "../../utils/SocialLink";
import Svg from "../Svg/Svg";

const SocialRow = ({ item, handleChange, handleDelete }) => {
  return (
    <div
      key={item.id}
      className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3"
    >
      <span className="modal-logo-holder social-link-dark absolute">
        <Svg name={item.name} color={"black"} />
      </span>
      <input
        type="text"
        name={item.name}
        placeholder={socialLinkList.byName[item.name].placeHolder}
        defaultValue={item.url}
        maxLength="200"
        className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey"
        onChange={handleChange}
      />
      <div className="flex absolute right-0 top-0 modal-right-opt">
        <span
          className="modal-item-remove flex items-center justify-center cursor-pointer"
          onClick={() => {
            handleDelete(item);
          }}
        >
          <svg
            width="12"
            height="12"
            viewBox="0  0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99166 2L2 9.99166"
              stroke="#6E6D7A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M9.99833 10L2 2"
              stroke="#6E6D7A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SocialRow;
