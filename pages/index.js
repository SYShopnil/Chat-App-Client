import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from '../src/view/HomePage/HomePage'
import React, {useEffect} from "react"
import SocketConnector from '../src/component/common/Socket/SocketConnector'
function Home() {
  return (
    <div>
      <SocketConnector>
          <HomePage/>
      </SocketConnector>
    </div>
  )
}
export default  React.memo (Home)