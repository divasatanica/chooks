import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import style from './SideMenu.module.css';

interface IProps {
  menus: Array<{ title: string, path: string }>
}

export default function SideMenu({ menus }: IProps) {
  const history = useHistory();
  const { pathname } = useLocation();
  const menuItems = menus.map(({ title, path }) => {
    const isActive = pathname === path
    return (
      <div className={[style['menu-item'], isActive ? style['active'] : ''].join(' ')} key={title} onClick={() => history.push(path)}>
        <span className={style['menu-item-text']}>
          { title }
        </span>
      </div>
    )
  })
  return (
    <>
      { menuItems }
    </>
  )
}