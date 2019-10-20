// Write your JavaScript code here!
<script>
        window.addEventListener("load", function() {
            document.querySelector("form").addEventListener("submit", function(event) {
                if(document.querySelector("input [name=pilotName]".value==="") {
                    alert("All fields are required");
                    event.preventDefault();

                });

            });

        });
    
    
    
    
    </script>
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
