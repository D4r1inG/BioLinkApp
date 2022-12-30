import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { history } from "../../App";
import Tour from "./Tour";

const steps = [
  {
    selector: "",
    content:
      "Trang web được thực hiện bởi Sieu nhan cuong phong! Nếu bạn thấy thú vị đừng ngần ngại cho những con người ở đáy xã hội này 1 lời khen nha.",
    path: "/",
  },
  {
    selector: "",
    content:
      "Chào cậu! mình là Khanh Noi (/◕ヮ◕)/ - hướng dẫn viên tại Biolink! Mình sẽ hướng dẫn cậu đi thăm quan và giới thiệu cho cậu hiểu rõ hơn về Biolink nhé! Được rồi đi thôi!",
    path: "/",
  },
  {
    selector: "dashboard_tour",
    content: "Để truy cập Dashboard hãy bấm vào nút nèy nha!",
    path: "/",
  },
  {
    selector: "navigation",
    content:
      "Đây là nơi cậu có thể di chuyển giữa các thành phần trên trang web, gồm 4 phần chính: Link, Design, Stat và Setting nha.",
    path: "/dashboard/link",
  },
  {
    selector: "add_link_tour",
    content: "Trong Link, cậu có thể thêm link, plugin hoặc header mới.",
    path: "/dashboard/link",
  },
  {
    selector: "link_tour",
    content: "Các link của cậu sẽ được hiển thị ở đây.",
    path: "/dashboard/link",
  },
  {
    selector: "social_tour",
    content: "Cậu cũng có thể quản lý các social link của mình.",
    path: "/dashboard/link",
  },
  {
    selector: "design_tour",
    content:
      "Trong phần Design, cậu có thể sửa tên, mô tả và thay ảnh đại diện của mình.",
    path: "/dashboard/design",
  },
  {
    selector: "theme_tour",
    content: "Hoặc lựa chọn theme theo sở thích.",
    path: "/dashboard/design",
  },
  {
    selector: "themeCreate_tour",
    content:
      "Tạo mới theme cũng là một sự lựa chọn không tồi (Khanh Noi recommend cậu tạo thật nhiều theme nha (๑•̀ㅂ•́)ﻭ✧).",
    path: "/dashboard/design",
  },
  {
    selector: "stat_tour",
    content:
      "Số lượt click của các link cũng như social link sẽ được hiển thị trong phần Stat.",
    path: "/dashboard/stat",
  },
  {
    selector: "setting_tour",
    content: "Phần setting sẽ cho phép cậu cài đặt tài khoản của mình.",
    path: "/dashboard/setting",
  },
  {
    selector: "showlogo_tour",
    content: "Tích vào đây để giấu logo của web chúng mình.",
    path: "/dashboard/setting",
  },
  {
    selector: "warning_tour",
    content:
      "Cậu có thể cảnh báo nội dung nhạy cảm cho người xem trước khi vào profile của mình ( ͡° ͜ʖ ͡°).",
    path: "/dashboard/setting",
  },
  {
    selector: "phone_tour",
    content: "Các thay đổi của cậu sẽ được hiển thị tại đây.",
    path: "/dashboard/link",
  },
  {
    selector: "profile_tour",
    content:
      "Đây là nơi cậu có thể xem profile của mình trên toàn màn hình (；･`д･´).",
    path: "/dashboard/link",
  },
  {
    selector: "instruc_tour",
    content: "Nên nhớ là Khanh Noi luôn ở đây nha (๑•̀ㅂ•́)ﻭ✧ <3.",
    path: "/dashboard/link",
    quote:
      "Em bảo tôi nói xấu sau lưng ư? Xin lỗi, tôi còn chưa biết đâu là lưng em.",
  },
  {
    selector: "",
    content:
      "Vậy là chuyến thăm quan được thực hiện bởi Khanh Noi đến đây kết thúc rùi (;´༎ຶД༎ຶ`) Noi hy vọng cậu sẽ có một khoảng thời gian vui vẻ khi trải nghiệm Biolink được thực hiện bởi sieu nhan cuong phong! nha.",
    path: "/",
  },
];

export default function WebTour() {
  const { isTouring } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  return (
    <>
      {isTouring ? (
        <Tour
          steps={steps}
          onRequestClose={() => {
            history.push("/");
            dispatch({
              type: "TOGGLE_TOUR",
            });
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}
