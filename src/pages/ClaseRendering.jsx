import React from 'react'

const ItemList = React.memo(({ items }) => {
  console.log("Renderizado ItemList");
    return (
    <ul>
        {items.map((item) => (
            <li key={item.id}>{item.name}</li>
        ))}
    </ul>
  );
});

const ClaseRendering = () =>{
    const [count, setCount] = React.useState(0);
    const items = [
        { id: 1, name: "item 1"},
        { id: 2, name: "item 2"},
        { id: 3, name: "item 3"},
        { id: 4, name: "item 4"},
        { id: 5, name: "item 5"},
    ];
    return <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <p>Count: {count}</p>
        <ItemList items={items} />
    </div>;
};
export default ClaseRendering
