var self = {};

(function(){
  if(typeof Java != 'undefined'){
    var System = Java.type('java.lang.System');
    console = {};
    console.log = function(str){
       System.out.println(str);
    }
   } 
})();