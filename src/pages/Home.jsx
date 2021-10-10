import styled from 'styled-components';
import Item from '../components/Item';
import data from '../mock/data/shirt_list.json'
import { useState } from 'react'

const Wrapper = styled.div`
    padding: 10px;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: beige;
`

const Title = styled.h1`
    /* color: white; */
`

// const itemWithID = memoize(id => atom({
//     key: `item${id}`,
//     default: {},
// }))



const Home = () => {
    const [itemList, setItemList] = useState(data)
    const onChangeItemAmount = (itemName) => {
        const foundItem = data.find(item => item.name === itemName)
        foundItem.amount++
        setItemList([...itemList.filter(item => item.name !== foundItem.name), foundItem])

    }
    console.log("itemLIst", itemList)
    return (
        <Wrapper>
            <Title>This Home</Title>
            {itemList.map((item) => (<Item item={item} onChangeItemAmount={onChangeItemAmount} />))}
            {itemList.map(({ amount }) => <div>{amount}</div>)}
        </Wrapper>
    )
}

export default Home