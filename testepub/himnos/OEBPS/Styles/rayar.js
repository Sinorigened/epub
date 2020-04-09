 <script type="text/javascript"> 
  paper.install(window); 
  window.onload = function() 
  { 
   paper.setup('myCanvas'); 
   // Create a simple drawing tool: 
   var tool = new Tool(); 
   var path; 
 
   // Define a mousedown and mousedrag handler 
   tool.onMouseDown = function(event) 
   { 
    path = new Path(); 
    path.strokeColor = 'blue'; 
    path.add(event.point); 
   } 
 
   tool.onMouseDrag = function(event) 
   { 
    path.add(event.point); 
   } 
  } 
 </script> 
