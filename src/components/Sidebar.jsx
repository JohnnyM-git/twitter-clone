import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, Notifications, PermIdentity, Search, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'

function Sidebar() {
  return (
    <div className='sidebar'>
        <Twitter />

        <SidebarOption active text="Home" Icon={<Home />}/>
        <SidebarOption text="Explore" Icon={<Search />} />
        <SidebarOption text="Notifications" Icon={<Notifications />} />
        <SidebarOption text="Messages" Icon={<MailOutline />} />
        <SidebarOption text="Bookmarks" Icon={<BookmarkBorder />} />
        <SidebarOption text="Lists" Icon={<ListAlt />} />
        <SidebarOption text="Profile" Icon={<PermIdentity />} />
        <SidebarOption text="More" Icon={<MoreHoriz />} />

        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>


    </div>
  )
}

export default Sidebar
