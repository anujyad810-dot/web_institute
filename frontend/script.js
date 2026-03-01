function generateID() {
    const appID = "APP" + Math.floor(1000 + Math.random() * 9000);
    alert("Your Application ID: " + appID + 
          "\nPlease save this for future reference.");
}