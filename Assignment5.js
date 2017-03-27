var website = "https://student.business.uab.edu/jsonwebservice/service1.svc/";

function fetchData(){
  var myselect = document.getElementById("options");
  var customer_list = document.getElementById("customer_list");
  var order_history = document.getElementById("order_history");
  var orders_placed = document.getElementById("orders_placed");
  
  customer_list.style.visibility = "hidden";
  order_history.style.visibility = "hidden";
  orders_placed.style.visibility = "hidden";
  switch(myselect.selectedIndex){
    case 1:
      customer_list.style.visibility = "visible";
      $.ajax({
        type: 'GET',
        url: website + "getOrdersForCustomer/",
        dataType: 'json',
        success: function(data){
          var html = "<table>\n"
          html += "<tr>";
          html += "<th>City</th>";
          html += "<th>Customer ID</th>";
          html += "<th>Company Name</th>";
          html += "</tr>";
          data['GetAllCustomersResult'].forEach(function(element){
            html += "<tr>";
            html += "<td>" + element['City'] + "</td>";
            html += "<td>" + element['CustomerID'] + "</td>";
            html += "<td>" + element['CompanyName'] + "</td>";
            html += "</tr>";
          });
          html += "</table>";
          customer_list.innerHTML = html;
        }
      });
      break;
    case 2:
      order_history.style.visibility = "visible";
      break;
    case 3:
      orders_placed.style.visibility = "visible";
      break;
  }   
}

function getOrderHistory(){
  var id = document.getElementById('historyField').value;

  $.ajax({
    type: 'GET',
    url: website + "getCustomerOrderHistory/" + id, 
    dataType: 'json',                               
    success: function(data){                        
      var html = "<table>\n"
      html += "<tr>";
      html += "<th>Product Name</th>";
      html += "<th>Total</th>";
      html += "</tr>";
      data.forEach(function(element){
        html += "<tr>";
        html += "<td>" + element['ProductName'] + "</td>";
        html += "<td>" + element['Total'] + "</td>";
        html += "</tr>";
      });
      html += "</table>";
      order_history.innerHTML = html;
    }
  });
}

function getOrdersPlaced(){
  var id = document.getElementById('currentField').value;

  $.ajax({
    type: 'GET',
    url: website + "getOrdersForCustomer/" + id, 
    dataType: 'json',                               
    success: function(data){                        
      var html = "<table>\n"
      html += "<tr>";
      html += "<th>Order Date</th>";
      html += "<th>Order ID</th>";
      html += "<th>Ship Address</th>";
      html += "<th>Ship City</th>";
      html += "<th>Ship Name</th>";
      html += "<th>Ship Postcode</th>";
      html += "<th>Shipped Date</th>";
      html += "</tr>";
      data['GetOrdersForCustomerResult'].forEach(function(element){
        html += "<tr>";
        html += "<td>" + element['OrderDate'] + "</td>";
        html += "<td>" + element['OrderID'] + "</td>";
        html += "<td>" + element['ShipAddress'] + "</td>";
        html += "<td>" + element['ShipCity'] + "</td>";
        html += "<td>" + element['ShipName'] + "</td>";
        html += "<td>" + element['ShipPostcode'] + "</td>";
        html += "<td>" + element['ShippedDate'] + "</td>";
        html += "</tr>";
      });
      html += "</table>";
      orders_placed.innerHTML = html;
    }
  });
}

function getCustomerList(){
  $.ajax({
        type: 'GET',
        url: website + "getOrdersForCustomer/",
        dataType: 'json',
        success: function(data){
          var html = "<table>\n"
          html += "<tr>";
          html += "<th>City</th>";
          html += "<th>Customer ID</th>";
          html += "<th>Company Name</th>";
          html += "</tr>";
          data['GetAllCustomersResult'].forEach(function(element){
            html += "<tr>";
            html += "<td>" + element['City'] + "</td>";
            html += "<td>" + element['CustomerID'] + "</td>";
            html += "<td>" + element['CompanyName'] + "</td>";
            html += "</tr>";
          });
          html += "</table>";
          customer_list.innerHTML = html;
        }
      });
