import React from 'react'

export default function NdkRenderList() {
    const ndkList = ["Trịnh Chung", "ReactJS","Fit-NTU"];

    const ndkElement = ndkList.map(item=>{
        return <li>{item}</li>
    })

  return (
    <div className='alert alert-success'>
        <h2> Danh sách:</h2>
        <ul>
            {
                ndkList.map(item=>{
                    return <li>{item}</li>
                })
            }
        </ul>
        <hr/>
        {ndkElement}
    </div>
  )
}