/****************user input ka element save kraya he *****************/
var userInpt = document.getElementsByClassName("user-inpt")[0];
// console.log(userInpt)
// console.log(userInpt.value)

/************************list items ka main pakr lya************************/
var listMain = document.getElementsByClassName("list-main")[0]
// console.log(listMain)


/************************Array of objects create kr rhe he jo shuru me empty he *************************/
var dataArr = [];
// console.log(dataArr)



function handleAdd(){

    /********************user input ki value save and console kraye he **********************/
    var userInptVal = userInpt.value
    // console.log(userInptVal)
    
    
    if(userInpt.value === ""){
        alert("please Fill")
    }
    else{
        /****************list item ka div banaya he****************/
        var listItem = document.createElement("div");
        listItem.setAttribute("class","list-item")
        listItem.setAttribute("id",dataArr.length)
        listMain.appendChild(listItem)
        
        /****************list item ka span div for serial no****************/
        var sNo = document.createElement("span");
        sNo.setAttribute("id","s-no");
        listItem.appendChild(sNo)
        
        
        /****************list item ka txt div****************/
        var txtElm = document.createElement("input");
        listItem.appendChild(txtElm)
        txtElm.setAttribute("type","text")
        txtElm.setAttribute("id","txtElm")
        
        /****************list item ka edit button****************/
        var btnEdit = document.createElement("button");
        listItem.appendChild(btnEdit)
        btnEdit.innerText = "Edit";
        btnEdit.setAttribute("id","btn-edit")
        btnEdit.setAttribute("class","btn")
        /****************list item ka done button****************/
        var btnDone = document.createElement("button");
        listItem.appendChild(btnDone)
        btnDone.innerText = "Done";
        btnDone.setAttribute("id","btn-done")
        btnDone.setAttribute("class","btn")
        /****************list item ka delete button****************/
        var btnDelete = document.createElement("button");
        listItem.appendChild(btnDelete)
        btnDelete.innerText = "Delete";
        btnDelete.setAttribute("id","btn-delete")
        btnDelete.setAttribute("class","btn")
        btnDelete.setAttribute("onclick","handleDelete(event)")
    
        /********************constructor function bana rhe he ta k multiple object diferent values k le saken*********************/
        function dataObjConstructor(id,txtValue){
            this.id = id;
            this.txtValue = txtValue;
        }
        
        // console.log(dataArr.length)
        var dataObj = new dataObjConstructor(dataArr.length,userInptVal)
        // console.log(dataObj)
        dataArr.push(dataObj)
        // console.log(dataArr.length)
        console.log(dataArr)
        
        /************************loop chalaya he array pe ta k value get kr skhen**************************/
        
        for(var key of dataArr){
            // console.log(key)
            sNo.innerText = key.id+1;
            txtElm.value = key.txtValue
        }
        
    }
    
    
    
    userInpt.value = ""
}

function handleDelete(e){
    // console.log(e.target)
    var targettedElm = e.target;
    var prntTargetElm = targettedElm.parentNode;
    var prntTargetElmId = prntTargetElm.getAttribute("id")
    console.log(prntTargetElmId)
    // console.log(prntTargetElm)
    prntTargetElm.style.display = "none";
    console.log(dataArr)
    for(i=0;i<dataArr.length;i++){
        console.log("test")
        console.log(prntTargetElmId)
        if(i == prntTargetElmId){
            console.log(i)
            console.log(prntTargetElmId)
            dataArr.splice(i,1)
            break;
        }
    }
    console.log(dataArr)

    // dataArr.splice()

}