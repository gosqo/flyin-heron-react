// import "../style/form.scss";

export function Button({ id, name, clickHandler, classListAdd }) {
    return <button id={id} className={"btn " + classListAdd} onClick={clickHandler}>{name}</button>
}

