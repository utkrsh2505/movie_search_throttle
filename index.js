var sId;
var display;
function fetchData(){
    let name = document.getElementById("search").value;
    if(name.length<=2){
       if(display){
           display.textContent = "";
       }
        return;
    }
return fetch(`http://www.omdbapi.com/?s=${name}}&apikey=fec0d041`)
.then(function(response){
    return response.json();
})
.then(function(response){
// console.log(response)
    Search(response.Search);
 })
 .catch(function(){
    // alert("not found");
    // return;
 })
 }
 function Search(data){
      display =document.getElementById("display");
     display.textContent="";
    //console.log(data[0].Title);
   for(let i=0; i<data.length; i++){
    console.log(data[0].Title);

       var div = document.createElement("div");
       div.setAttribute("class","sugg_div");
       var title = `${data[i].Title}`
       let p = document.createElement("P");
       p.textContent=title
       div.append(p);
       display.append(div);
     
   }
}
function throttle(){
    if(sId){
        return
    }
  sId =setTimeout(function(){
  //  Search();
  fetchData();
  sId = undefined;
},2000)

}
window.addEventListener("load",function(){
   let search =  document.getElementById("search");
   search.addEventListener("input",throttle);
})