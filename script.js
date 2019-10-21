// Write your JavaScript code here!


window.addEventListener("load", function() {

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const div=document.getElementById("missionTarget").innerHTML=`
         <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth: ${json[0].distance}</li>
   <li>Number of Moons: ${json[0].moons}</li>
</ol>
<img src="${json[Math.floor(Math.random()*6)].image}"></img>`

      });

   });





   
   document.querySelector("form").addEventListener("submit", function(event) {

      
      if(document.getElementById("pilotName").value==="" || document.querySelector("input[name=copilotName]").value==="" || document.querySelector("input[name=fuelLevel]").value==="" || document.querySelector("input[name=cargoMass]").value==="") {
                    alert("All fields are required");
                    event.preventDefault();
                    return;

      };

      if(!isNaN(document.querySelector("input[name=pilotName]").value)) {
                  alert("Pilot`s name should be a string");
                  event.preventDefault();
                  return;

      };

      if(!isNaN(document.querySelector("input[name=copilotName]").value)) {
                  alert("Copilot`s name should be a string");
                  event.preventDefault();
                  return;

      };

      if(isNaN(document.querySelector("input[name=fuelLevel]").value)) {
                  alert("Fuel level should be a number");
                  event.preventDefault();
                  return;
      };

      if(isNaN(document.querySelector("input[name=cargoMass]").value)) {
                  alert("Cargo mass should be a number");
                  event.preventDefault();
                  return;
                  
      };

      //event.preventDefault();
      document.getElementById("pilotStatus").innerHTML=`Pilot ${document.querySelector("input[name=pilotName]").value} Ready`;
      document.getElementById("copilotStatus").innerHTML=`Co-Pilot ${document.querySelector("input[name=copilotName]").value} Ready`;

      if(Number(document.querySelector("input[name=fuelLevel]").value)>=10000 && Number(document.querySelector("input[name=cargoMass]").value)<=10000 && document.getElementById("pilotName").value!=="" && document.querySelector("input[name=copilotName]").value!=="") {
         document.getElementById("launchStatus").style.color="green";
         document.getElementById("launchStatus").innerHTML="Shuttle is ready for launch";
         document.getElementById("faultyItems").style.visibility="hidden";
         event.preventDefault();

      } else if(Number(document.querySelector("input[name=fuelLevel]").value)<10000 && Number(document.querySelector("input[name=cargoMass]").value)>10000) {
         document.getElementById("faultyItems").style.visibility="visible";
         document.getElementById("fuelStatus").innerHTML="There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
         document.getElementById("cargoStatus").innerHTML="Too much mass for the shuttle to take off";
         document.getElementById("launchStatus").style.color="red";
         event.preventDefault();

      } else if(Number(document.querySelector("input[name=fuelLevel]").value)>10000 && Number(document.querySelector("input[name=cargoMass]").value)>10000) {
         document.getElementById("faultyItems").style.visibility="visible";
         document.getElementById("cargoStatus").innerHTML="Too much mass for the shuttle to take off";
         document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color="red";
         document.getElementById("fuelStatus").innerHTML="Fuel level high enough for launch";
         event.preventDefault();
      
      } else if(Number(document.querySelector("input[name=fuelLevel]").value)<10000 && Number(document.querySelector("input[name=cargoMass]").value)<10000) {
         document.getElementById("faultyItems").style.visibility="visible";
         document.getElementById("cargoStatus").innerHTML="Cargo mass low enough for launch";
         document.getElementById("fuelStatus").innerHTML="There is not enough fuel for the journey";
         document.getElementById("launchStatus").innerHTML="Shuttle not ready for launch";
         document.getElementById("launchStatus").style.color="red";
         event.preventDefault();
      };
      
      //event.preventDefault();

      
            
   });

});






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
