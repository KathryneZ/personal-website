const expenseBtn = document.getElementById("ExpenseBtn")
const incomeBtn = document.getElementById("IncomeBtn")
const popupWrapper = document.getElementById("popupWrapper")
const popup = document.getElementById("popup")
const cancelBtn = document.getElementById("cancelBtn")
const formTitle = document.getElementById("formTitle")
const transactionForm = document.getElementById("transaction")

const categoryPopupWrapper = document.getElementById("categoryPopupWrapper")
const categoryPopup = document.getElementById("categoryPopup")
const categoryTitle = document.getElementById("categoryTitle")
const recordList = document.getElementById("recordList")
const hueSlider = document.getElementById("hueSlider")
const brightnessSlider = document.getElementById("brightnessSlider")
const saturationSlider = document.getElementById("saturationSlider")
const closeCategoryPopup = document.getElementById("closeCategoryPopup")
const applyColorBtn = document.getElementById("applyColorBtn")

const moodPopupWrapper = document.getElementById("moodPopupWrapper")
const moodPopup = document.getElementById("moodPopup")
const moodBtns = document.querySelectorAll(".moodBtn")
const moodCancel = document.getElementById("moodCancel")

const expenseCat = document.getElementById("expenseCat")
const incomeCat = document.getElementById("incomeCat")

const calendarGrid = document.getElementById("calendarGrid")

let categoryData = {}
let selectedCategoryDiv = null
let currentType = ""
let currentCell = null
let selectedMood = ""

// Top Buttons
expenseBtn.addEventListener("click", function () {
  formTitle.textContent = "Add Expense"
  currentType = "expense"
  popupWrapper.classList.remove("temporary")
})

incomeBtn.addEventListener("click", function () {
  formTitle.textContent = "Add Income"
  currentType = "income"
  popupWrapper.classList.remove("temporary")
})

cancelBtn.addEventListener("click", function () {
  popupWrapper.classList.add("temporary")
})

// Transaction Submit
transactionForm.addEventListener("submit", function (event) {
  event.preventDefault()
  const amount = parseFloat(document.getElementById("amount").value)
  const category = document.getElementById("category").value.toUpperCase()
  const description = document.getElementById("description").value
  const date = document.getElementById("date").value
  const entry = { amount, description, date }

  if (!categoryData[category]) {
    categoryData[category] = {
      type: currentType,
      color: "",
      records: []
    }
    addCategoryBlock(category)
  }

  categoryData[category].records.push(entry)
  updateCategoryDisplay(category)
  transactionForm.reset()
  popupWrapper.classList.add("temporary")
})

// Category Block Creation
function addCategoryBlock(category) {
  const block = document.createElement("div")
  block.className = "categoryBlock"
  block.id = "block-" + category
  block.textContent = category + " - Total: $0.00"

  block.addEventListener("click", function () {
    selectedCategoryDiv = block
    categoryTitle.textContent = category
    renderCategoryRecords(category)
    categoryPopupWrapper.classList.remove("temporary")

    const color = categoryData[category].color
    if (color) {
      categoryPopup.style.backgroundColor = color
    }
  })

  if (categoryData[category].type === "expense") {
    expenseCat.appendChild(block)
  } else {
    incomeCat.appendChild(block)
  }
}

// Update Total
function updateCategoryDisplay(category) {
  const block = document.getElementById("block-" + category)
  const total = categoryData[category].records.reduce(function (sum, r) {
    return sum + r.amount
  }, 0)
  block.textContent = category + " - Total: $" + total.toFixed(2)
}

// Render Detail + Bind Sliders
function renderCategoryRecords(category) {
  recordList.innerHTML = ""
  categoryData[category].records.forEach(function (entry) {
    const li = document.createElement("li")
    li.textContent = "$" + entry.amount.toFixed(2) + " - " + entry.description + " (" + entry.date + ")"
    recordList.appendChild(li)
  })

  hueSlider.oninput = applyColor
  brightnessSlider.oninput = applyColor
  saturationSlider.oninput = applyColor
}

function applyColor() {
  const h = hueSlider.value
  const b = brightnessSlider.value
  const s = saturationSlider.value
  categoryPopup.style.backgroundColor = "hsl(" + h + ", " + s + "%, " + b + "%)"
}

closeCategoryPopup.addEventListener("click", function () {
  categoryPopupWrapper.classList.add("temporary")
})

applyColorBtn.addEventListener("click", function () {
  if (!selectedCategoryDiv) return
  const h = hueSlider.value
  const b = brightnessSlider.value
  const s = saturationSlider.value
  const hslColor = "hsl(" + h + ", " + s + "%, " + b + "%)"
  selectedCategoryDiv.style.backgroundColor = hslColor
  categoryPopup.style.backgroundColor = hslColor
  categoryData[categoryTitle.textContent].color = hslColor
})

// Calendar
function generateCalendar() {
  for (var day = 1; day <= 30; day++) {
    var cell = document.createElement("div")
    cell.className = "calendarCell"
    cell.dataset.day = day
    cell.innerHTML = day

    cell.addEventListener("click", function (event) {
      currentCell = event.target
      moodPopupWrapper.classList.remove("temporary")
      for (var i = 0; i < moodBtns.length; i++) {
        moodBtns[i].classList.remove("selected")
      }
      selectedMood = ""
    })

    calendarGrid.appendChild(cell)
  }
}
generateCalendar()

moodBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    for (var i = 0; i < moodBtns.length; i++) {
      moodBtns[i].classList.remove("selected")
    }
    btn.classList.add("selected")
    selectedMood = btn.dataset.mood
  })
})

document.getElementById("moodSubmit").addEventListener("click", function () {
  const moodColors = {
    angry: "#F25F5C",
    happy: "#FFE066",
    indifferent: "#A0A0A0",
    upset: "#70C1B3"
  }

  const moodEmojis = {
    angry: "😡",
    happy: "😆",
    indifferent: "😐",
    upset: "😭"
  }

  if (currentCell && selectedMood) {
    const day = currentCell.dataset.day
    currentCell.innerHTML = moodEmojis[selectedMood] + "<br>" + day
    currentCell.style.backgroundColor = moodColors[selectedMood]
    moodPopupWrapper.classList.add("temporary")
    for (var i = 0; i < moodBtns.length; i++) {
      moodBtns[i].classList.remove("selected")
    }
    selectedMood = ""
  }
})

moodCancel.addEventListener("click", function () {
  moodPopupWrapper.classList.add("temporary")
  for (var i = 0; i < moodBtns.length; i++) {
    moodBtns[i].classList.remove("selected")
  }
  selectedMood = ""
})
