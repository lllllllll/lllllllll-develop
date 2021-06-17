import React from 'react'
import { Menu, Search } from 'react-feather'
import ScrollMenu from "react-horizontal-scrolling-menu";

const data = [
  {
    url: '',
    title: 'HOME'
  },
  {
    url: '',
    title: 'VIDEOS'
  },
  {
    url: '',
    title: 'PICTURE'
  },
  {
    url: '',
    title: 'CATEGORIES'
  },
  {
    url: '',
    title: 'LIVE CAMS'
  },
  {
    url: '',
    title: 'COMMUNITY'
  },
  {
    url: '',
    title: 'GIFs'
  },
  {
    url: '',
    title: 'PREMIUM'
  },
  {
    url: '',
    title: 'MODEHUB'
  },
  {
    url: '',
    title: 'SHOP'
  },
  {
    url: '',
    title: 'SITEs'
  },
]

const menu = () => {
  return data.map((i,k) => (
    <div key={k} className="item">{i.title}</div>
  ))
}

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="icon" style={{transform: 'rotate(90deg)'}}><Menu size="24" /></div>
        <div className="logo">
          <div className="pic">
            <img src="./images/pornhub.png" alt="" />
          </div>
          <div className="txt">เราคิดถึงเธอ</div>
        </div>
        <div className="src"><Search size="24" /></div>
      </nav>
      <div className="menu">
        <div className="list">
          <ScrollMenu
            data={menu()}
            wheel
            translate={1}
          />
        </div>
      </div>
    </div>
  )
}

export default Header