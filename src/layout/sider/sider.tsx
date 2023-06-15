// import React from 'react'

// import { Layout } from 'antd';

// const { Sider } = Layout;

// const SiderComponent = () => {
//     return (
//         <Sider
//             className={`${iscollapsed ? "un-collapsed" : "collapsed"}`}
//             trigger={null}
//             collapsible
//             collapsed={iscollapsed}
//             style={{ backgroundColor: iscollapsed ? "#65cdf0" : "#FFFAFC" }}
//             onClick={() => setLocation(window.location.pathname)}
//         >
//             <div className="logo" style={{ margin: "15px" }}>
//                 <img src={iscollapsed ? LogoIcon : LogoImg} alt="logo" />
//             </div>
//             <div className="sidebar-search-wrapper">
//                 <input className="search-inputs" type="text" placeholder="Type here" />
//                 <button className="search-btn">
//                     <img src={SearchImg} alt="searchImg" />
//                 </button>
//             </div>
//             {/* list items */}
//             <ul className="list">
//                 {getSidebarMenues(role, permissions).map((e: any) => {
//                     const Icon = e.icon;
//                     return (
//                         <Link
//                             key={e.id}
//                             to={e.link}
//                             onClick={() => {
//                                 setTitle(e.label);
//                                 setIsShowSubNav(true);
//                             }}
//                         >
//                             <li
//                                 onClick={() => setIsActiveChild("")}
//                                 className={
//                                     location === e.link ||
//                                         (title === e.label &&
//                                             isShowSubNav &&
//                                             e.children &&
//                                             e.children.map((val: any) => val.link === location))
//                                         ? "active"
//                                         : "unactive"
//                                 }
//                             >
//                                 <div
//                                     style={{
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         alignItems: "center",
//                                     }}
//                                 >
//                                     <div style={{ display: "flex", alignItems: "center" }}>
//                                         <div
//                                             className={`image-holder ${iscollapsed && "iconWhite"}`}
//                                         >
//                                             {Icon}
//                                         </div>
//                                         {!iscollapsed && <p>{e.label}</p>}
//                                     </div>
//                                     {!iscollapsed && e.children && (
//                                         <RightOutlined className="downIcon fw-600" />
//                                     )}
//                                 </div>
//                             </li>
//                             {title === e.label && isShowSubNav && e.children && (
//                                 <Timeline className={`list ${iscollapsed && "collapsed"}`}>
//                                     {e.children.map((val: any) => (
//                                         <div key={uuidv4()}>
//                                             <Timeline.Item
//                                                 dot={<img src={TimelineIcon} alt="timelineicon" />}
//                                             >
//                                                 <Link
//                                                     to={val.link}
//                                                     onClick={() => setIsActiveChild(val.label)}
//                                                     className={`${isActiveChild === val.label || location === val.link
//                                                             ? "active"
//                                                             : "inactive"
//                                                         }`}
//                                                 >
//                                                     <span className="fs-16">{val.label} </span>
//                                                 </Link>
//                                             </Timeline.Item>
//                                         </div>
//                                     ))}
//                                 </Timeline>
//                             )}
//                         </Link>
//                     );
//                 })}
//             </ul>
//         </Sider>
//     )
// }

// export default SiderComponent

export { }