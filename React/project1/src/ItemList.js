//ItemList.js
import React from "react"
import Item from "./Item.js";

export default function ItemList(props) {
return (
<ul className="ui-list">
      {props.items.map((i) => (
        <li className="ui-item-list" key={i.id}>
          <Item info={i} />
          <button
            className="item-button"
            onClick={() => props.onDeleteClick(i.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
)}
