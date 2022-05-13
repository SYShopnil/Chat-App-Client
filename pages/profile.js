import React from 'react'
import SocketConnector from '../src/component/common/Socket/SocketConnector'
import ProfilePage from '../src/view/ProfilePage/ProfilePage'

const profile = () => {
  return (
    <>
      <SocketConnector>
           <ProfilePage/>
      </SocketConnector>
    </>
  )
}

export default React.memo (profile)