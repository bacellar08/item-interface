
interface ItemProps {
    name: string,
    description: string,
    price: number,
    img: string
}



const Item: React.FC<ItemProps> = ({ name, description, price, img }) => {
    return (
        <div>
            {name} {description} {price} {img}
        </div>
    )
    
}

export default Item;