// first column products loop function
  let row1 = $("#cakes");
 let col1 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.cakes, function (key, value) {
             col1 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row1.html(col1);
     }
 })
   // second column products loop function
   let row2 = $("#biscuits");
 let col2 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.biscuits, function (key, value) {
             col2 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" src="`
                 + value.image + `" height="250px">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row2.html(col2);
     }
 })
  // third column products loop function
  let row3 = $("#bread");
 let col3 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.bread, function (key, value) {
             col3 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row3.html(col3);
     }
 })
  // fourth column products loop function
  let row4 = $("#brownies");
 let col4 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.brownies, function (key, value) {
             col4 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row4.html(col4);
     }
 })
  // five column products loop function
  let row5 = $("#buns-and-rusk");
 let col5 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.bunsAndRusk, function (key, value) {
             col5 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row5.html(col5);
     }
 })
     // six column products loop function
     let row6 = $("#cup-cakes");
 let col6 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.cupCakes, function (key, value) {
             col6 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row6.html(col6);
     }
 })
 // seven column products loop function
 let row7 = $("#desserts-and-pastry");
 let col7 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.desserts, function (key, value) {
             col7 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row7.html(col7);
     }
 })
 // eight column products loop function
 let row8 = $("#grab-and-go");
 let col8 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.grab, function (key, value) {
             col8 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row8.html(col8);
     }
 })
 // nine column products loop function
 let row9 = $("#puffs-and-hi-tea");
 let col9 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.puffs, function (key, value) {
             col9 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row9.html(col9);
     }
 })
 // ten column products loop function
 let row10 = $("#savoury");
 let col10 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.savoury, function (key, value) {
             col10 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row10.html(col10);
     }
 })
 // eleven column products loop function
 let row11 = $("#tarts-and-cookies");
 let col11 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.tarts, function (key, value) {
             col11 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row11.html(col11);
     }
 })
 // twelve column products loop function
 let row12 = $("#merchandise");
 let col12 = "";
 $.ajax({
     url: "/data/products2.json",
     type: "get",
     success: function (data) {
         $.each(data.merchandise, function (key, value) {
             col12 += `
           <div class="col-md-4 mt-4">
         <div class="card">
             <img class="card-img-top" height="250px" src="`
                 + value.image + `">
<div class="card-body">
<h4 class="card-title">
 `+ value.name + `

</h4>
<h5 class="card-title">`+ value.price + `</h5>


</div>
             
</div>
</div>
`
         })
         row12.html(col12);
     }
 })
 
