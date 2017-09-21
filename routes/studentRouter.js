var express = require('express');
var studentDB = require('../db/studentDB');

var studentRouter = express.Router();
studentRouter.get("/findAll",function(req,resp){
  //console.log(req.body);
  resp.writeHead(200,'ok',{
    "Content-Type":"text/plain;charset=utf-8",
    "Access-Control-Allow-Origin":"*"
  });

  studentDB.findAll(function(results){
    resp.write(JSON.stringify(results));
    resp.end(); 
  });
    
});
studentRouter.post("/login",function(req,resp){
  resp.send("登录成功！");
});
//
studentRouter.post("/batchDelete",function(req,resp){
    var ids=req.body;
    studentDB.batchDelete(ids,function(result){
      resp.json(result);
    });
});
  studentRouter.get("/testJSONP",function(req,resp){
  var data = [{name:"larry"},{name:"terry"}]
  var cb = req.query.cb;
  resp.send(cb+'.call(this,'+JSON.stringify(data)+')');
});

module.exports = studentRouter;
