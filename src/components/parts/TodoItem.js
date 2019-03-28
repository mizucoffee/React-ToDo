import React from 'react'

export default function TodoList(props) {
  return (
    <li>
      <a href={`/show/${props.data.id}`}>{props.data.text}</a>
    </li>
  )
}