import React, { useState } from "react";
import Item from "./Item.js";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [nameObj, setNameObj] = useState("");
  const [aboutObj, setAboutObj] = useState("");
  function handleAddButton(event) {
    event.preventDefault();
    const idUnic = uuid();
    const item = { name: nameObj, desc: aboutObj, id: idUnic };
    setItems([...items, item]);
    setNameObj("");
    setAboutObj("");
  }
  function handleDeleteClick(id) {
    const delItems = items.filter((n) => n.id !== id);
    setItems(delItems);
  }
  return (
    <>
      <form onSubmit={handleAddButton}>
        <div>
          <label htmlFor="nameItem">Название товара :</label>
          <input
            type="text"
            id="nameItem"
            value={nameObj}
            onChange={(e) => setNameObj(e.target.value)}
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="descItem">Описание товара :</label>
          <input
            type="text"
            id="deskItem"
            value={aboutObj}
            onChange={(e) => setAboutObj(e.target.value)}
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {nameObj.length && aboutObj.length > 0
              ? ""
              : "*Для добавления товара заполните все поля"}
          </div>
          <input
            type="submit"
            disabled={nameObj.length && aboutObj.length > 0 ? false : true}
            className="ui-button"
            value="Добавить"
          />
        </div>
      </form>
      <div>
        <p className={items.length > 0 ? "display-none" : "ui-title"}>
          Добавьте первый товар
        </p>
      </div>

      <ul className="ui-list">
        {items.map((i) => (
          <li className="ui-item-list" key={i.id}>
            <Item info={i} />
            <button
              className="item-button"
              onClick={() => handleDeleteClick(i.id)}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
