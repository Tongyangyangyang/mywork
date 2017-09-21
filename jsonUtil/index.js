function encodeFormData(data){
  if(!data){return "";} 
  var pairs = [];
  for(var name in data){
    if(!data.hasOwnProperty(name) || typeof data[name] == "function"){
      continue;
    }
    var value = data[name].toString();
    name = encodeURIComponent(name).replace("%20","+");// 编码
    value = encodeURIComponent(value).replace("%20","+");// 编码
    pairs.push(name+"="+value);
  }
  return pairs.join('&');
}