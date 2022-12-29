import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

let myList = [
  {
    id: 0,
    title: "Link",
    iEle: <i className="fa-solid fa-link"></i>,
    path: "/dashboard/link",
  },
  {
    id: 1,
    title: "Design",
    iEle: <i className="fa-solid fa-pen-ruler"></i>,
    path: "/dashboard/design",
  },
  {
    id: 2,
    title: "Stat",
    iEle: <i className="fa-solid fa-file-lines"></i>,
    path: "/dashboard/stat",
  },
  {
    id: 3,
    title: "Settings",
    iEle: <i className="fa-solid fa-gear"></i>,
    path: "/dashboard/setting",
  },
];

export default function Navigation(props) {
  return (
    <div className="navigation">
      <ul>
        {myList.map((item, index) => {
          return (
            <li
              key={index}
              className={`list ${
                props.match.path === item.path ? "active" : ""
              }`}
            >
              <NavLink to={item.path}>
                <span>
                  <span className="icon">{item.iEle}</span>
                  <span className="title">{item.title}</span>
                </span>
              </NavLink>
            </li>
          );
        })}

        <div className="indicator"></div>
      </ul>
    </div>
  );
}
