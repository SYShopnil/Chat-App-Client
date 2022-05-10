import React from 'react'
import {useRouter} from 'next/router'

const SingleChat = () => {
  const {
    query: {
      id: selectedChatId
    }
  } = useRouter()
  return (
    <div>Hello I am chat id: {selectedChatId}</div>
  )
}

export default SingleChat