// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction);
function myfunction(event){
    event.preventDefault()
    var data1= document.querySelector("#name").value
    var data2= document.querySelector("#employeeID").value
    var data3= document.querySelector("#department").value
    var data4= document.querySelector("#exp").value
    var data5=document.querySelector("#email").value
    var data6= document.querySelector("#mbl").value

    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText= data1;
    let td2=document.createElement("td");
    td2.innerText=data2;
    let td3=document.createElement("td");
    td3.innerText=data3;
    let td4=document.createElement("td");
    td4.innerText=data4;
    let td5=document.createElement("td");
    td5.innerText=data5;
    let td6=document.createElement("td");
    td6.innerText=data6;
    let td7=document.createElement("td");
    if(data4 > 5){
       td7.innerText="Seniour";
    }
    else if(data4>=2 || data4<=5){
        td7.innerText="Junior";
    }
    else{
        td7.innerText="Fresher";
    }
    
    let td8=document.createElement("td");
    td8.innerText="DELETE";
    td8.style.backgroundColor="red";
     td8.addEventListener("click", deleted);

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);

}
function deleted(event){
    event.target.parentNode.remove()
}