//AddItem.js
import React from "react"

export default function AddItem(props) {
return (
    <>
    <form onSubmit={props.onAddButton}>
        <div>
          <label htmlFor="nameItem">Название товара :</label>
          <input
            type="text"
            id="nameItem"
            value={props.nameObj}
            onChange={(e) => props.setNameObj(e.target.value)}
            placeholder="Название товара"
            className="ui-textfield"
          />
        </div>
        <div>
          <label htmlFor="descItem">Описание товара :</label>
          <input
            type="text"
            id="deskItem"
            value={props.aboutObj}
            onChange={(e) => props.setAboutObj(e.target.value)}
            placeholder="Описание товара"
            className="ui-textfield"
          />
        </div>
        <div className="form-footer">
          <div className="validation">
            {props.nameObj.length && props.aboutObj.length > 0
              ? ""
              : "*Для добавления товара заполните все поля"}
          </div>
          <input
            type="submit"
            disabled={!(props.nameObj.length && props.aboutObj.length)}
            className="ui-button"
            value="Добавить"
          />
        </div>
      </form>
      </>
)
}