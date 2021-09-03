const uplad = document.querySelector("#upload");
const clickkk = document.querySelector("#click");
const img = document.querySelector("#img");




function aded(){
    uplad.click();
}
uplad.addEventListener("change",function(){
    const file = this.files[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = function(){
        const result = reader.result;
        img.src = result;
        }
    
        reader.readAsDataURL(file);
    }
});




/*****Apex Chart */
let category_options = {
  series: [{
  name: 'series1',
  data: [1, 40, 28, 51, 42, 109, 60]
  },{
  name: 'series2',
  data: [11, 32, 45, 32, 34, 52, 41]
  },{
    name: 'series3',
    data: [5, 0, 10, 0, 20, 10, 30]
    },{
      name: 'series4',
      data: [0, 30, 20, 30, 10, 5, 20]
      }],
  chart: {
  height: 350,
  type: 'area'
  },
  dataLabels: {
  enabled: false
  },
  stroke: {
  curve: 'smooth'
  },
  xaxis: {
  type: 'datetime',
  categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
  x:{
    format: 'dd/MM/yy HH:mm'
    },
  },
};
let category_chart = new ApexCharts(document.querySelector(".category-chart"), category_options);
category_chart.render();

/*****dark mood */
const button = document.querySelector(".darkmood");
const theem = document.querySelector("i.fas.fa-palette");
const usr = document.querySelector(".usr-id.idd");

theem.addEventListener('click', function (){
  button.classList.toggle('palette')
  
});

const span = document.querySelector("span");
const category = document.querySelector("button");
const dark_background = document.querySelector(".dark_background");
const background = document.querySelector(".min-background");
const back = document.querySelector(".back");
const icon = document.querySelectorAll(".icon");
const allcustomer = document.querySelector(".all-customer");
const allcustome = document.querySelector("#all-customer");
const name_id = document.querySelectorAll(".name_id");
const idd = document.querySelectorAll(".usr-id");
const box = document.querySelectorAll(".box");




/***box color*** */
const redone = document.querySelectorAll(".cheng");
// const redtow = document.querySelector(".latest-order .tow");
// const redthree = document.querySelector(".latest-order .three");
// const redfour = document.querySelector(".latest-order .four");

category.addEventListener('click', function () {
  category.classList.toggle("sub_button");
  dark_background.classList.toggle("dark_backgroundd");
  category.classList.toggle("dark2");
  background.classList.toggle("min-backgroundd");
  back.classList.toggle("min-backgroundd");

  idd.forEach(function(idd) {
    idd.classList.toggle("cheng_color");
   });
   redone.forEach(function(redone) {
    redone.classList.toggle("cheng_background");
   });


  icon.forEach(function(icon) {
    icon.classList.toggle("iconn");
   });
   id_name.forEach(function(singelname) {
    singelname.classList.toggle("cheng_background ");
   });


  allcustomer.classList.toggle("min-backgroundd");
  allcustome.classList.toggle("min-backgroundd");
  usrid.classList.toggle("boxx");
  
  
   name_id.forEach(function(singelname_id) {
    singelname_id.classList.toggle("namespan");
   });

 box.forEach(function(singel) {
  singel.classList.toggle("boxx");
 })

 
});
  
/****Color red*** */
const red = document.querySelector("#red");
const bred = document.querySelector("b.red");
const new_button = document.querySelectorAll(".new_button");
const buttonn = document.querySelector("button");


new_button.forEach((element) =>{
  element.addEventListener('click',function(){
    if (element.classList.contains("bb_rgb")) {
      element.classList.toggle("bb_rgb");
    }else{
      new_button.forEach((s_minmenu) =>{
            s_minmenu.classList.remove("bb_rgb");
        })
        element.classList.toggle("bb_rgb")
    }
  })
});


red.addEventListener('click', function () {

  bred.classList.toggle("b_red");
  b_green.classList.remove("b_green");
  b_rgb.classList.remove("b_rgb");

  redone.forEach(function(reddd) {
    reddd.classList.toggle("reddd");
   });
  icon.forEach(function(icon2) {
    icon2.classList.toggle("reddd");
   });
   box.forEach(function(singel2) {
    singel2.classList.toggle("reddd");
   });
//////////////All remove/////////////
   redone.forEach(function(redone) {
    redone.classList.remove("rgbb");
   });
  icon.forEach(function(icon) {
    icon.classList.remove("rgbb");
   });
   box.forEach(function(singel) {
    singel.classList.remove("rgbb");
   });


   redone.forEach(function(greenn) {
    greenn.classList.remove("greenn");
   });
  icon.forEach(function(icon2) {
    icon2.classList.remove("greenn");
   });
   box.forEach(function(singel2) {
    singel2.classList.remove("greenn");
   })

});
  
/****Color green****/
const green = document.querySelector("#green");
const b_green = document.querySelector("b.green");

green.addEventListener('click', function () {
  bred.classList.remove("b_red");
  b_green.classList.toggle("b_green");
  b_rgb.classList.remove("b_rgb");



  redone.forEach(function(greenn) {
    greenn.classList.toggle("greenn");
   });
  icon.forEach(function(icon1) {
    icon1.classList.toggle("greenn");
   });
   box.forEach(function(singel1) {
    singel1.classList.toggle("greenn");
   });
//////////////All remove/////////////
   redone.forEach(function(redone) {
    redone.classList.remove("reddd");
   });
  icon.forEach(function(icon) {
    icon.classList.remove("reddd");
   });
   box.forEach(function(singel) {
    singel.classList.remove("reddd");
   });


   redone.forEach(function(rgbb) {
    rgbb.classList.remove("rgbb");
   });
  icon.forEach(function(icon2) {
    icon2.classList.remove("rgbb");
   });
   box.forEach(function(singel2) {
    singel2.classList.remove("rgbb");
   })

});
  

/**Color rgb***/

const rgb = document.querySelector("#rgb");
const b_rgb = document.querySelector("b.rgb");

rgb.addEventListener('click',function(){
  bred.classList.remove("b_red");
  b_green.classList.remove("b_green");
  b_rgb.classList.toggle("b_rgb");



  redone.forEach(function(rgbb) {
    rgbb.classList.toggle("rgbb");
   });
  icon.forEach(function(icon2) {
    icon2.classList.toggle("rgbb");
   });
   box.forEach(function(singel2) {
    singel2.classList.toggle("rgbb");
   });
//////////////All remove/////////////
   redone.forEach(function(redone) {
    redone.classList.remove("reddd");
   });
  icon.forEach(function(icon) {
    icon.classList.remove("reddd");
   });
   box.forEach(function(singel) {
    singel.classList.remove("reddd");
   });


   redone.forEach(function(greenn) {
    greenn.classList.remove("greenn");
   });
  icon.forEach(function(icon2) {
    icon2.classList.remove("greenn");
   });
   box.forEach(function(singel2) {
    singel2.classList.remove("greenn");
   })

});
