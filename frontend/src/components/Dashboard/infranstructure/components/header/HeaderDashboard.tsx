import React from 'react'
import { useDashboardContext } from '../../Dashboard'
import HeaderCss from './Header.module.css'

export default function HeaderDashboard (): JSX.Element {
  const { dashboardState, setDashboardState } = useDashboardContext()

  const hideMenu = (): void => {
    setDashboardState({
      hideMenu: !(dashboardState.hideMenu ?? false)
    })
  }

  return (
        <div className={HeaderCss.header}>
            <div className={HeaderCss.container}>
                <i className={`fa-solid fa-bars cursor-p ${HeaderCss.menu}`} onClick={hideMenu}></i>
            </div>
        </div>
  )
}
