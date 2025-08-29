const dropdown = document.getElementById("moduleDropdown")
const infoBox = document.getElementById("moduleInfo")
const moduleListUrl = "https://api.nusmods.com/v2/2024-2025/moduleList.json"
const moduleDetailBase = "https://api.nusmods.com/v2/2024-2025/modules/"

//Fetch module list
fetch(moduleListUrl)
.then(handleModuleList)
.catch(handleError)
.finally(function(){
  console.log("Module list fetch attempt complete")
})

//Handle the module list
function handleModuleList(response){
  return response.json()
  .then(filterNMCourses)
}

//Filter for NM-coded courses
function filterNMCourses(data){
  const filtered = data.filter(function(mod){
    return mod.moduleCode.indexOf("NM") === 0
  })

  filtered.forEach(function(mod){
    const opt = document.createElement("option")
    opt.value = mod.moduleCode
    opt.textContent = mod.moduleCode + " - " + mod.title
    dropdown.appendChild(opt)
  })

}

//On select, fetch detailed course info
dropdown.addEventListener("change", function(){
  const code = dropdown.value
  if (code === "") return

  fetch(moduleDetailBase + code + ".json")
  .then(handleModuleDetail)
  .catch(handleError)
  .finally(function(){
    console.log("fetch attempt for detail done")
  })

})

//course detail
function handleModuleDetail(response){
  return response.json()
  .then(displayModuleInfo)
}

//Display info
function displayModuleInfo(data){
  const semOne = data.semesterData.find(function(sem){
    return sem.semester === 1
  })

  if (!semOne || semOne.timetable.length === 0){
    infoBox.innerHTML = "<p>No Semester 1 lessons found</p>"
    return
  }

  let html = "<h2>" + data.moduleCode + " - " + data.title + "</h2>"

  semOne.timetable.forEach(function(lesson, index){
    html += "<div class='card'>"
    html += "<strong>Class " + (index + 1) + " (" + lesson.classNo + ")</strong><br>"
    html += "Type: " + lesson.lessonType + "<br>"
    html += "Day: " + lesson.day + "<br>"
    html += "Time: " + lesson.startTime + " - " + lesson.endTime + "<br>"
    html += "Venue: " + lesson.venue + "<br>"
    html += "</div><br>"
  })
  infoBox.innerHTML = html

}

//Error handler
function handleError(err){
  console.log("Something went wrong: " + err)
}



