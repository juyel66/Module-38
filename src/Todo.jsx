// export default function Todo({task, isDone}){
//     return (
//         <li>Taks</li>
//     )
// }


// conditional rendering Option 1 
export default function Todo({task, isDone}){
    if(isDone===true){
        return <li>Finished: {task}</li>
    }
    else{
        return <li>work on: {task}</li>
    }
}