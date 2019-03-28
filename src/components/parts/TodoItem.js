import React from 'react'
import Style from '../../styles/common'

export default function TodoList(props) {
  return (
    <li class={Style.listItem}>
      <a href={`/show/${props.data.id}`}>{props.data.text}</a>
    </li>
  )
}