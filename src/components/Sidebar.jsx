import React from 'react';
import { SidebarData } from '../helpers/SidebarData';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebar-list">
          {console.log(SidebarData)}
          {/* {SidebarData.map((val, key) => {
            console.log(val);
            // return (
            //   <li
            //     key={key}
            //     onClick={() => {
            //       window.location.pathname = val.link;
            //     }}
            //   >
            //     <div>{val.icon}</div>
            //     <div>{val.title}</div>
            //   </li>
            // );
          })} */}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
