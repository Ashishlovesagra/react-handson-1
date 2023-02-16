import React from 'react'
import './Style.css'

const FunctionalComponent = () => {
    return (
        <div className='container1'>
            <h2 className='FunctionalComponentText'>This is created using Functional Component</h2>  <br></br>
            <p id='p1'>This is done using External CSS</p>  <br></br>
            <p style={{color:'blue', fontWeight:'bold',textAlign:'center'}}>This is done using Inline CSS</p>
        </div>
    )
}
export default FunctionalComponent;