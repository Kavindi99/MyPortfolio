$('#cusIDList').click(function (){
   /* console.log("clicked");*/

    let selectedID = $("#cusIDList").val();
  /*  console.log(val);*/

    //get Array index from selected id
    let customerIndex = customerList.findIndex(customerList => customerList.id ===selectedID );
        console.log(customerList["Nama ykoooo",customerIndex].name);
    $('#cusNamePlaceOrder').val(customerList[customerIndex].name);

});

$('#itemCodeList').click(function (){

    let selectedCode = $("#itemCodeList").val();

    let itemIndex = itemList.findIndex(itemList => itemList.code ===selectedCode );

    $('#itemDescPlaceOrder').val(itemList[itemIndex].desc);
    $('#itemQtyPlaceOrder').val(itemList[itemIndex].qty);
    $('#itemUnitPricePlaceOrder').val(itemList[itemIndex].uniPrice);


});

let  cartList =[];
//add to cart
$('#btnSaveOrder').click(function (){

    let itemCodeOrder = $("#itemCodeList").val();
    let itemDescOrder =$("#itemDescPlaceOrder").val();
    let qauntityOrder = $("#itemQauntityPlaceOrder").val();
    let unitPriceorder =$("#itemUnitPricePlaceOrder").val() ;
  /*  let totalorder = ;*/



    let tBody=$("#tblPlaceOrder");

    tBody.append(tr);

    cartList.push({code:itemCodeOrder, desc: itemDescOrder , qty : qauntityOrder , uniPrice :unitPriceorder})

    console.log(cartList);
});



