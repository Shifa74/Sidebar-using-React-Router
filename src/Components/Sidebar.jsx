import React, { useState } from "react";
import classes from "./Sidebar.module.css";

import { FaQuora, FaImage, FaBars } from "react-icons/fa6";
import { BsFillChatRightQuoteFill } from "react-icons/bs";
import {
  FaShoppingCart,
  FaGithub,
  FaVideo,
  FaCalculator,
} from "react-icons/fa";
import { ImCalculator } from "react-icons/im";
import { NavLink } from "react-router-dom";
import Backdrop from "./Backdrop";


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItems = [
    {
      id: 1,
      path: "/image_carousel",
      name: "Image Carousel",
      icon: <FaImage />,
    },
    {
      id: 2,
      path: "/faq",
      name: "FAQ",
      icon: <FaQuora />,
    },
    {
      id: 3,
      path: "/quote_generator",
      name: "Quote Generator",
      icon: <BsFillChatRightQuoteFill />,
    },
    {
      id: 4,
      path: "/shopping_list",
      name: "Shopping List",
      icon: <FaShoppingCart />,
    },
    {
      id: 5,
      path: "/github",
      name: "Github User Search",
      icon: <FaGithub />,
    },
    {
      id: 6,
      path: "/video_player",
      name: "Video Player",
      icon: <FaVideo />,
    },
    {
      id: 7,
      path: "/bmi_calculator",
      name: "BMI Calculator",
      icon: <FaCalculator />,
    },
    {
      id: 8,
      path: "/calculator",
      name: "Calculator",
      icon: <ImCalculator />
    },
  ];

  return (
    <div className={classes.container}>
       {isOpen && <Backdrop onClick={toggle} />}
      <div
        style={{ width: isOpen ? "245px" : "60px" }}
        className={classes.sidebar}
      >
        <div className={classes["top_section"]}>
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className={classes.logo}
          >
            Logo
          </h1>
          <div
            className={classes.bars}
            style={{ marginLeft: isOpen ? "80px" : "0px" }}
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item,) => (
          <NavLink
            to={item.path}
            key={item.id}
            className={classes.link}
            // className={`link ${isActive ? 'active' : ''}`}
            // className={({isActive}) => isActive ? classes.active : "" {classes.link} }
          >
            <div style={{ fontSize: isOpen ? "20px" : "25px" }}className={classes.icon}>{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className={classes["link_text"]}
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    
    </div>
  );
};

export default Sidebar;
