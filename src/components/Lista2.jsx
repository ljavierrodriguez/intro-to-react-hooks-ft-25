import React, { useEffect, useState } from 'react'


const ComponentA = () => {
    useEffect(() => {
        console.log("Componente A Renderizado...")


        return () => {
            console.log("Componente A Eliminado...")
        }

    }, [])

    return (
        <h1>Componente A</h1>
    )
}

const ComponentB = () => {
    useEffect(() => {
        console.log("Componente B Renderizado...")

        return () => {
            console.log("Componente B Eliminado...")
        }

    }, [])
    return (
        <h1>Componente B</h1>
    )
}

const Lista2 = () => {

    const [nombres, setNombres]  = useState(["Hugo", "Paco", "Luis"]) // [value, function(){}]
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [name, setName] = useState("")

    const [contador, setContador] = useState(0)

    const addName = (evento) => {
        console.log(evento.type)
        //setNombres([...nombres, "Javier"]) // ["Hugo", "Paco", "Luis"] "Javier"
        //setNombres([...nombres, "Miguel"])

        //setNombres((currentValues) => [...currentValues, "Javier"])
        //setNombres((currentValues) => [...currentValues, "Miguel"])
        setNombres((currentValues) => [...currentValues, name])
    }

    useEffect(() => {
        console.log("Componente Renderizado...")
    }, [])

    useEffect(() => {
        console.log("Ha ocurrido un cambio sobre el estado open")
    }, [open])


    return (
        <>
        Contador: {contador}
        <div>
            <button onClick={() => setContador(contador => contador + 1)}>+</button>
            <button onClick={() => setContador(contador => contador - 1)}>-</button>
        </div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <ul className='list-group w-50 mx-auto my-1'>
            {
                nombres.map((item, index) => {
                    return (
                        <li key={index} className='list-group-item'>{item}</li>
                    )
                })
            }
        </ul>
        <button onClick={addName}>
            Add Name
        </button>

        <button onClick={() => setShow(!show)}>
            { show ? "Hide" : "Show" }
        </button>

            {
                open ? (
                    <ComponentA />
                ):(
                    <ComponentB />
                )
            }
        <button onClick={() => setOpen(!open)}>
            { open ? "Close" : "Open" }
        </button>

        </>
    )
}

export default Lista2