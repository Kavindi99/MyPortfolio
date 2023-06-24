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

