import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <Link to="/"><h1>React-ToDo</h1></Link>
    </div>
  )
}