$('#cusIDList').click(function (){
   /* console.log("clicked");*/

    let selectedID = $("#cusIDList").val();
  /*  console.log(val);*/

    //get Array index from selected id
    let customerIndex = customerList.findIndex(customerList => customerList.id ===selectedID );
        console.log(customerList["get lost",customerIndex].name);
    $('#cusNamePlaceOrder').val(customerList[customerIndex].name);

});

$('#itemCodeList').click(function (){

    let selectedCode = $("#itemCodeList").val();

    let itemIndex = itemList.findIndex(itemList => itemList.code ===selectedCode );

    $('#itemDescPlaceOrder').val(itemList[itemIndex].desc);
    $('#itemQtyPlaceOrder').val(itemList[itemIndex].qty);
    $('#itemUnitPricePlaceOrder').val(itemList[itemIndex].uniPrice);

});

//save orders
let  cartList =[];
let amountOfTotal=0;

// btn add to cart
$('#btnSaveOrder').click(function (){
    let tBody=$("#tblPlaceOrder");

   /* var check = false;


    for (var i=0; i<tBody.rows.length; i++){
        console.log("for loop ",i);
    }
*/

    let itemCodeOrder = $("#itemCodeList").val();
    let itemDescOrder =$("#itemDescPlaceOrder").val();
    let qauntityOrder = $("#itemQauntityPlaceOrder").val();
    let unitPriceorder =$("#itemUnitPricePlaceOrder").val() ;
    let totalorder =   qauntityOrder * unitPriceorder ;


    /*console.log("FSJDJDDJDJDJD",totalorder);*/
    let tr = $('<tr> <td>'+itemCodeOrder+'</td>  <td>'+itemDescOrder+'</td>  <td>'+qauntityOrder+'</td> <td>'+unitPriceorder+'</td> <td>'+totalorder+'</td> </tr>');


    tBody.append(tr);

    cartList.push({code:itemCodeOrder, desc: itemDescOrder , qty : qauntityOrder , uniPrice :unitPriceorder , total:totalorder})

    /*console.log(cartList);*/

    //set total for bill
    amountOfTotal =totalorder+amountOfTotal;
   /* console.log("AIFSA",amountOfTotal);*/
    $('#totalPlaceOrder').val(amountOfTotal);

});

//sub total calculation part
$('#subTotalPlaceOrder').click(function (){
    let discount = $('#discountPlaceOrder').val();
    console.log("hate this");
    let subTotal = amountOfTotal -discount;
    $('#subTotalPlaceOrder').val(subTotal);

});

//btn purchase action
let finalOrderList = [];
$('#btnPurchaseFinalOrder').click(function (){

    let finalOrderId =  $('#orderIdPlaceOrder').val();
    let finalOrderDate = $('#orderDatePlaceOrder').val();
    let finalCustomerId = $('#cusIDList').val();
    let finalItemCode = $('#itemCodeList').val();
    let finalQuantity = $('#itemQauntityPlaceOrder').val();
    let finalDiscount = $('#discountPlaceOrder').val();
    let finalTotal =  $('#subTotalPlaceOrder').val();

    let tBody=$("#tblFinalOrder");

    let tr = $('<tr> <td>'+finalOrderId+'</td>  <td>'+finalOrderDate+'</td>  <td>'+finalCustomerId+'</td> <td>'+finalItemCode+'</td> <td>'+finalQuantity+'</td> <td>'+finalDiscount+'</td>  <td>'+finalTotal+'</td> </tr>');

    tBody.append(tr);

    finalOrderList.push({oid:finalOrderId , date:finalOrderDate, id:finalCustomerId , code :finalItemCode,  qty : finalQuantity , discount :finalDiscount , subtotal:finalTotal})

   /* console.log(finalOrderList);*/

});

$('#btnClearOrder').click(function (){
    $('#orderIdPlaceOrder').val("");
    $('#orderDatePlaceOrder').val("");
    $('#cusIDList').val("");
    $('#cusNamePlaceOrder').val("");

    $('#itemCodeList').val("");
    $('#itemDescPlaceOrder').val("");
    $('#itemQtyPlaceOrder').val("");
    $('#itemUnitPricePlaceOrder').val("");
    $('#itemQauntityPlaceOrder').val("");

});

