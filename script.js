function getCurrentDayOfWeek() {
    var today = new Date();
    var dayOfWeek = today.getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[dayOfWeek];
  }
  
  function getCurrentUTCTime() {
    return new Date().getTime();
  }
document.getElementById("currentDayOfTheWeek").innerHTML = getCurrentDayOfWeek();
document.getElementById("currentUTCTime").innerHTML = getCurrentUTCTime();