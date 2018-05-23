
function bye(obj) {
  var result = [];
  result.push(Object.keys(obj).filter((e => e !== 'children')).join(', '));
  
  function hi(obj) {
  
  var temp = [];
  for(var key in obj) {
    if(key !== "children"){
    temp.push(obj[key]);
      }
  }
  result.push(temp.join(','));
      if(obj.children.length) {
        for(let i = 0; i < obj.children.length;i++) {
          hi(obj.children[i]);
              }
          }
      }
  hi(obj);
  
  return result.join('\n');
  }

  //module.exports = bye;
