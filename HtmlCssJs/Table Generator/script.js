// javascript code goes here
const inputNumber=document.getElementById("generateTableBtn");
inputNumber.addEventListener('click',()=>{
    const inputNumber=document.getElementById("num");
    const outputDiv=document.getElementById("output");
    outputDiv.innerHTML="";
    // create table
    const table=document.createElement("table")
    // create header row
    const headerRow=table.insertRow(0);
    // create cell in header
    headerRow.insertCell(0).textContent="Multiple"
    headerRow.insertCell(1).textContent="Result"
    for(let i=1;i<=10;i++){
        const row=table.insertRow(i);
        row.insertCell(0).textContent=i
        row.insertCell(1).textContent=i*parseInt(inputNumber.value) 
    }
    outputDiv.append(table);
    console.log(inputNumber.value);
})