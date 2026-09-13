// Flexbox Learning Game - Core Logic (Skeleton)

// 1. Definition of Levels
const levels = [
  {
    id: 1,
    instruction: "סדרו את הפריטים בשורה במרכז הלוח אופקית.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  },
  {
    id: 2,
    instruction: "סדרו את הפריטים בשורה בתחתית הלוח.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  },
  {
    id: 3,
    instruction: "סדרו את הפריטים בטור מלמעלה למטה במקום בשורה.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    }
  },
  {
    id: 4,
    instruction: "סדרו את כל הפריטים בשורה, במרווח שווה ביניהם ובתחתית הלוח.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  },
  {
    id: 5,
    instruction: "סדרו את הפריטים מלמעלה למטה ומרכזו אותם לרוחב הלוח.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  },
  {
    id: 6,
    instruction: "אפשרו לפריטים לגלוש לשורה הבאה ופזרו אותם במרווח שווה מסביב.",
    itemCount: 5,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }
  },
  {
    id: 7,
    instruction: "סדרו את הפריטים בטור בסדר הפוך, במרכז הלוח אנכית ובקצה הלוח אופקית.",
    itemCount: 3,
    initial: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flexWrap: "nowrap"
    },
    target: {
      flexDirection: "column-reverse",
      justifyContent: "center",
      alignItems: "flex-end",
      flexWrap: "nowrap"
    }
  }
];

// 2. Application State
let currentLevelIndex = 0;
const completedLevels = new Set();

// 3. DOM Elements
const levelTitleEl = document.getElementById("level-title");
const levelInstructionEl = document.getElementById("level-instruction");
const levelNavEl = document.getElementById("level-nav");

const targetContainer = document.getElementById("target-container");
const playerContainer = document.getElementById("player-container");

const selectFlexDirection = document.getElementById("select-flex-direction");
const selectJustifyContent = document.getElementById("select-justify-content");
const selectAlignItems = document.getElementById("select-align-items");
const selectFlexWrap = document.getElementById("select-flex-wrap");

const btnCheck = document.getElementById("btn-check");
const btnReset = document.getElementById("btn-reset");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const feedbackMessageEl = document.getElementById("feedback-message");

// 4. Helper Functions
function getSelectedValues() {
  return {
    flexDirection: selectFlexDirection.value,
    justifyContent: selectJustifyContent.value,
    alignItems: selectAlignItems.value,
    flexWrap: selectFlexWrap.value
  };
}

function applyPlayerStyles(styles) {
  playerContainer.style.flexDirection = styles.flexDirection;
  playerContainer.style.justifyContent = styles.justifyContent;
  playerContainer.style.alignItems = styles.alignItems;
  playerContainer.style.flexWrap = styles.flexWrap;
}

function applyTargetStyles(styles) {
  targetContainer.style.flexDirection = styles.flexDirection;
  targetContainer.style.justifyContent = styles.justifyContent;
  targetContainer.style.alignItems = styles.alignItems;
  targetContainer.style.flexWrap = styles.flexWrap;
}

function setSelectValues(styles) {
  selectFlexDirection.value = styles.flexDirection;
  selectJustifyContent.value = styles.justifyContent;
  selectAlignItems.value = styles.alignItems;
  selectFlexWrap.value = styles.flexWrap;
}

function showFeedback(type, text) {
  feedbackMessageEl.className = `feedback-message ${type}`;
  feedbackMessageEl.textContent = text;
}

function clearFeedback() {
  feedbackMessageEl.className = "feedback-message";
  feedbackMessageEl.textContent = "";
}

// 5. Render Level Navigation
function renderLevelNav() {
  levelNavEl.innerHTML = "";
  levels.forEach((level, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "level-btn";
    btn.textContent = `שלב ${index + 1}`;
    if (index === currentLevelIndex) {
      btn.classList.add("active");
    }
    if (completedLevels.has(index)) {
      btn.classList.add("completed");
    }
    btn.addEventListener("click", () => {
      loadLevel(index);
    });
    levelNavEl.appendChild(btn);
  });
}

// 6. Load Level
function loadLevel(index) {
  currentLevelIndex = index;
  const level = levels[currentLevelIndex];

  // Update Indicator and Instructions
  levelTitleEl.textContent = `שלב ${level.id} מתוך ${levels.length}`;
  levelInstructionEl.textContent = level.instruction;

  // Render Target Items & Player Items
  targetContainer.innerHTML = "";
  playerContainer.innerHTML = "";

  for (let i = 1; i <= level.itemCount; i++) {
    const targetItem = document.createElement("div");
    targetItem.className = "target-item";
    targetItem.textContent = i;
    targetContainer.appendChild(targetItem);

    const playerItem = document.createElement("div");
    playerItem.className = "player-item";
    playerItem.textContent = i;
    playerContainer.appendChild(playerItem);
  }

  // Apply styles to target container
  applyTargetStyles(level.target);

  // Set controls to initial values
  setSelectValues(level.initial);
  applyPlayerStyles(level.initial);

  // Clear feedback
  clearFeedback();

  // Update button states
  btnPrev.disabled = currentLevelIndex === 0;
  btnNext.disabled = !completedLevels.has(currentLevelIndex) || currentLevelIndex === levels.length - 1;

  // Refresh nav buttons
  renderLevelNav();
}

// 7. Verify Solution
function isSolutionCorrect() {
  const level = levels[currentLevelIndex];
  const user = getSelectedValues();
  const target = level.target;

  // Check 1: Direct property match
  const propertiesMatch = (
    user.flexDirection === target.flexDirection &&
    user.justifyContent === target.justifyContent &&
    user.alignItems === target.alignItems &&
    user.flexWrap === target.flexWrap
  );

  if (propertiesMatch) {
    return true;
  }

  // Check 2: Visual bounding box alignment (handles alternative valid CSS combinations)
  const playerItems = playerContainer.querySelectorAll(".player-item");
  const targetItems = targetContainer.querySelectorAll(".target-item");

  if (playerItems.length === 0 || playerItems.length !== targetItems.length) {
    return false;
  }

  for (let i = 0; i < playerItems.length; i++) {
    const pRect = playerItems[i].getBoundingClientRect();
    const tRect = targetItems[i].getBoundingClientRect();

    const diffX = Math.abs(pRect.left - tRect.left);
    const diffY = Math.abs(pRect.top - tRect.top);

    // Tolerance of 3px for sub-pixel rendering differences
    if (diffX > 3 || diffY > 3) {
      return false;
    }
  }

  return true;
}

// 8. Event Listeners
function handleControlChange() {
  applyPlayerStyles(getSelectedValues());
  clearFeedback();
}

selectFlexDirection.addEventListener("change", handleControlChange);
selectJustifyContent.addEventListener("change", handleControlChange);
selectAlignItems.addEventListener("change", handleControlChange);
selectFlexWrap.addEventListener("change", handleControlChange);

btnCheck.addEventListener("click", () => {
  const correct = isSolutionCorrect();
  if (correct) {
    completedLevels.add(currentLevelIndex);
    showFeedback("success", "כל הכבוד! הפתרון נכון. באפשרותכם להתקדם לשלב הבא.");
    if (currentLevelIndex < levels.length - 1) {
      btnNext.disabled = false;
    }
    renderLevelNav();
  } else {
    showFeedback("error", "הפתרון שגוי. הפריטים אינם במיקום המבוקש, המשיכו לנסות!");
  }
});

btnReset.addEventListener("click", () => {
  const level = levels[currentLevelIndex];
  setSelectValues(level.initial);
  applyPlayerStyles(level.initial);
  clearFeedback();
});

btnPrev.addEventListener("click", () => {
  if (currentLevelIndex > 0) {
    loadLevel(currentLevelIndex - 1);
  }
});

btnNext.addEventListener("click", () => {
  if (currentLevelIndex < levels.length - 1) {
    loadLevel(currentLevelIndex + 1);
  }
});

// 9. Initialize
loadLevel(0);
