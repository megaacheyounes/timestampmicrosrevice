var ex = require('express');
var router  = ex.Router();


router.get('/timestamp/:d?',(req,res)=>{
      
  var d= req.params.d;
  var date;
  var dateRegex = /[0-9]{4}-(0[0-9]|1[0-2])-([0-2][0-9]|3[0-1])/;
  var timestampRegex = /[0-9]+/;
  
  if(d){
    
      if(dateRegex.test(d)){
        date = new Date(d);
        console.log('date detected');
      }else{
      if(timestampRegex.test(d)){
        date = new Date(d*1000);
        
         console.log('timestamp detected');

      }     else{
        return  res.send({"error" : "Invalid Date" }); 
      }
    }
  }else{
     date = new Date();
  }  
  console.log('date',date,d);
  var json ={
    'unix': date.getTime() ,
    'utc':date.toUTCString()
  };
  
  res.json(json);
  
});

module.exports = router;

