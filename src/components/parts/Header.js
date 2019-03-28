import React from 'react'
import { Link } from 'react-router-dom'
import { header } from '../../styles/header'

export default function Header(props) {
  return (
    <div class={header}>
      <Link to="/"><h1>React-ToDo</h1></Link>
    </div>
  )
}