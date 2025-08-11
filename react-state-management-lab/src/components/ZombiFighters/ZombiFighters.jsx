    const ZombieFighter = ({ id, name, price, strength, agility, img, ...props }) => {
        return (
            <div className="zombie-card">
                <img src={img} />
                <p>{name}</p>
                <p><span>Price:</span> {price}</p>
                <p><span>Strength:</span> {strength}</p>
                <p><span>Agility: </span>{agility}</p>
            </div>
        )
    }

    export default ZombieFighter


