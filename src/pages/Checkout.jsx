import React from 'react'

const Checkout = () => {
    const [name, setName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [numberPhone, setNumberPhone] = React.useState("");
  return (
    <div>
      <input type="text" placeholder='Nombre' />
      <input type="text" placeholder='Apellido' />
      <input type="text" placeholder='Numero de telefono' />
    </div>
  )
}

export default Checkout
