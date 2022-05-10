import React from 'react'
import {useRouter} from 'next/router'
import SingleChatView from '../../src/view/SingleChatPage/SingleChatView'

const SingleChat = () => {
  const {
    query: {
      id: selectedChatId
    }
  } = useRouter()
  return (
    <>
      <SingleChatView/>
    </>
  )
}

export default SingleChat