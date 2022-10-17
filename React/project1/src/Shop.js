import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import AddItem from "./AddItem.js";
import ItemList from "./ItemList.js";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [nameObj, setNameObj] = useState("");
  const [aboutObj, setAboutObj] = useState("");

  useEffect(()=> {document.title  =`В корзине ${items.length} товаров`})

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
      <AddItem items={items} setNameObj={setNameObj} setAboutObj={setAboutObj} nameObj={nameObj} aboutObj={aboutObj} onAddButton={handleAddButton} />
      <div>
        <p className={items.length > 0 ? "display-none" : "ui-title"}>
          Добавьте первый товар!
        </p>
      </div>
      <ItemList items={items} onDeleteClick={handleDeleteClick} />
      </>
  );
}

