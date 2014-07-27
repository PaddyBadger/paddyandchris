var example = require("./example");
var async = require("async");
var jsonData;

var guests = [{guestname: "taylors", guesttype:"weddingparty"}, {guestname:"pols", guesttype:"weddingparty"}]

module.exports = { get_info: function(search_name, cbf)
  {
 
    var name = search_name;

    for (i = 0; i < guests.length ; i++)
    {
      if (guests[i].guestname === name)
      {
        console.log("guest " + guests[i]);
        cbf(i);  
      //  window.location.replace("the_big_day");
      } 
    }
  }
}

function cbf(i)
  {
      console.log("do I get called?");
     return guests[i];
   };