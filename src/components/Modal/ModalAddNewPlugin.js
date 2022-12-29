import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addNewLink, addNewPlugin } from "../../redux/Actions/LinkAction";
import MediaEmbed from "../MediaEmbed/MediaEmbed";

const youtubeURLRegex =
  /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
const spotifyURLRegex =
  /(https?:\/\/open.spotify.com\/(track|user|artist|album)\/[a-zA-Z0-9]+(\/playlist\/[a-zA-Z0-9]+|)|spotify:(track|user|artist|album):[a-zA-Z0-9]+(:playlist:[a-zA-Z0-9]+|))/;

export default function ModalAddNewPlugin() {
  const { loading, modalHeader } = useSelector((state) => state.ModalReducer);

  const [modalInput, setModalInput] = useState({
    title: "",
    url: "",
  });
  const [error, setError] = useState({
    title: "",
    url: "",
  });
  const [imgSrc, setImgSrc] = useState();
  const dispatch = useDispatch();
  const formData = useRef();

  useEffect(() => {
    switch (modalHeader) {
      case "Youtube": {
        setImgSrc("/assets/Imgs/youtube.png");
        break;
      }

      case "Spotify": {
        setImgSrc("/assets/Imgs/spotify.png");
        break;
      }

      default: {
        break;
      }
    }
  }, [modalHeader]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    handleValidate(value, name);
    setModalInput({ ...modalInput, [name]: value });
  };

  const handleValidate = (value, name) => {
    if (value !== "") {
      error.title = "";
    } else {
      error.title = "Enter your title!";
    }

    if (name === "url" && modalHeader === "Youtube") {
      let match = value.match(youtubeURLRegex);
      if (match && match[2].length === 11) {
        error.url = "";
      } else {
        error.url = "Invalid youtube URL!";
      }
    }

    if (name === "url" && modalHeader === "Spotify") {
      if (spotifyURLRegex.test(value)) {
        error.url = "";
      } else {
        error.url = "Invalid Spotify song!";
      }
    }
    setError({ ...error });
  };

  const handleSubmit = () => {
    let valid = true;

    for (let key in modalInput) {
      handleValidate(modalInput[key], key);
      if (error[key] !== "") {
        valid = false;
      }
    }

    if (valid) {
      let newLink = {
        id: Math.random().toString(),
        title: modalInput.title,
        url: modalInput.url,
        image: imgSrc,
        click: 0,
        pluginName: modalHeader,
        isHeader: false,
        ishide: false,
      };
      dispatch({
        type: "ADD_NEW_LINK",
        payload: newLink,
      });
      dispatch({
        type: "CLOSE_MODAL",
      });
    } else {
      //TODO: Show toast message
    }
  };

  const renderInput = () => {
    return (
      <form ref={formData} className="w-full flex justify-between flex-col">
        <div className="input-main-wrap overflow-hidden	rounded-sm w-full">
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white"
          />
        </div>
        <span className="text-red-400 text-sm mt-1 ml-2">{error.title}</span>

        <div className="input-main-wrap overflow-hidden	rounded-sm w-full my-2">
          <input
            onChange={handleChange}
            type="text"
            name="url"
            placeholder="URL"
            className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white"
          />
        </div>
        <span className="text-red-400 text-sm mt-1 ml-2">{error.url}</span>
      </form>
    );
  };

  const renderIframe = () => {
    if (modalInput.url !== "" && error.url === "") {
      return (
        <MediaEmbed name={modalHeader} url={modalInput.url} isAnimated={true} />
      );
    }
  };

  return (
    <div>
      <div className="flex mt-8 w-full justify-between">
        {renderInput()}
        <div className="ml-6 flex-shrink-0 relative">
          <img
            className="link-thumb-img-upload"
            alt={modalHeader}
            src={imgSrc}
          />
        </div>
      </div>

      {renderIframe()}

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
