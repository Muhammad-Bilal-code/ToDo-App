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
var sNo;
var listItem ;
var txtElm;

// console.log(dataArr.length)
function handleAdd(){


    /********************user input ki value save and console kraye he **********************/
    var userInptVal = userInpt.value
    // console.log(userInptVal)
    
    
    if(userInpt.value === ""){
        alert("please Fill")
    }
    else{
        
        console.log(dataArr.length)
        userInptVal=userInptVal.replace(/  +/g ," ")
        // console.log(userInptVal)
        /********************constructor function bana rhe he ta k multiple object diferent values k le saken*********************/
        function dataObjConstructor(id,txtValue,done,edit){
            this.id = id;
            this.txtValue = txtValue;
            this.done = done;
            this.edit = edit;
        }
        
        // console.log(dataArr.length)
        var dataObj = new dataObjConstructor(dataArr.length+1,userInptVal,false,false)
        // console.log(dataObj)
        dataArr.push(dataObj)
        // console.log(dataArr.length)
        console.log(dataArr)
        // console.log(dataArr.length)
        
          /****************list item ka div banaya he****************/
          listItem = document.createElement("div");
          listItem.setAttribute("class","list-item")
        //   listItem.setAttribute("id",dataArr.length)
        listMain.appendChild(listItem)
        
          /****************list item ka span div for serial no****************/
           sNo = document.createElement("span");
           sNo.setAttribute("class","s-no");
           listItem.appendChild(sNo)
           
           
           /****************list item ka txt div****************/
           txtElm = document.createElement("input");
           listItem.appendChild(txtElm)
           txtElm.setAttribute("type","text")
        //    txtElm.setAttribute("id","txtElm")
        txtElm.setAttribute("class","txt")
           txtElm.setAttribute("readonly",true)
           
           /****************list item ka edit button****************/
           var btnEdit = document.createElement("button");
           listItem.appendChild(btnEdit)
           btnEdit.innerText = "Edit";
        //    btnEdit.setAttribute("id","btn-edit")
           btnEdit.setAttribute("class","btn")
           btnEdit.setAttribute("onclick","handleEdit(event)")
          /****************list item ka done button****************/
          var btnDone = document.createElement("button");
          listItem.appendChild(btnDone)
          btnDone.innerText = "Done";
        //   btnDone.setAttribute("id","btn-done")
          btnDone.setAttribute("class","btn")
          btnDone.setAttribute("onclick","handleDone(event)")
          /****************list item ka delete button****************/
          var btnDelete = document.createElement("button");
          listItem.appendChild(btnDelete)
          btnDelete.innerText = "Delete";
        //   btnDelete.setAttribute("id","btn-delete")
          btnDelete.setAttribute("class","btn")
          btnDelete.setAttribute("onclick","handleDelete(event)")
          
          
          /************************loop chalaya he array pe ta k value get kr skhen**************************/
          for(var key of dataArr){
              sNo.innerText = key.id ;
              txtElm.value = key.txtValue;
                listItem.setAttribute("id",key.id)              
            }
            
        }
        
        
        
        userInpt.value = ""
    }
    

    /*************************Delete Wala Kam*************************/
    function handleDelete(e){
        // console.log(dataArr.length)
        // console.log(e.target)
        var targettedElm = e.target;
        var prntTargetElm = targettedElm.parentNode;
    var prntTargetElmId = prntTargetElm.getAttribute("id")
    console.log(prntTargetElmId)
    // console.log(prntTargetElm)
    // prntTargetElm.style.display = "none";
    
    // console.log(dataArr)
    prntTargetElm.remove();
    for(i=1;i<=dataArr.length;i++){
        // console.log("test")
        // console.log(prntTargetElmId)
        if(i == prntTargetElmId){
            // console.log("test")
            // console.log(i)
            // console.log(prntTargetElmId)
            dataArr.splice(i-1,1)
            // break;
        }
    }
    console.log(dataArr)
    console.log(dataArr.length)
    
    /******************serial no k elements lyea he saray******************/
    sNo = document.getElementsByClassName("s-no");
    /******************List items k elements lyea he saray******************/
    listItem = document.getElementsByClassName("list-item")
    
    /*********************delete krne pe b id update krni he islyea loop chalaya he dataArr pe ***********************/
    for(i=0;i<dataArr.length;i++){
        // console.log("bilal")
        dataArr[i].id = i+1;
        listItem[i].setAttribute("id",dataArr[i].id)
        sNo[i].innerText= dataArr[i].id 
    }
    console.log(dataArr)
    // for(i=0;i<listItem.length;i++){
    //     console.log(listItem[i])
    // }
    
    // dataArr.splice()
}





/*************************Done Wala Kam*************************/
function handleDone(e){
    // console.log(e.target)
    e.target.style.display = "none";
    let editBtn = e.target.previousElementSibling;
    // console.log(editBtn)
    editBtn.style.display = "none";
    let inptElm = e.target.previousElementSibling.previousElementSibling;
    // console.log(inptElm)
    inptElm.value += " 'This has been done'"
    // console.log(dataArr)
    for(i=0;i<dataArr.length;i++){
        if(i == e.target.parentNode.getAttribute("id")){
            // console.log(e.target.parentNode.getAttribute("id"))
            // console.log(i)
            dataArr[i].done = true
        }
    }
}



// var varAdd;
// var varUpdate;

/*************************Edit Wala Kam*************************/
function handleEdit(e){
    // console.log("Edit Called")
    // console.log(e.target)
    inptElm = e.target.previousElementSibling;
    // console.log(inptElm)
    editPrnt = e.target.parentNode;
    // console.log(editPrnt)
    // console.log(editPrnt.getAttribute("id"))
    for(j=0;j<dataArr.length;j++){
        if(editPrnt.getAttribute("id") == dataArr[j].id){
            // console.log("true")
            dataArr[j].edit = true;
            break;
        }
    }
    console.log(dataArr)
    userInpt.value = inptElm.value;
    inptElm.value = ""
    btnAdd= document.getElementById("btn-add");
    btnAdd.style.display = "none"
    btnUpdate = document.getElementById("btn-update");
    btnUpdate.style.display = "inline-block"
}



/*************************Update Wala Kam*************************/

function handleUpdate(){
    // btnAdd= document.getElementById("btn-add");
    btnAdd.style.display = "inline-block"
    // btnUpdate = document.getElementById("btn-update");
    btnUpdate.style.display = "none"
    // console.log(dataArr)
    for(i=0;i<dataArr.length;i++)       {
        if(dataArr[i].edit === true){
            // console.log("nono")
            dataArr[i].txtValue = userInpt.value;
            userInpt.value = "";
            // dataArr[i].edit = false;
            break;
        }
    }
    console.log(dataArr)

    // document.getElementsByClassName("list-main")[0].innerHTML = "";
    for(i=0; i<dataArr.length;i++){

        if(dataArr[i].edit === true){
            console.log(dataArr[i].txtValue)
            document.getElementsByClassName("txt")[i].value = dataArr[i].txtValue;
            dataArr[i].edit = false;
            break;
        }
        // sNo.innerText = key.id ;
        // txtElm.value = key.txtValue;
        //   listItem.setAttribute("id",key.id)              
      }



}