import React from "react";
import Sidebar from "../Components/Sidebar";
import classes from './RootLayout.module.css'; // Create a new CSS module for RootLayout
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
      <div className={classes.rootLayout}>
         <Sidebar />
         <main className={classes.mainContent}>
            <Outlet />
         </main>
      </div>
    );
}

export default RootLayout;
