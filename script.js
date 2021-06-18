// Write your JavaScript code here!
 
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
         const div = document.getElementById("missionTarget");
         div.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diamiter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance: ${json[3].distance}</li>
               <li>Moons: ${json[3].moons}
            </ol>
            <img src="${json[3].image}">
         `;
      });
   });
});
 
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
       event.preventDefault();
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
                                   
          if(pilotNameInput.value === ""||!isNaN(pilotNameInput.value)||
          copilotNameInput.value === ""||!isNaN(copilotNameInput.value)||
          fuelLevelInput.value === ""||isNaN(fuelLevelInput.value)||fuelLevelInput.value < 0||
          cargoMassInput.value === ""||isNaN(cargoMassInput.value)||cargoMassInput.value < 0){
               alert("All fields are required");
              
           } else if(fuelLevelInput.value < 10000 || cargoMassInput.value > 10000){
               faultyItems.style.visibility = "visible";
               launchStatus.style.color = 'red';                                    
               let launchStatusUpdate = document.getElementById("launchStatus");
               launchStatusUpdate.innerHTML ="Shuttle not ready for launch";
               let pilotStatusUpdate = document.getElementById("pilotStatus");
               pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
               let copilotStatusUpdate = document.getElementById("copilotStatus");
               copilotStatusUpdate.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;

               if(fuelLevelInput.value < 10000){
                     let fuelStatusUpdate = document.getElementById("fuelStatus");
                     fuelStatusUpdate.innerHTML ="Fuel level too low for launch";
               }
               if (cargoMassInput.value > 10000){
                   let cargoStatusUpdate = document.getElementById("cargoStatus");
                   cargoStatusUpdate.innerHTML ="Cargo Mass is too large for launch";
               }

           } else {
               faultyItems.style.visibility = "visible";
               launchStatus.style.color = 'green';
               let pilotStatusUpdate = document.getElementById("pilotStatus");
               pilotStatusUpdate.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
               let copilotStatusUpdate = document.getElementById("copilotStatus");
               copilotStatusUpdate.innerHTML = `Pilot ${copilotNameInput.value} is ready for launch`;
               let launchStatusUpdate = document.getElementById("launchStatus");
               launchStatusUpdate.innerHTML ="Shuttle is ready for launch";
           } 
   })
})

//x