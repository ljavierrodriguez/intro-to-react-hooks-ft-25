import React from 'react'
import CustomButton from './components/CustomButton'
import Lista from './components/Lista'
import Lista2 from './components/Lista2'

const nombres = ["Hugo", "Paco", "Luis"]

const App = () => {
    return (
        <>
            <h1>Hola, Mundo!</h1>

            <CustomButton className="btn btn-primary">
                Click Here!
            </CustomButton>

            <CustomButton className="btn btn-warning">
                Click Here 2!
            </CustomButton>

            <Lista nombres={nombres} />
            <Lista2  />
        </>
    )
}

export default App