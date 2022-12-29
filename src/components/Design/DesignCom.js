import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  deleteTheme,
  getTheme,
  getUserProfile,
  setActiveTheme,
  updateProfile,
} from "../../redux/Actions/ProfileAction";
import DesignTheme from "./DesignTheme";

export default function DesignCom() {
  const { loading } = useSelector((state) => state.ModalReducer);
  const { isTouring } = useSelector((state) => state.UserReducer);
  const { userProfile, themes, isCreating } = useSelector(
    (state) => state.ProfileReducer
  );
  const { name, bio, image, activeDesign, showLogo } = userProfile;

  const dispatch = useDispatch();

  //TODO: Skeleton data cho mỗi theme
  //TODO: Người dùng tự tạo theme và có thể xóa được
  const [selectedImage, setSelectedImage] = useState(null);
  const [displayBtn, setDisplayBtn] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [themeDeleteId, setThemeDeleteId] = useState(-1);
  const [valueInput, setValueInput] = useState({
    name: name,
    bio: bio,
  });

  useEffect(() => {
    setValueInput({
      name: name,
      bio: bio,
    });
    setSelectedImage(image);
  }, [name, bio, image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisplayBtn(true);
    setValueInput({ ...valueInput, [name]: value });
  };

  const selectTheme = (id) => {
    dispatch({
      type: "CLOSE_CREATE_THEME",
    });
    dispatch({
      type: "SET_THEME",
      id,
    });
  };

  const handleSave = () => {
    if (selectedImage !== null && typeof selectedImage !== "string") {
      dispatch({
        type: "UPDATE_PROFILE",
        payload: {
          ...valueInput,
          image: window.URL.createObjectURL(
            new Blob([selectedImage], { type: "application/zip" })
          ),
        },
      });
    }
    dispatch({
      type: "UPDATE_PROFILE",
      payload: valueInput,
    });
    setDisplayBtn(false);
  };

  const renderThemes = () => {
    return themes.map((item, index) => {
      return (
        <div
          key={item.id}
          className="ring-0 cursor-pointer hover:scale-105 transition-all"
          onClick={() => {
            if (!isEdit) {
              selectTheme(item.id);
            }
          }}
        >
          <div
            className={`rounded-xl relative p-1 transition-all ${
              activeDesign === item.id && !isCreating
                ? "theme-select-border "
                : "theme-default-border"
            }`}
          >
            {item.userId !== null &&
            isEdit &&
            item.id !== activeDesign &&
            index > 5 ? (
              <div
                className="theme_overlay rounded-xl flex justify-center items-center"
                onClick={() => {
                  setThemeDeleteId(item.id);
                  dispatch({
                    type: "DELETE_THEME",
                    id: item.id,
                  });
                }}
              >
                <span
                  className={`${
                    loading ? "hidden" : "block"
                  } text-red-500 underline text-3xl`}
                >
                  <DeleteOutlined />
                </span>
                <span
                  className={`bl-circle-loader absolute ${
                    loading && item.id === themeDeleteId ? "block" : "hidden"
                  }`}
                ></span>
              </div>
            ) : (
              ""
            )}
            <div
              style={{ background: item.background }}
              className="theme-bg-box br-grey rounded-lg overflow-hidden flex flex-col justify-between relative"
            >
              <img
                style={{ position: "absolute" }}
                className="pride-page-image"
                src={item.backgroundImg || "1"}
                alt="background"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.classList = "hidden";
                }}
              />
              <div className="pt-10 px-4 pb-0 w-full z-10 relative">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="mb-2 w-full theme-btn"
                      style={{
                        backgroundColor: item.btnBg,
                        borderRadius: item.btnRadius,
                        borderStyle: item.btnBdStyle,
                        borderWidth: item.btnBdWidth,
                        borderColor: item.btnBdColor,
                      }}
                    ></div>
                  ))}
              </div>
            </div>
          </div>
          <div className="text-sm text-black font-inter font-normal text-center mt-2">
            {item.name}
          </div>
        </div>
      );
    });
  };

  return (
    <div id="design" className="design_tour relative">
      <div className="bg-white rounded-sm shadow-sm p-8 mb-8">
        <div className="font-inter font-semibold text-blDark text-xl leading-24 xs:text-16">
          Profile
        </div>
        <div className="mt-8">
          <div className="flex">
            <div className="w-full flex justify-between flex-col">
              <div className="input-main-wrap overflow-hidden	rounded-sm">
                <input
                  defaultValue={valueInput.name}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white"
                  onChange={handleChange}
                />
              </div>
              <div className="input-main-wrap overflow-hidden	rounded-sm">
                <input
                  defaultValue={valueInput.bio}
                  type="text"
                  maxLength="80"
                  name="bio"
                  placeholder="Bio"
                  className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex items-center ml-8">
              <div
                style={{ width: "115px", height: "115px" }}
                className="profile-img-up relative"
              >
                <div
                  className=" flex-shrink-0"
                  style={{
                    position: "relative",
                    paddingBottom: "0px",
                    transitionDuration: "0.5s",
                  }}
                >
                  <span
                    style={{
                      height: "100%",
                      width: "100%",
                      position: "absolute",
                      inset: "0px",
                    }}
                  >
                    <canvas
                      width="128"
                      height="128"
                      style={{
                        height: "100%",
                        width: "100%",
                        position: "absolute",
                        inset: "0px",
                        display: "none",
                      }}
                    ></canvas>
                    <div className="flex-shrink-0 relative">
                      <label
                        style={{ width: "115px", height: "115px" }}
                        htmlFor="desginImg"
                        className={`${
                          selectedImage === null ? "block" : "hidden"
                        } relative flex justify-center items-center rounded-sm cursor-pointer xs:mx-auto img-upload-br`}
                      >
                        <div className="text-gray-400 font-inter text-xs text-center mt-2">
                          Insert
                          <p>Picture</p>
                        </div>
                      </label>
                      <input
                        className="hidden"
                        id="desginImg"
                        type="file"
                        name="myImage"
                        onChange={(e) => {
                          setSelectedImage(e.target.files[0]);
                          setDisplayBtn(true);
                        }}
                      />
                      <svg
                        onClick={() => {
                          setSelectedImage(null);
                        }}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          selectedImage === null ? "hidden" : "block"
                        } absolute img-close-btn cursor-pointer`}
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="#0D0C22"
                          stroke="white"
                          strokeWidth="2"
                        ></circle>{" "}
                        <g clipPath="url(#clip0)">
                          <path
                            d="M15.7766 8.21582L8.86487 15.1275"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>{" "}
                          <path
                            d="M15.7823 15.1347L8.86487 8.21582"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>{" "}
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="10.3784"
                              height="10.3784"
                              fill="white"
                              transform="translate(7.13513 6.48633)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                      <img
                        style={{ width: "115px", height: "115px" }}
                        className={`${
                          selectedImage === null ? "hidden" : "block"
                        }`}
                        alt={name}
                        src={
                          typeof selectedImage !== "string"
                            ? window.URL.createObjectURL(
                                new Blob([selectedImage], {
                                  type: "application/zip",
                                })
                              )
                            : image
                        }
                      />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            className={`${
              displayBtn ? "block" : "hidden"
            } button-primary text-white rounded-sm leading-4 relative flex items-center justify-center mt-8 w-full uppercase font-bold tracking-wider`}
            onClick={() => {
              handleSave();
            }}
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

      <div className="bg-white rounded-sm shadow-sm p-8 theme_tour">
        <div className="font-inter font-semibold text-blDark text-xl leading-24 xs:text-16 flex justify-between items-center">
          <p>Themes</p>
          <p
            className={`edit_btn rounded-full text-sm underline transition-all cursor-pointer border ${
              isEdit
                ? "bg-blue-500 text-white border-white"
                : "bg-white text-black border-blue-500"
            }`}
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            <EditOutlined />
          </p>
        </div>
        <div className="mt-8">
          <div className="grid grid-cols-3 gap-6 gap-x-8">
            {renderThemes()}
            <div
              className="theme-bg-box rounded-md flex justify-center items-center cursor-pointer border-dash col-span-1"
              onClick={() => {
                dispatch({
                  type: "CREATE_THEME",
                });
              }}
            >
              <div className="font-inter font-bold text-sm text-black px-4 themeCreate_tour">
                Create your own
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCreating ? <DesignTheme /> : ""}
    </div>
  );
}
