import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSocialList } from "../../redux/Actions/LinkAction";
import { socialLinkList } from "../../utils/SocialLink";
import Svg from "../Svg/Svg";
import SocialRow from "./SocialRow";

export default function ModalSocial() {
  const { loading } = useSelector((state) => state.ModalReducer);
  const { socialList, unActiveSocial } = useSelector(
    (state) => state.LinkReducer
  );
  const dispatch = useDispatch();

  const [socialArr, setSocialArr] = useState({
    activeList: socialList,
    unActiveList: unActiveSocial,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUnactive = socialArr.unActiveList.map((item) =>
      item.name === name ? { ...item, url: value } : item
    );
    setSocialArr({ ...socialArr, unActiveList: newUnactive });
  };

  const handleDelete = (item) => {
    let newActiveList = socialArr.activeList.filter(
      (singleItem) => singleItem.id !== item.id
    );
    setSocialArr({
      ...socialArr,
      unActiveList: [...socialArr.unActiveList, { ...item, url: "" }],
      activeList: newActiveList,
    });
  };

  const handleSubmit = () => {
    dispatch({
      type: "SET_SOCIAL_LIST",
      newList: socialArr,
    });
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  const renderInput = () => {
    return (
      <div
        className="overflow-y-auto w-full transparent-scroll"
        style={{ height: "350px" }}
      >
        <div>
          {socialArr.activeList?.map((item, index) => {
            return (
              <SocialRow
                key={item.id}
                item={item}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            );
          })}
          <div className="mt-6 text-blGrey text-xs font-inter font-normal uppercase tracking-1 mb-3">
            Other links
          </div>
          <div>
            {socialArr.unActiveList?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative input-main-wrap-with-border rounded-md overflow-hidden mb-3"
                >
                  <span className="modal-logo-holder social-link-dark absolute">
                    <Svg name={item.name} color={"black"} />
                  </span>
                  <input
                    type="text"
                    name={item.name}
                    placeholder={`${
                      socialLinkList.byName[item.name].placeHolder
                    }`}
                    maxLength="200"
                    className="modal-input-box w-full py-2 font-normal font-inter placeholder-grey"
                    onChange={handleChange}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex mt-8 w-full justify-between">{renderInput()}</div>

      <div className="absolute left-0 bottom-0 w-full">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="button-primary font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider"
        >
          <span className={`${loading ? "hidden" : "block"}`}>Save</span>
          <span
            className={`bl-circle-loader absolute ${
              !loading ? "hidden" : "block"
            }`}
          ></span>
        </button>
      </div>
    </div>
  );
}
