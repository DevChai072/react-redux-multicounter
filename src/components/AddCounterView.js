import React from 'react'

const AddCounterView = ({handleClickAddCounter}) => {
    return (
        <div >
            <h1>Multi Counter <button onClick={handleClickAddCounter}>เพิ่ม</button></h1>
        </div>
    )
}
export default AddCounterView