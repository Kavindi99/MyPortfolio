<!--Customer updates -->
/*<script>*/
//Create Array
let customerList =[];
let customerIndex;


function clearCustomerFields() {
    $('#cid').val("");
    $('#Name').val("");
    $('#Address').val("");
    $('#salary').val("");
}

let btnAdd = $("#btnSaveCustomer");
let tblCustomers = $("#tblCustomers");
let btnUpdate = $("#btnUpdateCustomer");
let btnDelete = $("#btnDeleteCustomer");
let btnClear = $("#btnClearAll");

$("#btnSaveCustomer").click(function (){

    let cusId = $("#cid").val();
    let cusName =$("#Name").val();
    let cusAddress =$("#Address").val() ;
    let cusSalary = $("#salary").val();

    let tBody=$("#tblCustomer");

    //load table data normally
    let tr = $('<tr> <td>'+cusId+'</td>  <td>'+cusName+'</td>  <td>'+cusAddress+'</td> <td>'+cusSalary+'</td> </tr>');

    //set the row to the table body
    tBody.append(tr);

    //2nd method
    /*  let row = <tr>
          <td>$(cusId)</td>
          <td>$(cusName)</td>
          <td>$(cusAddress)</td>
          <td>$(cusSalary)</td>
      </tr>
      $("#tblCustomer").append(row);*/


    //push for array indexes
    customerList.push({id:cusId, name : cusName, address : cusAddress, salary : cusSalary})
    console.log(customerList)

    customerList[0].name;

    console.log(customerList);

    clearCustomerFields();

    /* btnUpdate.prop('disabled',false);
     btnDelete.prop('disabled',false);*/

//    load id's into place order form
    let cusIdsList = document.getElementById("cusIDList");

    let option = document.createElement("option");

    option.text=cusId;
    option.value=cusId;
    cusIdsList.append(option);



});


let selectedCustomerRow;

//load table row  data for form
$("#tblCustomer").click(function (event){
    selectedCustomerRow = event.target.closest('tr');
    $('#cid').val(selectedCustomerRow.cells[0].textContent);
    $('#Name').val(selectedCustomerRow.cells[1].textContent);
    $('#Address').val(selectedCustomerRow.cells[2].textContent);
    $('#salary').val(selectedCustomerRow.cells[3].textContent);

    customerIndex = customerList.findIndex(customerList => customerList.id === selectedCustomerRow.cells[0].textContent);

});



//Update Customer
$("#btnUpdateCustomer").click(function (){

    let cusID = $('#cid').val();
    let cusName = $('#Name').val();
    let cusAddress = $('#Address').val();
    let cusSalary = $('#salary').val();


    selectedCustomerRow.cells[0].textContent=cusID;
    selectedCustomerRow.cells[1].textContent=cusName;
    selectedCustomerRow.cells[2].textContent=cusAddress;
    selectedCustomerRow.cells[3].textContent=cusSalary;

    clearCustomerFields();
    console.log(customerIndex);

    //updating the selected customer from the list
    customerList[customerIndex].id=cusID;
    customerList[customerIndex].name=cusName;
    customerList[customerIndex].address=cusAddress;
    customerList[customerIndex].salary=cusSalary;

    console.log(customerList);

    /*  btnUpdate.prop('disabled',true);
      btnDelete.prop('disabled',true);
      btnAdd.prop('disabled',false);*/
});

//CUstomer Delete
$("#btnDeleteCustomer").click(function (){
    selectedCustomerRow.remove();

    //removing the selected customer from the list
    customerList.splice(customerIndex,1);
    console.log(customerList);

    clearCustomerFields();

    /*  btnUpdate.prop('disabled',true);
      btnDelete.prop('disabled',true);
      btnAdd.prop('disabled',false);*/

});

//clear all
$("#btnClearAll").click(function (){
    clearCustomerFields();
})




//get all customers

$("#btnGetAll").click(function () {

    //clear all tbody data before add
    $("#tblCustomer").empty();

    for (let i = 0; i < customerList.length; i++) {
        let id = customerList[i].id;
        let name = customerList[i].name;
        let address = customerList[i].address;
        let salary = customerList[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblCustomer").append(row);
    }
});
/*
</script>*/
