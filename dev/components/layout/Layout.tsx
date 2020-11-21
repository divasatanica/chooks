import React from 'react';
import { Menus } from '../../const';
import SideMenu from './SideMenu';
import style from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={style.App}>
      <aside className={style['App-header']}>
        <SideMenu menus={Menus} />
      </aside>
      <main className={style['App-body']}  id="app-body">
        { children }
      </main>
    </div>
  )
}