const Item = ({ item, onChangeItemAmount }) => {

    return (<div>
        <p>{item.name}</p>
        <input type="number" onChange={() => onChangeItemAmount(item.name)} />
    </div>)
}

export default Item