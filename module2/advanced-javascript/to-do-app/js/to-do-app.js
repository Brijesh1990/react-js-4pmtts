
// create a function for enable btn
function enablBtn(btnId)
{
document.getElementById(btnId).disabled=false;
}
// add data via call back function
window.onload=()=>{
const form1=document.querySelector("#addForm");
let item=document.getElementById("item");
let items=document.getElementById("items");
let AddData=document.getElementById("Add_Data");
//edit 
let editItem=null;
// call back function and used addEventListener   
form1.addEventListener("submit",additem);
//call back function for remove items 
items.addEventListener("click",removeitem)
}

// add items function 
function additem(e)
{
// alert('i am clicked')
// redirect prevent method
e.preventDefault();
let newItem=document.getElementById("item").value;

//update data after edit
if(Add_Data.value!='AddData')

{

editItem.target.parentNode.childNodes[0].data=document.getElementById("item").value;
Add_Data.value="AddData";
document.getElementById("item").value="";
Swal.fire({
title: "wow!",
text: "Your data successfully updated!",
icon: "success"
});   

return false;

}


if(newItem.trim()=="" || newItem.trim=='null')
{
Swal.fire({
title: "Something went wrong!",
text: "Please do not used blanks!",
icon: "error"
});   

}

else 
{
document.getElementById("item").value="";
let li=document.createElement("li");
li.className="list-group-item mt-2";
// stored data via createTextNode(newItem)
li.appendChild(document.createTextNode(newItem));

Swal.fire({
title: "Wow!",
text: "Items Addedd successfully!",
icon: "success"
});

// display in items
items.appendChild(li);
// add delete button using createElement
let delBtn=document.createElement("button");
delBtn.className="btn btn-sm btn-danger bg-danger text-white ms-2 float-end delete";
delBtn.appendChild(document.createTextNode("Delete"));

// add edit button using createElement
let editBtn=document.createElement("button");
editBtn.className="btn btn-sm btn-primary bg-primary text-white ms-0 float-end edit";
editBtn.appendChild(document.createTextNode("Edit"));
// add button in items or where our items display
li.appendChild(delBtn);
// add edit in ietems 
li.appendChild(editBtn);


}
}
// remove items 
function removeitem(e)
{
// removed items here
e.preventDefault();
if(e.target.classList.contains("delete"))
{
if(confirm("Are you sure to Delete Items"))
{
let li=e.target.parentNode;
items.removeChild(li);
Swal.fire({
title: "Wow!",
text: "Items deleted  successfully!",
icon: "error"
});
}
}   

//  edit data
if(e.target.classList.contains("edit"))
{
// alert('hi edit');    
document.getElementById("item").value=e.target.parentNode.childNodes[0].data;
Add_Data.value="EditData";
editItem=e;

}

}




