import React,{useState} from 'react';
function Practice(){
  const [task,settask] = useState("");
  const [list,setlist] = useState([])

const good = ()=>{
  if(!task){

  }else{
    setlist([...list,task])
    settask('')
  }
}

const del = (id)=>{
  const ok = list.filter((task,ind)=>{
    return ind != id;
  });
  setlist(ok);
}
  return(
    <div >
    <h1>Make to do List</h1>
  <input type = "text" value = {task} onChange = {(event)=>{settask(event.target.value)}}></input>
  <button onClick = {good}>add item</button>
    <ul>{list.map((task,ind) =>{return(<li key = {task.id} onClick = {()=> del(ind)}>{task}</li>)})}</ul>
    </div>
  )
}
export default Practice;

