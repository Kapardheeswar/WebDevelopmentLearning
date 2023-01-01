let toDoList=["This is your first Entry"];
let input=prompt("Enter What you want you what to do??");
while(input!=="quit"){
    if(input.toLowerCase()==="new"){
        input=prompt("Enter a new ToDo..");
        toDoList[toDoList.length]=input;
        console.log("**********************");
        for(let index=0;index<toDoList.length;index++){
            console.log(`${index}: ${toDoList[index]}`);
        }
        console.log("**********************");
    }
    if(input.toLowerCase()==="list"){
        console.log("**********************");
        for(let index=0;index<toDoList.length;index++){
            console.log(`${index}: ${toDoList[index]}`);
        }
        console.log("**********************");
    }
    if(input.toLowerCase()==="delete"){
        input=prompt("Enter the index..you want to delete");
        toDoList.splice(parseInt(input),1);
        console.log("**********************");
        for(let index=0;index<toDoList.length;index++){
            console.log(`${index}: ${toDoList[index]}`);
        }
        console.log("**********************");
    }
    input=prompt("Enter What you want to do??");
}