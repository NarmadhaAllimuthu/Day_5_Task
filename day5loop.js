var json=[{
    "shopdetails":{
      "shopname":"sweety life",
      "location":"chennai",
    }, 
    "mangerdetails":{
      "name":"Naveen",
      "qualification":"B.E",
      "age":"23",
    },
    "sweetcategory":{
      "solid":["gulobjamun","mysorepak","rasajula"],
      "liquid":["grapes juices","stawberry mix"],
      "soap":["fruit soap","ice soap"],
    }
    
  }];
  console.log(json);
  //for loop
  for(var i=0;i<json.length;i++){
  let a=json[i];
  console.log(a.shopdetails);
  console.log(a.mangerdetails);
  console.log(a.sweetcategory);
  }
   //for in
for(var b in json){
    console.log(b,json[b].shopdetails);
    console.log(b,json[b].mangerdetails);
    console.log(b,json[b].sweetcategory);
  }
  //for of
  for(var c of json){
    console.log(c.shopdetails);
    console.log(c.mangerdetails);
    console.log(c.sweetcategory);
  }
  //for Each
  json.forEach((element)=>console.log(element));