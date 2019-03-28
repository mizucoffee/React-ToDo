import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../../styles/header'
import Logo from '../parts/Logo'

export default function Header(props) {
  return (
    <div class={Style.header}  style={{textAlign: 'center'}}>
      <a href="/">
      <Logo color="#fff" margin="16px auto"/></a>
      <hr></hr>
    </div>
  )
}