/*Second way*/
/*
$('#cusIdList').click(function (){
    let selectedId = $('#cusIdList').val();
    /!*console.log("hri");*!/

    let customerIndex = customerList.findIndex(customerList => customerList.id === selectedId);
    console.log(customerList[customerIndex]);
    $('#cusNamePO').val(customerList[customerIndex].name);
});

$('#itemIdList').click(function (){
    let selectedId = $('#itemIdList').val();
    /!*console.log("hri");*!/

    let itemIndex = itemList.findIndex(itemList => itemList.id === selectedId);
    console.log(itemList[itemIndex]);
    $('#cusDesPO').val(itemList[itemIndex].description);
    $('#cusQtyOnHandPO').val(itemList[itemIndex].qty);
    $('#cusPricePO').val(itemList[itemIndex].price);

});

let amountOfTotal=0;
let cartDetails=[];

$("#btnAddToCart").click(function(){
    let itemDes = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQty = $("#itemQtyPO").val();
    let totalOrder = itemPrice * itemQty;
    let itemId = $("#txtItemId").val();
    var itemExists = false;

    table = document.getElementById("tblPlaceOrder");
    //  var row = table.insertRow(table.rows.length);
    // let cell1 = row.insertCell(0);
    //  let cell2 = row.insertCell(1);
    //  let cell3 = row.insertCell(2);
    //  let cell4 = row.insertCell(3);
    //  let cell5 = row.insertCell(4);
    //
    //  cell1.innerText=itemId;
    //  cell2.innerText=itemDes;
    //  cell3.innerText=itemQty;
    //  cell4.innerText=itemPrice;
    //  cell5.innerText=totalOrder;

    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var cellValue = row.cells[0].innerHTML; // Get the value from the first cell (item ID)
        var  qty=parseInt($('#itemQtyPO').val());
        // Check if item ID already exists

        if (cellValue === itemId) {

            // Update the existing row

            let textContent = parseInt(row.cells[2].textContent);

            row.cells[2].innerHTML = qty+textContent; // Update quantity

            row.cells[4].innerHTML =itemPrice  * (qty+textContent);
            // Update total price
            // clearTextFeildOrder();
            // tot=tot+(pr * qty);
            // $('#txtTot').val(tot);
            // $('#txtSubTot').val(tot);
            // // Set the flag to indicate item exists
            itemExists = true;
            break; // Exit the loop
        }
    }
    if (!itemExists){

        var  qty=$('#itemQtyPO').val();
        var itemforTable;

        itemList.forEach(function(item) {
            if (item.id==itemId){
                // item.qty=item.qty-qty;
                itemforTable=item;
            }
        });



        var row = table.insertRow(table.rows.length);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);


        cell1.innerHTML=itemforTable.id;
        cell2.innerHTML=itemforTable.description;
        cell3.innerHTML=qty;
        cell4.innerHTML=itemforTable.price;
        cell5.innerHTML=itemforTable.price*qty;
        // tot=tot+itemforTable.price*qty;
    }

    cartDetails.push({id:itemId, description:itemDes, price:itemPrice, qty:itemQty, total:totalOrder})

    var totDDD=0;
    for (var i = 0; i < table.rows.length; i++) {
        var row = table.rows[i];
        var cellValue = parseInt(row.cells[4].innerHTML);
        totDDD=totDDD+cellValue;
    }
    $('#txtTot').val(totDDD);
    $('#txtSubTot').val(totDDD);
    //    load id's into place order forms
    let cusIdList = document.getElementById("cusIdList");

    let option = document.createElement("option");

    //set full total
    amountOfTotal = amountOfTotal+totalOrder;
    $('#fullTotal').val(amountOfTotal);
});

//sub total calculation part
$('#subTotalPlaceOrder').click(function (){
    let discount = $('#discountPlaceOrder').val();
    let subTotal = amountOfTotal - discount;
    $('#subTotalPlaceOrder').val(subTotal);
});

//btn purchase action
let finalOrderList = [];
$('#btnPurchaseFinalOrder').click(function (){

    let finalOrderId =  $('#orderIdPlaceOrder').val();
    let finalOrderDate = $('#orderDatePlaceOrder').val();
    let finalCustomerId = $('#cusIdList').val();
    let finalItemCode = $('#itemIdList').val();
    let finalQuantity = $('#itemQtyPO').val();
    let finalDiscount = $('#discountPlaceOrder').val();
    let finalTotal =  $('#subTotalPlaceOrder').val();

    let tBody=$("#tblFinalOrder");

    let tr = $('<tr> <td>'+finalOrderId+'</td>  <td>'+finalOrderDate+'</td>  <td>'+finalCustomerId+'</td> <td>'+finalItemCode+'</td> <td>'+finalQuantity+'</td> <td>'+finalDiscount+'</td>  <td>'+finalTotal+'</td> </tr>');

    tBody.append(tr);

    finalOrderList.push({oid:finalOrderId , date:finalOrderDate, id:finalCustomerId , code :finalItemCode,  qty : finalQuantity , discount :finalDiscount , subtotal:finalTotal})

    /!* console.log(finalOrderList);*!/

});

function clearOrderFields() {
    $('#orderIdPlaceOrder').val("");
    $('#orderDatePlaceOrder').val("");
    $('#cusIdList').val("");
    $('#itemIdList').val("");
    $('#cusDesPO').val("");
    $('#cusNamePO').val("");
    $('#cusQtyOnHandPO').val("");
    $('#itemQtyPO').val("");
    $('#cusPricePO').val("");
    $('#totalOrders').val("");
    $('#fullTotal').val("");
    $('#discountPlaceOrder').val("");
    $('#subTotalPlaceOrder').val("");

}

$("#btnClearOrders").click(function(){
    clearOrderFields();
});
*/

