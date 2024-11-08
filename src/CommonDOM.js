export function Button({ id, name, clickHandler }) {
    return <button id={id} onClick={clickHandler}>{name}</button>
}

