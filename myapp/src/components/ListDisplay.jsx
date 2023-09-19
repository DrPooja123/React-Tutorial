import React ,{useState} from 'react'

const ListDisplay = () => {

    const [record,setRecord]=useState([
        {id:1 , name:'Rohan' ,marks:90},
        {id:2 , name:'Seema' ,marks:80},
        {id:3 , name:'Aman' ,marks:60},
        {id:4 , name:'Zaid' ,marks:95}
    ])
  return (
    <div>

 <div>List Detaisl</div>
 <div>
    {record.map((rec)=>(

        <div key={rec.id}>
            <h2>{rec.name}</h2>
            <h2>{rec.marks}</h2>
            </div>
    ))}
 </div>

    </div>
  )
}

export default ListDisplay