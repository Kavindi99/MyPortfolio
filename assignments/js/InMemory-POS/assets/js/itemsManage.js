//Item Manage
    let itemList = [];
let itemIndex;

function clearItemFields() {
    $('#Icode').val("");
    $('#ItemDesc').val("");
    $('#UPrice').val("");
    $('#Qty').val("");
}


/*let btnAdd = $("#btnSaveItem");
let tblItems = $("#tblItem");
let btnUpdate = $("#btnUpdateItem");
let btnDelete = $("#btnDeleteItem");
let btnClear = $("#btnClearAllItems");*/

$("#btnSaveItem").click(function (){

    let itemCode = $("#Icode").val();
    let itemDesc =$("#ItemDesc").val();
    let unitPrice =$("#UPrice").val() ;
    let qauntity = $("#Qty").val();

    let tBody=$("#tblItem");

    //load table data normally
    let tr = $('<tr> <td>'+itemCode+'</td>  <td>'+itemDesc+'</td>  <td>'+unitPrice+'</td> <td>'+qauntity+'</td> </tr>');

    //set the row to the table body
    tBody.append(tr);

    itemList.push({code:itemCode, desc: itemDesc, uniPrice : unitPrice, qty : qauntity})



    console.log(itemList);

    clearItemFields();

    //    load item code's into place order form
    let itemCodesList = document.getElementById("itemCodeList");

    let option2 = document.createElement("option");

    option2.text=itemCode;
    option2.value=itemCode;
    itemCodesList.append(option2);

});

let selectedItemRow;

$("#tblItem").click(function (event){
    selectedItemRow = event.target.closest('tr');
    console.log(selectedItemRow);
    $('#Icode').val(selectedItemRow.cells[0].textContent);
    $('#ItemDesc').val(selectedItemRow.cells[1].textContent);
    $('#UPrice').val(selectedItemRow.cells[2].textContent);
    $('#Qty').val(selectedItemRow.cells[3].textContent);

    itemIndex= itemList.findIndex(itemList => itemList.code === selectedItemRow.cells[0].textContent);

});

//Update Customer
$("#btnUpdateItem").click(function (){

    let itemCode = $('#Icode').val();
    let itemDesc = $('#ItemDesc').val();
    let unitPrice = $('#UPrice').val();
    let qauntity = $('#Qty').val();


    selectedItemRow.cells[0].textContent=itemCode ;
    selectedItemRow.cells[1].textContent=itemDesc;
    selectedItemRow.cells[2].textContent=unitPrice;
    selectedItemRow.cells[3].textContent=qauntity;

    clearItemFields();
    console.log(itemIndex);

    //updating the selected customer from the list
    itemList[itemIndex].code=itemCode;
    itemList[itemIndex].desc=itemDesc;
    itemList[itemIndex].uniPrice=unitPrice;
    itemList[itemIndex].qty=qauntity;

    console.log(itemList);

    /*  btnUpdate.prop('disabled',true);
      btnDelete.prop('disabled',true);
      btnAdd.prop('disabled',false);*/
});

//CUstomer Delete
$("#btnDeleteItem").click(function (){
    selectedItemRow.remove();

    //removing the selected customer from the list
    itemList.splice(itemIndex,1);
    console.log(itemList);

    clearItemFields();

    /*  btnUpdate.prop('disabled',true);
      btnDelete.prop('disabled',true);
      btnAdd.prop('disabled',false);*/

});

//clear all
$("#btnClearAllItems").click(function (){
    clearItemFields();
})
