import React , {useEffect}from 'react'
import {useRouter} from 'next/router'
import SingleChatView from '../../src/view/SingleChatPage/SingleChatView'
import SocketConnector from '../../src/component/common/Socket/SocketConnector'

const SingleChat = () => {
  return (
    <>
    <SocketConnector>
          <SingleChatView/>
    </SocketConnector>
    </>
  )
}

export default React.memo (SingleChat)