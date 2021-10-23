import React from 'react'
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";



export const Sidebardata = [
    {
        title: 'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'CCTV Lists',
        path:'/cctv',
        icon:<AiIcons.AiTwotoneVideoCamera />,
        cName: 'nav-text'
    },
    {
        title: 'Report',
        path:'/reports',
        icon:<MdIcons.MdReportProblem/>,
        cName: 'nav-text'
    },
]
