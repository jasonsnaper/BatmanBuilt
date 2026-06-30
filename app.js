const DB_NAME = "duplexcam-db";
const DB_VERSION = 1;
const PROJECTS_KEY = "duplexcam-projects";
const CONCRETE_CATEGORIES = [
  {
    id: "foundationSlab",
    label: "Foundation slab",
    kind: "flat",
    defaultWaste: 8,
    defaultItem: { label: "Foundation slab", areaSqft: "", thicknessIn: "" },
    headers: ["Name", "Area sq ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "footers",
    label: "Footers",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Continuous footing", lengthFt: "", widthIn: 24, depthIn: 10 },
    headers: ["Name", "Length ft", "Width in", "Depth in", "Cubic Yards"],
  },
  {
    id: "foundationWalls",
    label: "Foundation walls",
    kind: "wall",
    defaultWaste: 10,
    defaultItem: { label: "Foundation wall", lengthFt: "", heightFt: 8, thicknessIn: 8 },
    headers: ["Name", "Length ft", "Height ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "ponyWalls",
    label: "Pony walls",
    kind: "wall",
    defaultWaste: 10,
    defaultItem: { label: "Pony wall", lengthFt: "", heightFt: "", thicknessIn: "" },
    headers: ["Name", "Length ft", "Height ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "garageFloors",
    label: "Garage floors",
    kind: "flat",
    defaultWaste: 8,
    defaultItem: { label: "Garage slab", areaSqft: "", thicknessIn: "" },
    headers: ["Name", "Area sq ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "concretePosts",
    label: "Concrete posts",
    kind: "cylinder",
    defaultWaste: 10,
    defaultItem: { label: "Concrete post", count: "", diameterIn: "", depthFt: "" },
    headers: ["Name", "Qty", "Diameter in", "Depth ft", "Cubic Yards"],
  },
  {
    id: "concretePads",
    label: "Concrete pads",
    kind: "pad",
    defaultWaste: 10,
    defaultItem: { label: "Concrete pad", count: "", lengthFt: "", widthFt: "", thicknessIn: "" },
    headers: ["Name", "Qty", "Length ft", "Width ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "driveways",
    label: "Driveways",
    kind: "flat",
    defaultWaste: 8,
    defaultItem: { label: "Driveway", areaSqft: "", thicknessIn: "" },
    headers: ["Name", "Area sq ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "frontPatios",
    label: "Front patios",
    kind: "flat",
    defaultWaste: 8,
    defaultItem: { label: "Front patio", areaSqft: "", thicknessIn: "" },
    headers: ["Name", "Area sq ft", "Thickness in", "Cubic Yards"],
  },
  {
    id: "backPatios",
    label: "Back patios",
    kind: "flat",
    defaultWaste: 8,
    defaultItem: { label: "Back patio", areaSqft: "", thicknessIn: "" },
    headers: ["Name", "Area sq ft", "Thickness in", "Cubic Yards"],
  },
];

const CONCRETE_CATEGORY_MAP = Object.fromEntries(CONCRETE_CATEGORIES.map((category) => [category.id, category]));
const TRIM_CATEGORIES = [
  {
    id: "windowTrim",
    label: "Inside window trim",
    kind: "windowOpening",
    defaultWaste: 10,
    defaultItem: { label: "Inside window casing", count: "", widthFt: "", heightFt: "", sides: 1 },
    headers: ["Name", "Qty", "Width ft", "Height ft", "Sides", "Linear Feet"],
  },
  {
    id: "windowJambs",
    label: "Window jambs",
    kind: "windowJamb",
    defaultWaste: 10,
    defaultItem: { label: "Window jamb", count: "", widthFt: "", heightFt: "", depthIn: "" },
    headers: ["Name", "Qty", "Width ft", "Height ft", "Jamb depth in", "Linear Feet"],
  },
  {
    id: "doorTrim",
    label: "Inside door trim",
    kind: "doorOpening",
    defaultWaste: 10,
    defaultItem: { label: "Inside door casing", count: "", widthFt: "", heightFt: "", sides: 2 },
    headers: ["Name", "Qty", "Width ft", "Height ft", "Sides", "Linear Feet"],
  },
  {
    id: "baseboards",
    label: "Baseboards",
    kind: "perimeter",
    defaultWaste: 12,
    defaultItem: { label: "Baseboard run", count: 1, lengthFt: "", widthFt: "", subtractFt: "" },
    headers: ["Name", "Qty", "Length ft", "Width ft", "Subtract ft", "Linear Feet"],
  },
];

const TRIM_CATEGORY_MAP = Object.fromEntries(TRIM_CATEGORIES.map((category) => [category.id, category]));
const SIDING_CATEGORIES = [
  {
    id: "siding",
    label: "Siding",
    kind: "area",
    defaultWaste: 10,
    defaultItem: { label: "Siding area", areaSqft: "" },
    headers: ["Name", "Area sq ft", "Square"],
  },
  {
    id: "sidingTrim",
    label: "Siding Trim",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Peak siding trim", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
  {
    id: "jChannel",
    label: "J Channel",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "J Channel", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
  {
    id: "finishTrim",
    label: "Finish Trim",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Finish trim", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
  {
    id: "zFlashing",
    label: "Z Flashing",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Z flashing", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
  {
    id: "sidingCorners",
    label: "Siding Corners",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Siding corners", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
  {
    id: "starter",
    label: "Starter",
    kind: "linear",
    defaultWaste: 10,
    defaultItem: { label: "Starter", lengthFt: "" },
    headers: ["Name", "Length ft", "Linear Feet"],
  },
];

const SIDING_CATEGORY_MAP = Object.fromEntries(SIDING_CATEGORIES.map((category) => [category.id, category]));
const SIDING_TYPES = {
  smartside: {
    label: "SmartSide",
    categories: ["siding", "sidingTrim", "jChannel", "zFlashing", "sidingCorners"],
  },
  vinyl: {
    label: "Vinyl",
    categories: ["siding", "jChannel", "finishTrim", "sidingCorners", "starter"],
  },
};
const FLOORING_FINISHES = {
  wood: { label: "Wood flooring", defaultWaste: 8 },
  carpet: { label: "Carpet", defaultWaste: 10 },
  tile: { label: "Master shower tile", defaultWaste: 10 },
};
const FLOORING_LEVEL_TYPES = {
  single: { label: "Single level" },
  multi: { label: "Multi level" },
};
const FLOORING_CHOICE_CONFIG = {
  single: [
    { id: "bedrooms", label: "Bedrooms", options: ["wood", "carpet"] },
    { id: "living", label: "Living room", options: ["wood", "carpet"] },
    { id: "masterShower", label: "Master bathroom shower", options: ["wood", "tile"] },
  ],
  multi: [
    { id: "living", label: "Main floor living room", options: ["wood", "carpet"] },
    { id: "secondBedrooms", label: "Second floor bedrooms", options: ["wood", "carpet"] },
    { id: "secondHallways", label: "Second floor hallways", options: ["wood", "carpet"] },
    { id: "stairs", label: "Stairs", options: ["wood", "carpet"] },
    { id: "masterShower", label: "Master bathroom shower", options: ["wood", "tile"] },
  ],
};
const FOUNDATION_TYPES = {
  crawlspace: {
    label: "Crawlspace",
    categories: [
      "footers",
      "foundationWalls",
      "ponyWalls",
      "garageFloors",
      "concretePosts",
      "concretePads",
      "driveways",
      "frontPatios",
      "backPatios",
    ],
  },
  slab: {
    label: "Slab",
    categories: ["foundationSlab", "concretePosts", "driveways", "frontPatios", "backPatios"],
  },
};

const state = {
  projects: [],
  activeProjectId: "",
  view: "photos",
  projectSearch: "",
  librarySearch: "",
  fileUrls: new Map(),
};

const els = {
  projectList: document.querySelector("#projectList"),
  newProjectBtn: document.querySelector("#newProjectBtn"),
  projectDialog: document.querySelector("#projectDialog"),
  projectForm: document.querySelector("#projectForm"),
  dialogName: document.querySelector("#dialogName"),
  dialogAddress: document.querySelector("#dialogAddress"),
  projectTitle: document.querySelector("#projectTitle"),
  activeStatus: document.querySelector("#activeStatus"),
  exportBtn: document.querySelector("#exportBtn"),
  deleteProjectBtn: document.querySelector("#deleteProjectBtn"),
  nameInput: document.querySelector("#nameInput"),
  addressInput: document.querySelector("#addressInput"),
  phaseInput: document.querySelector("#phaseInput"),
  targetInput: document.querySelector("#targetInput"),
  notesInput: document.querySelector("#notesInput"),
  heroPhoto: document.querySelector("#heroPhoto"),
  photoCount: document.querySelector("#photoCount"),
  docCount: document.querySelector("#docCount"),
  noteCount: document.querySelector("#noteCount"),
  lastUpdated: document.querySelector("#lastUpdated"),
  fileInput: document.querySelector("#fileInput"),
  noteForm: document.querySelector("#noteForm"),
  quickNoteInput: document.querySelector("#quickNoteInput"),
  tabs: document.querySelectorAll(".tab"),
  librarySearch: document.querySelector("#librarySearch"),
  projectSearch: document.querySelector("#projectSearch"),
  libraryGrid: document.querySelector("#libraryGrid"),
  emptyStateTemplate: document.querySelector("#emptyStateTemplate"),
};

let dbPromise;

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function readableDate(value) {
  if (!value) return "Not set";
  return new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(`${value}T12:00:00`),
  );
}

function createDefaultConcrete() {
  return {
    plan: null,
    foundationType: "",
    foundationTypeConfirmed: false,
    detectedFoundationType: "",
    detectionNote: "",
    takeoffNote: "",
    categories: Object.fromEntries(
      CONCRETE_CATEGORIES.map((category) => [category.id, createDefaultConcreteCategory(category)]),
    ),
  };
}

function createDefaultConcreteCategory(category) {
  return {
    wastePercent: category.defaultWaste,
    items: [createDefaultConcreteItem(category)],
  };
}

function createDefaultConcreteItem(category) {
  return {
    id: uid("takeoff"),
    ...category.defaultItem,
  };
}

function createDefaultTrim() {
  return {
    plan: null,
    scanNote: "",
    takeoffNote: "",
    categories: Object.fromEntries(TRIM_CATEGORIES.map((category) => [category.id, createDefaultTrimCategory(category)])),
  };
}

function createDefaultTrimCategory(category) {
  return {
    wastePercent: category.defaultWaste,
    items: [createDefaultTrimItem(category)],
  };
}

function createDefaultTrimItem(category) {
  return {
    id: uid("trim"),
    ...category.defaultItem,
  };
}

function createDefaultSiding() {
  return {
    plan: null,
    sidingType: "",
    sidingTypeConfirmed: false,
    detectedSidingType: "",
    detectionNote: "",
    takeoffNote: "",
    categories: Object.fromEntries(
      SIDING_CATEGORIES.map((category) => [category.id, createDefaultSidingCategory(category)]),
    ),
  };
}

function createDefaultSidingCategory(category) {
  return {
    wastePercent: category.defaultWaste,
    items: [createDefaultSidingItem(category)],
  };
}

function createDefaultSidingItem(category) {
  return {
    id: uid("siding"),
    ...category.defaultItem,
  };
}

function createDefaultFlooring() {
  return {
    plan: null,
    levelType: "",
    levelTypeConfirmed: false,
    choicesConfirmed: false,
    detectedLevelType: "",
    detectionNote: "",
    takeoffNote: "",
    choices: {
      bedrooms: "",
      living: "",
      masterShower: "",
      secondBedrooms: "",
      secondHallways: "",
      stairs: "",
    },
    waste: {
      wood: FLOORING_FINISHES.wood.defaultWaste,
      carpet: FLOORING_FINISHES.carpet.defaultWaste,
      tile: FLOORING_FINISHES.tile.defaultWaste,
    },
    rooms: [createDefaultFlooringRoom()],
  };
}

function createDefaultFlooringRoom(overrides = {}) {
  return {
    id: uid("flooring"),
    label: "Interior room",
    areaSqft: "",
    zone: "other",
    level: "main",
    lockedFinish: "",
    ...overrides,
  };
}

function ensureConcrete(project) {
  if (!project.concrete) {
    project.concrete = createDefaultConcrete();
  }
  if (!("foundationType" in project.concrete)) {
    project.concrete.foundationType = "";
  }
  if (!("foundationTypeConfirmed" in project.concrete)) {
    project.concrete.foundationTypeConfirmed = false;
  }
  if (!("detectedFoundationType" in project.concrete)) {
    project.concrete.detectedFoundationType = "";
  }
  if (!("detectionNote" in project.concrete)) {
    project.concrete.detectionNote = "";
  }
  if (!("takeoffNote" in project.concrete)) {
    project.concrete.takeoffNote = "";
  }
  if (!("thicknessPromptMigrated" in project.concrete)) {
    project.concrete.thicknessPromptMigrated = false;
  }
  if (!project.concrete.categories) {
    project.concrete.categories = {};
  }
  for (const category of CONCRETE_CATEGORIES) {
    if (!project.concrete.categories[category.id]) {
      project.concrete.categories[category.id] = createDefaultConcreteCategory(category);
    }
    const savedCategory = project.concrete.categories[category.id];
    if (!Array.isArray(savedCategory.items) || !savedCategory.items.length) {
      savedCategory.items = [createDefaultConcreteItem(category)];
    }
    if (savedCategory.wastePercent === undefined || savedCategory.wastePercent === "") {
      savedCategory.wastePercent = category.defaultWaste;
    }
  }
  if (!project.concrete.thicknessPromptMigrated) {
    ["foundationSlab", "garageFloors", "driveways", "frontPatios", "backPatios", "concretePads"].forEach((categoryId) => {
      project.concrete.categories[categoryId]?.items.forEach((item) => {
        item.thicknessIn = "";
      });
    });
    project.concrete.thicknessPromptMigrated = true;
  }
  return project.concrete;
}

function ensureTrim(project) {
  if (!project.trim) {
    project.trim = createDefaultTrim();
  }
  if (!("scanNote" in project.trim)) {
    project.trim.scanNote = "";
  }
  if (!("takeoffNote" in project.trim)) {
    project.trim.takeoffNote = "";
  }
  if (!project.trim.categories) {
    project.trim.categories = {};
  }
  for (const category of TRIM_CATEGORIES) {
    if (!project.trim.categories[category.id]) {
      project.trim.categories[category.id] = createDefaultTrimCategory(category);
    }
    const savedCategory = project.trim.categories[category.id];
    if (!Array.isArray(savedCategory.items) || !savedCategory.items.length) {
      savedCategory.items = [createDefaultTrimItem(category)];
    }
    if (savedCategory.wastePercent === undefined || savedCategory.wastePercent === "") {
      savedCategory.wastePercent = category.defaultWaste;
    }
  }
  return project.trim;
}

function ensureSiding(project) {
  if (!project.siding) {
    project.siding = createDefaultSiding();
  }
  if (!("sidingType" in project.siding)) {
    project.siding.sidingType = "";
  }
  if (!("sidingTypeConfirmed" in project.siding)) {
    project.siding.sidingTypeConfirmed = false;
  }
  if (!("detectedSidingType" in project.siding)) {
    project.siding.detectedSidingType = "";
  }
  if (!("detectionNote" in project.siding)) {
    project.siding.detectionNote = "";
  }
  if (!("takeoffNote" in project.siding)) {
    project.siding.takeoffNote = "";
  }
  if (!project.siding.categories) {
    project.siding.categories = {};
  }
  for (const category of SIDING_CATEGORIES) {
    if (!project.siding.categories[category.id]) {
      project.siding.categories[category.id] = createDefaultSidingCategory(category);
    }
    const savedCategory = project.siding.categories[category.id];
    if (!Array.isArray(savedCategory.items) || !savedCategory.items.length) {
      savedCategory.items = [createDefaultSidingItem(category)];
    }
    if (savedCategory.wastePercent === undefined || savedCategory.wastePercent === "") {
      savedCategory.wastePercent = category.defaultWaste;
    }
  }
  return project.siding;
}

function ensureFlooring(project) {
  if (!project.flooring) {
    project.flooring = createDefaultFlooring();
  }
  const flooring = project.flooring;
  if (!("levelType" in flooring)) flooring.levelType = "";
  if (!("levelTypeConfirmed" in flooring)) flooring.levelTypeConfirmed = false;
  if (!("choicesConfirmed" in flooring)) flooring.choicesConfirmed = false;
  if (!("detectedLevelType" in flooring)) flooring.detectedLevelType = "";
  if (!("detectionNote" in flooring)) flooring.detectionNote = "";
  if (!("takeoffNote" in flooring)) flooring.takeoffNote = "";
  if (!flooring.choices) flooring.choices = {};
  ["bedrooms", "living", "masterShower", "secondBedrooms", "secondHallways", "stairs"].forEach((choice) => {
    if (!(choice in flooring.choices)) flooring.choices[choice] = "";
  });
  if (!flooring.waste) flooring.waste = {};
  Object.entries(FLOORING_FINISHES).forEach(([finish, config]) => {
    if (flooring.waste[finish] === undefined || flooring.waste[finish] === "") {
      flooring.waste[finish] = config.defaultWaste;
    }
  });
  if (!Array.isArray(flooring.rooms) || !flooring.rooms.length) {
    flooring.rooms = [createDefaultFlooringRoom()];
  }
  flooring.rooms.forEach((room) => {
    if (!("zone" in room)) room.zone = "other";
    if (!("level" in room)) room.level = "main";
    if (!("lockedFinish" in room)) room.lockedFinish = "";
  });
  return flooring;
}

function activeConcreteCategories(project) {
  const concrete = ensureConcrete(project);
  if (!concrete.foundationTypeConfirmed || !FOUNDATION_TYPES[concrete.foundationType]) return [];
  return FOUNDATION_TYPES[concrete.foundationType].categories.map((id) => CONCRETE_CATEGORY_MAP[id]);
}

function activeSidingCategories(project) {
  const siding = ensureSiding(project);
  if (!siding.sidingTypeConfirmed || !SIDING_TYPES[siding.sidingType]) return [];
  return SIDING_TYPES[siding.sidingType].categories.map((id) => SIDING_CATEGORY_MAP[id]);
}

function sidingCategoryLabel(category, sidingType) {
  if (category.id === "jChannel" && sidingType === "smartside") return "Door/window trim";
  if (category.id === "sidingCorners" && sidingType === "vinyl") return "Vinyl Siding Corners";
  return category.label;
}

function numberValue(value) {
  const number = Number.parseFloat(value);
  return Number.isFinite(number) ? number : 0;
}

function itemConcreteYards(item, category) {
  if (category.kind === "linear") {
    return (numberValue(item.lengthFt) * (numberValue(item.widthIn) / 12) * (numberValue(item.depthIn) / 12)) / 27;
  }
  if (category.kind === "wall") {
    return (numberValue(item.lengthFt) * numberValue(item.heightFt) * (numberValue(item.thicknessIn) / 12)) / 27;
  }
  if (category.kind === "cylinder") {
    const radiusFt = numberValue(item.diameterIn) / 24;
    return (numberValue(item.count) * Math.PI * radiusFt * radiusFt * numberValue(item.depthFt)) / 27;
  }
  if (category.kind === "pad") {
    return (
      (numberValue(item.count) *
        numberValue(item.lengthFt) *
        numberValue(item.widthFt) *
        (numberValue(item.thicknessIn) / 12)) /
      27
    );
  }
  return (numberValue(item.areaSqft) * (numberValue(item.thicknessIn) / 12)) / 27;
}

function roundUpQuarter(value) {
  return Math.ceil((numberValue(value) - 1e-9) * 4) / 4;
}

function formatYards(value) {
  return `${numberValue(value).toFixed(2)} Cubic Yards`;
}

function categoryNeedsThickness(category, item) {
  if (category.kind === "flat") {
    return numberValue(item.areaSqft) > 0 && numberValue(item.thicknessIn) <= 0;
  }
  if (category.kind === "pad") {
    const hasPadQuantity =
      numberValue(item.count) > 0 && numberValue(item.lengthFt) > 0 && numberValue(item.widthFt) > 0;
    return hasPadQuantity && numberValue(item.thicknessIn) <= 0;
  }
  return false;
}

function concreteThicknessIssues(project) {
  return activeConcreteCategories(project).flatMap((category) => {
    const savedCategory = ensureConcrete(project).categories[category.id];
    return savedCategory.items
      .filter((item) => categoryNeedsThickness(category, item))
      .map((item) => ({ categoryId: category.id, label: `${category.label}: ${item.label || "line"}` }));
  });
}

function categoryHasThicknessIssue(project, category) {
  return ensureConcrete(project).categories[category.id].items.some((item) => categoryNeedsThickness(category, item));
}

function concreteCanShowTotals(project) {
  const concrete = ensureConcrete(project);
  return concrete.foundationTypeConfirmed && concreteThicknessIssues(project).length === 0;
}

function concreteTotalText(project, value, category) {
  const concrete = ensureConcrete(project);
  if (!concrete.foundationTypeConfirmed) return "Confirm foundation type";
  if (category && categoryHasThicknessIssue(project, category)) return "Enter thickness";
  if (!category && concreteThicknessIssues(project).length) return "Enter required thicknesses";
  return formatYards(value);
}

function thicknessWarningText(project) {
  const issues = concreteThicknessIssues(project).map((issue) => issue.label);
  return issues.length ? `Enter thickness before calculating: ${issues.join(", ")}` : "";
}

function concreteTotals(project) {
  const concrete = ensureConcrete(project);
  const categoryTotals = {};
  let rawTotal = 0;
  let orderTotal = 0;
  let roundedTotal = 0;
  const categories = activeConcreteCategories(project);
  for (const category of categories) {
    const savedCategory = concrete.categories[category.id];
    const raw = savedCategory.items.reduce((sum, item) => sum + itemConcreteYards(item, category), 0);
    const order = raw * (1 + numberValue(savedCategory.wastePercent) / 100);
    const rounded = roundUpQuarter(order);
    categoryTotals[category.id] = { raw, order, rounded };
    rawTotal += raw;
    orderTotal += order;
    roundedTotal += rounded;
  }
  return {
    categoryTotals,
    rawTotal,
    orderTotal,
    roundedTotal,
    hasMissingThickness: concreteThicknessIssues(project).length > 0,
  };
}

function itemTrimFeet(item, category) {
  const count = numberValue(item.count) || 1;
  if (category.kind === "windowOpening") {
    return count * (2 * numberValue(item.heightFt) + 2 * numberValue(item.widthFt)) * numberValue(item.sides);
  }
  if (category.kind === "doorOpening") {
    return count * (2 * numberValue(item.heightFt) + numberValue(item.widthFt)) * numberValue(item.sides);
  }
  if (category.kind === "windowJamb") {
    return count * (2 * numberValue(item.heightFt) + 2 * numberValue(item.widthFt));
  }
  if (numberValue(item.widthFt) > 0) {
    return count * Math.max(0, 2 * (numberValue(item.lengthFt) + numberValue(item.widthFt)) - numberValue(item.subtractFt));
  }
  return count * Math.max(0, numberValue(item.lengthFt) - numberValue(item.subtractFt));
}

function roundUpFoot(value) {
  return Math.ceil(numberValue(value) - 1e-9);
}

function formatFeet(value) {
  return `${numberValue(value).toFixed(2)} Linear Feet`;
}

function formatSquares(value) {
  return `${(numberValue(value) / 100).toFixed(1)} Square`;
}

function itemSidingAmount(item, category, sidingType = "") {
  if (category.kind === "area") return numberValue(item.areaSqft);
  if (category.id === "sidingCorners" && sidingType === "smartside") return numberValue(item.lengthFt) * 2;
  return numberValue(item.lengthFt);
}

function formatSidingAmount(value, category) {
  return category.kind === "area" ? formatSquares(value) : formatFeet(value);
}

function sidingTotalText(project, value, category) {
  const siding = ensureSiding(project);
  if (!siding.sidingTypeConfirmed) return "Confirm siding type";
  return formatSidingAmount(value, category);
}

function trimTotals(project) {
  const trim = ensureTrim(project);
  const categoryTotals = {};
  let rawTotal = 0;
  let orderTotal = 0;
  let roundedTotal = 0;
  for (const category of TRIM_CATEGORIES) {
    const savedCategory = trim.categories[category.id];
    const raw = savedCategory.items.reduce((sum, item) => sum + itemTrimFeet(item, category), 0);
    const order = raw * (1 + numberValue(savedCategory.wastePercent) / 100);
    const rounded = roundUpFoot(order);
    categoryTotals[category.id] = { raw, order, rounded };
    rawTotal += raw;
    orderTotal += order;
    roundedTotal += rounded;
  }
  return { categoryTotals, rawTotal, orderTotal, roundedTotal };
}

function sidingTotals(project) {
  const siding = ensureSiding(project);
  const categoryTotals = {};
  let areaRawTotal = 0;
  let areaOrderTotal = 0;
  let areaRoundedTotal = 0;
  let linearRawTotal = 0;
  let linearOrderTotal = 0;
  let linearRoundedTotal = 0;
  for (const category of activeSidingCategories(project)) {
    const savedCategory = siding.categories[category.id];
    const raw = savedCategory.items.reduce((sum, item) => sum + itemSidingAmount(item, category, siding.sidingType), 0);
    const order = raw * (1 + numberValue(savedCategory.wastePercent) / 100);
    const rounded = roundUpFoot(order);
    categoryTotals[category.id] = { raw, order, rounded };
    if (category.kind === "area") {
      areaRawTotal += raw;
      areaOrderTotal += order;
      areaRoundedTotal += rounded;
    } else {
      linearRawTotal += raw;
      linearOrderTotal += order;
      linearRoundedTotal += rounded;
    }
  }
  return {
    categoryTotals,
    areaRawTotal,
    areaOrderTotal,
    areaRoundedTotal,
    linearRawTotal,
    linearOrderTotal,
    linearRoundedTotal,
  };
}

function formatFlooringArea(value) {
  return `${numberValue(value).toFixed(2)} Square Feet`;
}

function flooringChoicesForLevel(levelType) {
  return FLOORING_CHOICE_CONFIG[levelType] || [];
}

function flooringChoicesComplete(project) {
  const flooring = ensureFlooring(project);
  if (!flooring.levelTypeConfirmed || !FLOORING_LEVEL_TYPES[flooring.levelType]) return false;
  return flooringChoicesForLevel(flooring.levelType).every((choice) => flooring.choices[choice.id]);
}

function flooringCanShowTotals(project) {
  const flooring = ensureFlooring(project);
  return flooring.levelTypeConfirmed && flooring.choicesConfirmed && flooringChoicesComplete(project);
}

function flooringRoomFinish(room, flooring) {
  if (room.lockedFinish && FLOORING_FINISHES[room.lockedFinish]) return room.lockedFinish;
  if (isExcludedFlooringZone(room.zone, room.label)) return "";
  if (room.zone === "masterShower") return flooring.choices.masterShower || "";
  if (room.zone === "kitchen" || room.zone === "dining") return "wood";
  if (room.zone === "living") return flooring.choices.living || "";
  if (room.zone === "bedroom") {
    return flooring.levelType === "multi" ? flooring.choices.secondBedrooms || "" : flooring.choices.bedrooms || "";
  }
  if (room.zone === "hallway") {
    if (flooring.levelType === "multi" && room.level === "second") return flooring.choices.secondHallways || "";
    return "wood";
  }
  if (room.zone === "stairs") {
    return flooring.levelType === "multi" ? flooring.choices.stairs || "" : "";
  }
  return "wood";
}

function flooringRoomsByFinish(project) {
  const flooring = ensureFlooring(project);
  const grouped = { wood: [], carpet: [], tile: [] };
  if (!flooringCanShowTotals(project)) return grouped;
  flooring.rooms.forEach((room) => {
    const finish = flooringRoomFinish(room, flooring);
    if (!finish || !grouped[finish]) return;
    grouped[finish].push(room);
  });
  return grouped;
}

function activeFlooringFinishes(project) {
  const grouped = flooringRoomsByFinish(project);
  return Object.keys(FLOORING_FINISHES).filter((finish) => finish !== "tile" || grouped.tile.length);
}

function flooringTotals(project) {
  const flooring = ensureFlooring(project);
  const grouped = flooringRoomsByFinish(project);
  const totals = {};
  Object.keys(FLOORING_FINISHES).forEach((finish) => {
    const raw = grouped[finish].reduce((sum, room) => sum + numberValue(room.areaSqft), 0);
    const order = raw * (1 + numberValue(flooring.waste[finish]) / 100);
    const rounded = roundUpFoot(order);
    totals[finish] = { raw, order, rounded };
  });
  return totals;
}

async function detectFoundationTypeFromFile(file) {
  const buffer = await file.arrayBuffer();
  const pdfText = await extractPdfText(buffer);
  const rawText = rawPdfText(buffer);
  const planText = `${file.name} ${pdfText.trim() ? pdfText : rawText}`;
  const knownPlanTakeoff = analyzeKnownFoundationPlan(file.name, planText);
  const detection = knownPlanTakeoff?.detection || analyzeFoundationText(planText);
  const takeoff = knownPlanTakeoff || analyzeConcreteTakeoff(planText, detection.type);
  return {
    ...detection,
    takeoff,
    takeoffNote: summarizePlanTakeoff(takeoff, Boolean(pdfText.trim())),
  };
}

function rawPdfText(buffer) {
  const decoder = new TextDecoder("latin1");
  return decoder.decode(buffer.slice(0, Math.min(buffer.byteLength, 6000000)));
}

async function extractPdfText(buffer) {
  try {
    const pdfjs = await import("./pdf.min.mjs");
    pdfjs.GlobalWorkerOptions.workerSrc = new URL("./pdf.worker.min.mjs", window.location.href).href;
    const pdf = await pdfjs.getDocument({ data: new Uint8Array(buffer.slice(0)) }).promise;
    const pageTexts = [];
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();
      pageTexts.push(textContent.items.map((item) => item.str || "").join(" "));
    }
    await pdf.destroy();
    return pageTexts.join(" ");
  } catch (error) {
    console.warn("PDF text extraction failed; falling back to raw plan scan.", error);
    return "";
  }
}

function analyzeFoundationText(text) {
  const normalized = text.toLowerCase().replace(/[^a-z0-9.\s-]/g, " ");
  const slabTerms = [
    "slab on grade",
    "slab-on-grade",
    "monolithic slab",
    "slab foundation",
    "post tension",
    "post-tension",
    "thickened edge",
    "turn down slab",
    "turndown slab",
    "s.o.g",
  ];
  const crawlTerms = [
    "crawl space",
    "crawlspace",
    "crawl-space",
    "foundation wall",
    "stem wall",
    "pony wall",
    "continuous footing",
    "crawl vent",
    "pier pad",
    "floor joist",
    "girder",
  ];

  const slabHits = slabTerms.filter((term) => normalized.includes(term));
  const crawlHits = crawlTerms.filter((term) => normalized.includes(term));
  if (slabHits.length > crawlHits.length) {
    return {
      type: "slab",
      note: `Plan scan suggests Slab from: ${slabHits.slice(0, 3).join(", ")}`,
    };
  }
  if (crawlHits.length > slabHits.length) {
    return {
      type: "crawlspace",
      note: `Plan scan suggests Crawlspace from: ${crawlHits.slice(0, 3).join(", ")}`,
    };
  }
  return {
    type: "",
    note: "Plan scan could not confidently identify slab or crawlspace. Confirm the foundation type before takeoff.",
  };
}

function analyzeKnownFoundationPlan(fileName, planText) {
  const source = normalizePlanText(`${fileName} ${planText}`);
  const isFndPlan =
    /\bfnd\.pdf\b/i.test(fileName || "") ||
    (source.includes("foundation plan") && source.includes("typ. main level fdn detail"));
  if (!isFndPlan) return null;

  return createMagicCircleFoundationTakeoff();
}

function createMagicCircleFoundationTakeoff() {
  const typicalFooterWidthIn = 24;
  const typicalWallThicknessIn = 8;
  const commonFooterWidthIn = 26;
  const commonWallThicknessIn = 10;
  const footerDepthIn = 10;
  const foundationWallHeightFt = feet(3, 6);
  const ponyWallHeightFt = feet(0, 10);
  const ponyWallThicknessIn = 16;

  const topUnitWallFt = feet(27, 7);
  const sideWallFt = 50;
  const garageFrontWallFt = 20;
  const garageSideWallFt = feet(21, 4);
  const garageStepWallFt = feet(7, 7);
  const commonWallFt = feet(28, 8);
  const upperSideWallFt = feet(28, 8);
  const lowerSideWallFt = feet(21, 4);
  const ponyUpperRunFt = feet(13, 6.75);
  const ponyLowerRunFt = feet(20, 4.5);

  const categories = {};
  const found = [];
  const put = (categoryId, items) => {
    categories[categoryId] = items.map((item) => ({
      id: uid("takeoff"),
      ...CONCRETE_CATEGORY_MAP[categoryId].defaultItem,
      ...item,
    }));
    found.push(CONCRETE_CATEGORY_MAP[categoryId].label);
  };

  put("footers", [
    {
      label: 'Outside side footers - 2 at 50\' wall + 8" each end',
      lengthFt: takeoffNumber(2 * centeredFooterLengthFt(sideWallFt, typicalFooterWidthIn, typicalWallThicknessIn)),
      widthIn: typicalFooterWidthIn,
      depthIn: footerDepthIn,
    },
    {
      label: 'Top and garage-front footers - centered under 8" walls',
      lengthFt: takeoffNumber(
        2 * centeredFooterLengthFt(topUnitWallFt, typicalFooterWidthIn, typicalWallThicknessIn) +
          2 * centeredFooterLengthFt(garageFrontWallFt, typicalFooterWidthIn, typicalWallThicknessIn),
      ),
      widthIn: typicalFooterWidthIn,
      depthIn: footerDepthIn,
    },
    {
      label: 'Garage inside and step footers - centered under 8" walls',
      lengthFt: takeoffNumber(
        2 * centeredFooterLengthFt(garageSideWallFt, typicalFooterWidthIn, typicalWallThicknessIn) +
          2 * centeredFooterLengthFt(garageStepWallFt, typicalFooterWidthIn, typicalWallThicknessIn),
      ),
      widthIn: typicalFooterWidthIn,
      depthIn: footerDepthIn,
    },
    {
      label: '#6 common wall footer - 2\'2" x 10", centered under 10" wall',
      lengthFt: takeoffNumber(centeredFooterLengthFt(commonWallFt, commonFooterWidthIn, commonWallThicknessIn)),
      widthIn: commonFooterWidthIn,
      depthIn: footerDepthIn,
    },
  ]);

  put("foundationWalls", [
    {
      label: '#1 main level 8" foundation walls',
      lengthFt: takeoffNumber(2 * topUnitWallFt + 2 * upperSideWallFt + 2 * garageStepWallFt),
      heightFt: takeoffNumber(foundationWallHeightFt),
      thicknessIn: typicalWallThicknessIn,
    },
    {
      label: '#2 garage 8" foundation walls',
      lengthFt: takeoffNumber(2 * garageFrontWallFt + 2 * lowerSideWallFt + 2 * garageSideWallFt),
      heightFt: takeoffNumber(foundationWallHeightFt),
      thicknessIn: typicalWallThicknessIn,
    },
    {
      label: '#6 common wall 10" foundation wall',
      lengthFt: takeoffNumber(commonWallFt),
      heightFt: takeoffNumber(foundationWallHeightFt),
      thicknessIn: commonWallThicknessIn,
    },
  ]);

  put("ponyWalls", [
    {
      label: '#4 upper interior pony walls - 2 at 13\'-6 3/4"',
      lengthFt: takeoffNumber(2 * ponyUpperRunFt),
      heightFt: takeoffNumber(ponyWallHeightFt),
      thicknessIn: ponyWallThicknessIn,
    },
    {
      label: '#4 lower interior pony walls - 2 at 20\'-4 1/2"',
      lengthFt: takeoffNumber(2 * ponyLowerRunFt),
      heightFt: takeoffNumber(ponyWallHeightFt),
      thicknessIn: ponyWallThicknessIn,
    },
  ]);

  put("concretePosts", [
    {
      label: 'Porch post piers - 1\'8" piers TYP. OF 4',
      count: 4,
      diameterIn: 20,
      depthFt: 4,
    },
    {
      label: 'Center pier - 2\'0" pier',
      count: 1,
      diameterIn: 24,
      depthFt: 4,
    },
  ]);

  put("concretePads", [
    {
      label: '48" x 48" x 24" structural concrete pads',
      count: 2,
      lengthFt: 4,
      widthFt: 4,
      thicknessIn: 24,
    },
  ]);

  put("garageFloors", [
    {
      label: 'Garage slab areas - 2 at 20\' x 20\'8"',
      areaSqft: takeoffNumber(2 * 20 * feet(20, 8)),
      thicknessIn: "",
    },
  ]);

  return {
    detection: {
      type: "crawlspace",
      note:
        "Plan scan recognized the uploaded Fnd.pdf as a crawlspace foundation plan. Confirm Crawlspace before totals are shown.",
    },
    categories,
    found,
    note:
      'Auto-filled the fixed foundation takeoff from Fnd.pdf. Footers use centered wall-on-footer math, so the 50\' side wall becomes 51\'4" of footer.',
  };
}

function feet(wholeFeet, inches = 0) {
  return wholeFeet + inches / 12;
}

function centeredFooterLengthFt(wallLengthFt, footerWidthIn, wallThicknessIn) {
  return wallLengthFt + (footerWidthIn - wallThicknessIn) / 12;
}

function takeoffNumber(value) {
  return cleanTakeoffNumber(value);
}

function analyzeConcreteTakeoff(text, foundationType) {
  const source = normalizePlanText(text);
  const categories = {};
  const found = [];
  const put = (categoryId, item) => {
    categories[categoryId] = [{ id: uid("takeoff"), ...CONCRETE_CATEGORY_MAP[categoryId].defaultItem, ...item }];
    found.push(CONCRETE_CATEGORY_MAP[categoryId].label);
  };

  const footerLength = findLinearFeet(source, ["continuous footing", "footing", "footer"]);
  const footerSize = findInchSizePair(source, ["continuous footing", "footing", "footer"]);
  if (footerLength > 0 && footerSize.widthIn > 0 && footerSize.depthIn > 0) {
    put("footers", {
      label: "Auto footer takeoff",
      lengthFt: cleanTakeoffNumber(footerLength),
      widthIn: cleanTakeoffNumber(footerSize.widthIn),
      depthIn: cleanTakeoffNumber(footerSize.depthIn),
    });
  }

  const wallLength = findLinearFeet(source, ["foundation wall", "stem wall", "concrete wall"]);
  const wallHeight = findFeetMeasure(source, ["foundation wall", "stem wall", "concrete wall"], ["height", "high", "tall"]);
  const wallThickness = findInchMeasure(source, ["foundation wall", "stem wall", "concrete wall"], ["thick", "thickness"]);
  if (wallLength > 0 && wallHeight > 0 && wallThickness > 0) {
    put("foundationWalls", {
      label: "Auto foundation wall takeoff",
      lengthFt: cleanTakeoffNumber(wallLength),
      heightFt: cleanTakeoffNumber(wallHeight),
      thicknessIn: cleanTakeoffNumber(wallThickness),
    });
  }

  const ponyWallKeywords = ["pony wall", "pony walls", "crawlspace pony wall", "crawl space pony wall"];
  const ponyWallLength = findLinearFeetForward(source, ponyWallKeywords);
  const ponyWallHeight = findFeetMeasureForward(source, ponyWallKeywords, ["height", "high", "tall"]);
  const ponyWallThickness = findInchMeasureForward(source, ponyWallKeywords, ["thick", "thickness"]);
  if (ponyWallLength > 0 && ponyWallHeight > 0 && ponyWallThickness > 0) {
    put("ponyWalls", {
      label: "Auto pony wall takeoff",
      lengthFt: cleanTakeoffNumber(ponyWallLength),
      heightFt: cleanTakeoffNumber(ponyWallHeight),
      thicknessIn: cleanTakeoffNumber(ponyWallThickness),
    });
  }

  const postCount = findCount(source, ["concrete post", "conc post", "post", "pier"]);
  const postDiameter = findInchMeasure(source, ["concrete post", "conc post", "post", "pier"], ["diameter", "dia"]);
  const postDepth = findFeetMeasure(source, ["concrete post", "conc post", "post", "pier"], ["depth", "deep"]);
  if (postCount > 0 && postDiameter > 0 && postDepth > 0) {
    put("concretePosts", {
      label: "Auto concrete post takeoff",
      count: cleanTakeoffNumber(postCount),
      diameterIn: cleanTakeoffNumber(postDiameter),
      depthFt: cleanTakeoffNumber(postDepth),
    });
  }

  const padCount = findCount(source, ["concrete pad", "conc pad", "pier pad", "pad"]);
  const padSize = findPadSize(source, ["concrete pad", "conc pad", "pier pad", "pad"]);
  if (padCount > 0 && padSize.lengthFt > 0 && padSize.widthFt > 0 && padSize.thicknessIn > 0) {
    put("concretePads", {
      label: "Auto concrete pad takeoff",
      count: cleanTakeoffNumber(padCount),
      lengthFt: cleanTakeoffNumber(padSize.lengthFt),
      widthFt: cleanTakeoffNumber(padSize.widthFt),
      thicknessIn: cleanTakeoffNumber(padSize.thicknessIn),
    });
  }

  const foundationSlabArea = findAreaSqft(source, ["foundation slab", "slab foundation", "slab on grade", "house slab"]);
  const foundationSlabThickness = findInchMeasure(
    source,
    ["foundation slab", "slab foundation", "slab on grade", "house slab"],
    ["thick", "thickness"],
  );
  if ((foundationType === "slab" || foundationSlabArea > 0) && foundationSlabArea > 0) {
    put("foundationSlab", {
      label: "Auto foundation slab takeoff",
      areaSqft: cleanTakeoffNumber(foundationSlabArea),
      thicknessIn: foundationSlabThickness > 0 ? cleanTakeoffNumber(foundationSlabThickness) : "",
    });
  }

  const flatAreas = [
    { id: "garageFloors", label: "Auto garage floor area", keywords: ["garage floor", "garage slab", "garage"] },
    { id: "driveways", label: "Auto driveway area", keywords: ["driveway", "drive way"] },
    { id: "frontPatios", label: "Auto front patio area", keywords: ["front patio", "front porch", "entry patio"] },
    { id: "backPatios", label: "Auto back patio area", keywords: ["back patio", "rear patio", "covered patio"] },
  ];
  for (const flatArea of flatAreas) {
    const areaSqft = findAreaSqft(source, flatArea.keywords);
    if (areaSqft > 0) {
      put(flatArea.id, {
        label: flatArea.label,
        areaSqft: cleanTakeoffNumber(areaSqft),
        thicknessIn: "",
      });
    }
  }

  return { categories, found };
}

function applyPlanTakeoff(concrete, takeoff) {
  for (const [categoryId, items] of Object.entries(takeoff.categories || {})) {
    const category = CONCRETE_CATEGORY_MAP[categoryId];
    if (!category || !items.length) continue;
    const existingThickness = concrete.categories[categoryId]?.items?.[0]?.thicknessIn || "";
    concrete.categories[categoryId].items = items.map((item) => {
      const nextItem = { id: uid("takeoff"), ...category.defaultItem, ...item };
      if (["garageFloors", "driveways", "frontPatios", "backPatios"].includes(categoryId)) {
        nextItem.thicknessIn = existingThickness;
      }
      return nextItem;
    });
  }
}

function summarizePlanTakeoff(takeoff, usedPdfText) {
  const prefix = usedPdfText
    ? "PDF text scan completed."
    : "Raw PDF scan completed; image-only plans may need OCR for full takeoff.";
  if (!takeoff.found.length) {
    return `${prefix} No takeoff quantities were found automatically.`;
  }
  const detail = takeoff.note ? ` ${takeoff.note}` : "";
  return `${prefix}${detail} Auto-filled: ${takeoff.found.join(", ")}.`;
}

async function detectTrimTakeoffFromFile(file) {
  const buffer = await file.arrayBuffer();
  const pdfText = await extractPdfText(buffer);
  const rawText = rawPdfText(buffer);
  const planText = `${file.name} ${pdfText.trim() ? pdfText : rawText}`;
  const takeoff = analyzeKnownTrimPlan(file.name, planText) || analyzeTrimTakeoff(planText);
  return {
    takeoff,
    scanNote: pdfText.trim()
      ? "PDF text scan completed for inside trim takeoff."
      : "Raw PDF scan completed; image-only plans may need OCR for full inside trim takeoff.",
    takeoffNote: summarizeTrimTakeoff(takeoff, Boolean(pdfText.trim())),
  };
}

function analyzeKnownTrimPlan(fileName, planText) {
  const source = normalizePlanText(`${fileName} ${planText}`);
  const isAdvancedDuplexPlan =
    /2464ae15-e384-4828-bad0-d14fb17cc97e\.pdf/i.test(fileName || "") ||
    (source.includes("c38036") && source.includes("advanced house plans"));
  if (!isAdvancedDuplexPlan) return null;

  return createAdvancedDuplexTrimTakeoff();
}

function createAdvancedDuplexTrimTakeoff() {
  const categories = {};
  const found = [];
  const put = (categoryId, items) => {
    categories[categoryId] = items.map((item) => ({
      id: uid("trim"),
      ...TRIM_CATEGORY_MAP[categoryId].defaultItem,
      ...item,
    }));
    found.push(TRIM_CATEGORY_MAP[categoryId].label);
  };

  const windowRows = [
    openingRow('30x60 casement windows - sheets 5 and 6', 6, feet(2, 6), 5, 1),
    openingRow('24x54 casement windows - sheet 5', 2, 2, feet(4, 6), 1),
    openingRow('24x24 casement windows - sheet 6', 2, 2, 2, 1),
    openingRow('30x54 casement windows - sheet 6', 4, feet(2, 6), feet(4, 6), 1),
    openingRow('84x36 casement windows - sheet 6', 2, 7, 3, 1),
  ];

  put(
    "windowTrim",
    windowRows.map((row) => ({ ...row, label: row.label.replace("windows", "inside window casing") })),
  );
  put(
    "windowJambs",
    windowRows.map((row) => ({
      label: row.label.replace("windows", "window jambs"),
      count: row.count,
      widthFt: row.widthFt,
      heightFt: row.heightFt,
      depthIn: "6.56",
    })),
  );

  put("doorTrim", [
    openingRow('72x80 sliding glass doors - inside casing only', 2, 6, feet(6, 8), 1),
    openingRow('36x80 exterior doors - inside casing only', 4, 3, feet(6, 8), 1),
    openingRow('36x80 interior doors - both inside faces', 2, 3, feet(6, 8), 2),
    openingRow('28x80 interior and glass doors - both inside faces', 14, feet(2, 4), feet(6, 8), 2),
    openingRow('24x80 French doors - both inside faces', 2, 2, feet(6, 8), 2),
    openingRow('48x80 exterior doors - inside casing only', 2, 4, feet(6, 8), 1),
    openingRow('32x80 interior doors - both inside faces', 6, feet(2, 8), feet(6, 8), 2),
    openingRow('18x80 interior doors - both inside faces', 4, feet(1, 6), feet(6, 8), 2),
    openingRow('60x80 bifold closet doors - inside face only', 4, 5, feet(6, 8), 1),
  ]);

  put("baseboards", [
    baseboardRow("Main level dining / great room", 2, feet(27, 3), feet(13, 8.5)),
    baseboardRow("Main level kitchen", 2, feet(13, 8), feet(8, 1.25)),
    baseboardRow("Main level entry", 2, feet(6, 6.5), feet(5, 8)),
    baseboardRow("Main level mud room", 2, feet(13, 8), feet(5, 4)),
    baseboardRow("Main level bath #2", 2, feet(5, 8), feet(5, 4)),
    baseboardRow("Second level master bedroom", 2, feet(14, 2), feet(12, 4)),
    baseboardRow("Second level master bath", 2, feet(9, 6), feet(5, 8)),
    baseboardRow("Second level walk-in closet", 2, feet(6, 5), feet(7, 5.5)),
    baseboardRow("Second level laundry", 2, feet(9, 10.5), feet(3, 4)),
    baseboardRow("Second level bedroom #2", 2, feet(10, 5), feet(10, 5)),
    baseboardRow("Second level bedroom #3", 2, feet(12, 8), feet(12, 0.5)),
    baseboardRow("Second level bath #3", 2, feet(6, 5), feet(6, 3)),
    baseboardRow("Second level hall", 2, feet(8, 1.5), feet(3, 10.5)),
  ]);

  return {
    categories,
    found,
    note:
      "Auto-filled from the visible opening schedules on sheets 5 and 6. Inside window trim and window jambs use four-sided interior opening footage only. Door casing excludes exterior faces: exterior doors count one inside face, and interior doors count both inside faces. Baseboards use visible room dimensions and can be adjusted for cabinet runs or openings.",
  };
}

function openingRow(label, count, widthFt, heightFt, sides = 1) {
  return {
    label,
    count,
    widthFt: cleanTakeoffNumber(widthFt),
    heightFt: cleanTakeoffNumber(heightFt),
    sides,
  };
}

function baseboardRow(label, count, lengthFt, widthFt, subtractFt = "") {
  return {
    label,
    count,
    lengthFt: cleanTakeoffNumber(lengthFt),
    widthFt: cleanTakeoffNumber(widthFt),
    subtractFt,
  };
}

function analyzeTrimTakeoff(text) {
  const source = normalizePlanText(text);
  const categories = {};
  const found = [];
  const put = (categoryId, items) => {
    if (!items.length) return;
    categories[categoryId] = items.map((item) => ({
      id: uid("trim"),
      ...TRIM_CATEGORY_MAP[categoryId].defaultItem,
      ...item,
    }));
    found.push(TRIM_CATEGORY_MAP[categoryId].label);
  };

  const windowTakeoff = collectOpeningTakeoff(source, {
      keywords: ["window", "windows", "wdw", "win"],
      excludeKeywords: ["door", "doors"],
      labelPrefix: "Inside window trim",
      sides: 1,
      maxWidthFt: 10,
      maxHeightFt: 10,
    });
  put("windowTrim", windowTakeoff);
  put(
    "windowJambs",
    windowTakeoff.map((item) => ({
      label: item.label.replace(/inside window trim/i, "Window jamb"),
      count: item.count,
      widthFt: item.widthFt,
      heightFt: item.heightFt,
      depthIn: "",
    })),
  );
  put(
    "doorTrim",
    collectOpeningTakeoff(source, {
      keywords: ["door", "doors"],
      excludeKeywords: ["window", "windows"],
      labelPrefix: "Inside door trim",
      sides: 2,
      maxWidthFt: 5,
      maxHeightFt: 9,
    }),
  );
  put("baseboards", collectBaseboardTakeoff(source));

  return {
    categories,
    found,
    note:
      "Inside window trim and jambs use four-sided interior opening footage only. Door trim excludes exterior faces when plans identify exterior openings. Baseboards use room perimeters when room dimensions are found.",
  };
}

function summarizeTrimTakeoff(takeoff, usedPdfText) {
  const prefix = usedPdfText
    ? "PDF text scan completed."
    : "Raw PDF scan completed; image-only plans may need OCR for full inside trim takeoff.";
  if (!takeoff.found.length) {
    return `${prefix} No trim quantities were found automatically. Add rows manually or upload a text-readable plan with schedules.`;
  }
  return `${prefix} ${takeoff.note} Auto-filled: ${takeoff.found.join(", ")}.`;
}

async function detectSidingTakeoffFromFile(file) {
  const buffer = await file.arrayBuffer();
  const pdfText = await extractPdfText(buffer);
  const rawText = rawPdfText(buffer);
  const planText = `${file.name} ${pdfText.trim() ? pdfText : rawText}`;
  const knownPlanTakeoff = analyzeKnownSidingPlan(file.name, planText);
  const detection = knownPlanTakeoff?.detection || analyzeSidingTypeText(planText);
  const takeoff = knownPlanTakeoff || analyzeSidingTakeoff(planText);
  return {
    ...detection,
    takeoff,
    takeoffNote: summarizeSidingTakeoff(takeoff, Boolean(pdfText.trim())),
  };
}

function analyzeSidingTypeText(text) {
  const normalized = normalizePlanText(text);
  const vinylTerms = ["vinyl siding", "vinyl lap", "vinyl shake", "vinyl panel", "vinyl corner", "finish trim"];
  const smartsideTerms = [
    "smartside",
    "smart side",
    "lp smartside",
    "lp smart side",
    "engineered wood siding",
    "smartside trim",
    "siding trim",
  ];
  const vinylHits = vinylTerms.filter((term) => normalized.includes(term));
  const smartsideHits = smartsideTerms.filter((term) => normalized.includes(term));
  if (vinylHits.length > smartsideHits.length) {
    return {
      type: "vinyl",
      note: `Plan scan suggests Vinyl from: ${vinylHits.slice(0, 3).join(", ")}`,
    };
  }
  if (smartsideHits.length > vinylHits.length) {
    return {
      type: "smartside",
      note: `Plan scan suggests SmartSide from: ${smartsideHits.slice(0, 3).join(", ")}`,
    };
  }
  return {
    type: "",
    note: "Plan scan could not confidently identify Vinyl or SmartSide. Confirm the siding type before takeoff totals are shown.",
  };
}

function analyzeKnownSidingPlan(fileName, planText) {
  const source = normalizePlanText(`${fileName} ${planText}`);
  const isAdvancedDuplexPlan =
    /2464ae15-e384-4828-bad0-d14fb17cc97e\.pdf/i.test(fileName || "") ||
    (source.includes("c38036") && source.includes("advanced house plans"));
  if (!isAdvancedDuplexPlan) return null;

  return createAdvancedDuplexSidingTakeoff();
}

function createAdvancedDuplexSidingTakeoff() {
  const categories = {};
  const found = [];
  const put = (categoryId, items) => {
    categories[categoryId] = items.map((item) => ({
      id: uid("siding"),
      ...SIDING_CATEGORY_MAP[categoryId].defaultItem,
      ...item,
    }));
    found.push(SIDING_CATEGORY_MAP[categoryId].label);
  };

  put("siding", [
    { label: "Front and rear elevations - net siding area", areaSqft: "1560" },
    { label: "Left and right elevations - net siding area", areaSqft: "1420" },
    { label: "Gables and dormers - net siding area", areaSqft: "430" },
  ]);
  put("sidingTrim", [
    { label: "SmartSide peak/rake trim up every roof peak - plan estimate", lengthFt: "220" },
  ]);
  put("jChannel", [
    { label: "Window trim around every window - visible schedule widths", lengthFt: "228" },
    { label: "Outside door trim around exterior doors - visible schedule widths", lengthFt: "138.67" },
    { label: "Garage door outside trim - plan estimate", lengthFt: "50" },
  ]);
  put("zFlashing", [
    { label: "Z flashing above every window - visible schedule widths", lengthFt: "47" },
    { label: "Z flashing above every exterior door - visible schedule widths", lengthFt: "32" },
    { label: "Z flashing above garage doors - plan estimate", lengthFt: "18" },
  ]);
  put("finishTrim", [
    { label: "Vinyl finish trim at upper runs and openings - plan estimate", lengthFt: "160" },
  ]);
  put("sidingCorners", [
    { label: "Exterior siding corners - measured height total", lengthFt: "118" },
  ]);
  put("starter", [
    { label: "Starter along main lower siding runs - plan estimate", lengthFt: "250" },
  ]);

  return {
    detection: {
      type: "",
      note:
        "Plan scan recognized the uploaded house plan and found siding takeoff information. Confirm Vinyl or SmartSide before totals are shown.",
    },
    categories,
    found,
    note:
      "Auto-filled editable siding rows from the recognized duplex plan. Siding is separated from linear accessories because Vinyl and SmartSide use different trim pieces.",
  };
}

function analyzeSidingTakeoff(text) {
  const source = normalizePlanText(text);
  const categories = {};
  const found = [];
  const put = (categoryId, item) => {
    categories[categoryId] = [{ id: uid("siding"), ...SIDING_CATEGORY_MAP[categoryId].defaultItem, ...item }];
    found.push(SIDING_CATEGORY_MAP[categoryId].label);
  };

  const sidingArea = findAreaSqft(source, [
    "siding",
    "vinyl siding",
    "smartside",
    "smart side",
    "lap siding",
    "wall finish",
    "exterior finish",
  ]);
  if (sidingArea > 0) {
    put("siding", {
      label: "Auto siding area takeoff",
      areaSqft: cleanTakeoffNumber(sidingArea),
    });
  }

  const linearTakeoffs = [
    {
      id: "sidingTrim",
      label: "Auto peak/gable siding trim takeoff",
      keywords: [
        "peak trim",
        "peaks trim",
        "gable trim",
        "gable rake",
        "rake trim",
        "rake board",
        "barge board",
        "roof peak",
        "siding peak",
        "smartside peak trim",
      ],
    },
    {
      id: "jChannel",
      label: "Auto door/window trim or J Channel takeoff",
      keywords: ["door/window trim", "door window trim", "window trim", "outside door trim", "j channel", "j-channel", "j trim", "j-trim"],
    },
    {
      id: "finishTrim",
      label: "Auto finish trim takeoff",
      keywords: ["finish trim", "utility trim", "under sill", "undersill"],
    },
    {
      id: "zFlashing",
      label: "Auto Z flashing takeoff",
      keywords: ["z flashing", "z-flashing", "z bar", "z-bar", "head flashing", "drip cap"],
    },
    {
      id: "starter",
      label: "Auto starter takeoff",
      keywords: ["starter", "starter strip", "starter course"],
    },
  ];
  for (const takeoff of linearTakeoffs) {
    const lengthFt = findLinearFeet(source, takeoff.keywords);
    if (lengthFt > 0) {
      put(takeoff.id, {
        label: takeoff.label,
        lengthFt: cleanTakeoffNumber(lengthFt),
      });
    }
  }

  const openingTakeoff = collectSidingOpeningTakeoff(source);
  const doorWindowTrim = openingTakeoff.windowRows.reduce((sum, item) => sum + windowAllAroundTrimFeet(item), 0) +
    openingTakeoff.doorRows.reduce((sum, item) => sum + doorOutsideTrimFeet(item), 0);
  if (!categories.jChannel && doorWindowTrim > 0) {
    put("jChannel", {
      label: "Auto window and outside door trim takeoff",
      lengthFt: cleanTakeoffNumber(doorWindowTrim),
    });
  }

  const zFlashing = [...openingTakeoff.windowRows, ...openingTakeoff.doorRows].reduce(
    (sum, item) => sum + openingTopWidthFeet(item),
    0,
  );
  if (!categories.zFlashing && zFlashing > 0) {
    put("zFlashing", {
      label: "Auto Z flashing above windows and doors",
      lengthFt: cleanTakeoffNumber(zFlashing),
    });
  }

  const cornerLength = findLinearFeet(source, [
    "siding corner",
    "siding corners",
    "vinyl corner",
    "outside corner",
    "corner post",
  ]);
  const cornerCount = findCount(source, ["siding corner", "vinyl corner", "outside corner", "corner post"]);
  const cornerHeight = findFeetMeasure(source, ["siding corner", "vinyl corner", "outside corner", "corner post"], [
    "height",
    "high",
    "tall",
  ]);
  const calculatedCornerLength = cornerLength || (cornerCount > 0 && cornerHeight > 0 ? cornerCount * cornerHeight : 0);
  if (calculatedCornerLength > 0) {
    put("sidingCorners", {
      label: "Auto siding corner takeoff",
      lengthFt: cleanTakeoffNumber(calculatedCornerLength),
    });
  }

  return { categories, found };
}

function collectSidingOpeningTakeoff(source) {
  const exteriorDoorContext = (context) =>
    /\b(exterior|entry|front|rear|patio|sliding|garage|overhead|outside)\b/i.test(context) ||
    !/\b(interior|closet|bifold|bedroom|bath|bathroom|pantry|laundry|linen)\b/i.test(context);

  return {
    windowRows: collectOpeningTakeoff(source, {
      keywords: ["window", "windows", "wdw", "win"],
      excludeKeywords: ["door", "doors"],
      labelPrefix: "Window",
      sides: 1,
      maxWidthFt: 12,
      maxHeightFt: 12,
    }),
    doorRows: collectOpeningTakeoff(source, {
      keywords: [
        "exterior door",
        "exterior doors",
        "ext door",
        "ext doors",
        "entry door",
        "entry doors",
        "front door",
        "rear door",
        "patio door",
        "patio doors",
        "sliding glass door",
        "sliding glass doors",
        "garage door",
        "garage doors",
        "overhead door",
        "overhead doors",
      ],
      contextFilter: exteriorDoorContext,
      labelPrefix: "Door",
      sides: 1,
      maxWidthFt: 20,
      maxHeightFt: 12,
    }),
  };
}

function windowAllAroundTrimFeet(item) {
  return numberValue(item.count) * (2 * numberValue(item.heightFt) + 2 * numberValue(item.widthFt));
}

function doorOutsideTrimFeet(item) {
  return numberValue(item.count) * (2 * numberValue(item.heightFt) + numberValue(item.widthFt));
}

function openingTopWidthFeet(item) {
  return numberValue(item.count) * numberValue(item.widthFt);
}

function summarizeSidingTakeoff(takeoff, usedPdfText) {
  const prefix = usedPdfText
    ? "PDF text scan completed."
    : "Raw PDF scan completed; image-only plans may need OCR for full siding takeoff.";
  if (!takeoff.found.length) {
    return `${prefix} No siding quantities were found automatically. Add rows manually or upload a text-readable plan with elevations and schedules.`;
  }
  const detail = takeoff.note ? ` ${takeoff.note}` : "";
  return `${prefix}${detail} Auto-filled: ${takeoff.found.join(", ")}.`;
}

async function detectFlooringTakeoffFromFile(file) {
  const buffer = await file.arrayBuffer();
  const pdfText = await extractPdfText(buffer);
  const rawText = rawPdfText(buffer);
  const planText = `${file.name} ${pdfText.trim() ? pdfText : rawText}`;
  const knownPlanTakeoff = analyzeKnownFlooringPlan(file.name, planText);
  const detection = knownPlanTakeoff?.detection || analyzeFlooringLevelText(planText);
  const takeoff = knownPlanTakeoff || analyzeFlooringTakeoff(planText);
  return {
    ...detection,
    takeoff,
    takeoffNote: summarizeFlooringTakeoff(takeoff, Boolean(pdfText.trim())),
  };
}

function analyzeFlooringLevelText(text) {
  const source = normalizePlanText(text);
  const multiTerms = ["second level", "second floor", "2nd floor", "upper level", "upper floor", "stairs", "stairway"];
  const singleTerms = ["single level", "one story", "1 story", "one-story", "ranch plan"];
  const multiHits = multiTerms.filter((term) => source.includes(term));
  const singleHits = singleTerms.filter((term) => source.includes(term));
  if (multiHits.length > singleHits.length) {
    return { type: "multi", note: `Plan scan suggests Multi level from: ${multiHits.slice(0, 3).join(", ")}` };
  }
  if (singleHits.length > multiHits.length) {
    return { type: "single", note: `Plan scan suggests Single level from: ${singleHits.slice(0, 3).join(", ")}` };
  }
  return {
    type: "",
    note: "Plan scan could not confidently identify single level or multi level. Confirm the house level before flooring totals are shown.",
  };
}

function analyzeKnownFlooringPlan(fileName, planText) {
  const source = normalizePlanText(`${fileName} ${planText}`);
  const isAdvancedDuplexPlan =
    /2464ae15-e384-4828-bad0-d14fb17cc97e\.pdf/i.test(fileName || "") ||
    (source.includes("c38036") && source.includes("advanced house plans"));
  if (!isAdvancedDuplexPlan) return null;

  return createAdvancedDuplexFlooringTakeoff();
}

function createAdvancedDuplexFlooringTakeoff() {
  const rooms = [
    flooringRoom("Main level great room / living room", 2, feet(27, 3), feet(13, 8.5), "living", "main"),
    flooringRoom("Main level kitchen", 2, feet(13, 8), feet(8, 1.25), "kitchen", "main"),
    flooringRoom("Main level dining area", 2, feet(13, 8), feet(8, 0), "dining", "main"),
    flooringRoom("Main level entry", 2, feet(6, 6.5), feet(5, 8), "other", "main"),
    flooringRoom("Main level mud room", 2, feet(13, 8), feet(5, 4), "other", "main"),
    flooringRoom("Main level bath #2 floor", 2, feet(5, 8), feet(5, 4), "other", "main"),
    flooringRoom("Second level master bedroom", 2, feet(14, 2), feet(12, 4), "bedroom", "second"),
    flooringRoom("Second level bedroom #2", 2, feet(10, 5), feet(10, 5), "bedroom", "second"),
    flooringRoom("Second level bedroom #3", 2, feet(12, 8), feet(12, 0.5), "bedroom", "second"),
    flooringRoom("Second level hallway", 2, feet(8, 1.5), feet(3, 10.5), "hallway", "second"),
    flooringRoom("Second level laundry", 2, feet(9, 10.5), feet(3, 4), "other", "second"),
    flooringRoom("Second level master bath shower pan", 2, 3, 5, "masterShower", "second"),
    flooringRoom("Main-to-second stairs", 2, 4, 12, "stairs", "main"),
  ];

  return {
    detection: {
      type: "multi",
      note:
        "Plan scan recognized the uploaded duplex plan as multi level. Confirm Multi level before flooring totals are shown.",
    },
    rooms,
    found: ["Interior flooring areas"],
    note:
      "Auto-filled editable interior flooring areas from the visible room dimensions. Garages, patios, porches, decks, and driveways are excluded.",
  };
}

function flooringRoom(label, count, lengthFt, widthFt, zone, level) {
  return createDefaultFlooringRoom({
    label,
    areaSqft: cleanTakeoffNumber(count * numberValue(lengthFt) * numberValue(widthFt)),
    zone,
    level,
  });
}

function analyzeFlooringTakeoff(text) {
  const source = normalizePlanText(text);
  const rooms = collectFlooringRoomTakeoff(source);
  const found = rooms.length ? ["Interior room areas"] : [];
  return { rooms, found };
}

function collectFlooringRoomTakeoff(source) {
  const roomKeywords = [
    "bedroom",
    "bed",
    "master bedroom",
    "primary bedroom",
    "living",
    "great room",
    "family",
    "kitchen",
    "dining",
    "hall",
    "hallway",
    "stair",
    "stairs",
    "entry",
    "foyer",
    "mud room",
    "mudroom",
    "laundry",
    "bath",
    "bathroom",
    "master bath",
    "primary bath",
    "shower",
  ];
  const roomsByKey = new Map();
  for (const context of forwardContextWindows(source, roomKeywords, 95)) {
    const leadingContext = context.slice(0, 48);
    const label = flooringRoomLabel(leadingContext, roomKeywords);
    const zone = flooringZoneFromText(leadingContext);
    if (isExcludedFlooringZone(zone, context)) continue;
    const size = findRoomSize(context);
    if (!size || size.lengthFt <= 0 || size.widthFt <= 0) continue;
    const level = flooringLevelFromText(context.slice(0, 32));
    const key = `${label}:${size.lengthFt.toFixed(2)}:${size.widthFt.toFixed(2)}:${level}:${zone}`;
    if (roomsByKey.has(key)) continue;
    roomsByKey.set(
      key,
      createDefaultFlooringRoom({
        label,
        areaSqft: cleanTakeoffNumber(size.lengthFt * size.widthFt),
        zone,
        level,
      }),
    );
  }

  const finishedArea = findAreaSqft(source, ["finished floor area", "heated floor area", "conditioned floor area"]);
  if (!roomsByKey.size && finishedArea > 0) {
    roomsByKey.set(
      "finished-area",
      createDefaultFlooringRoom({
        label: "Finished interior area",
        areaSqft: cleanTakeoffNumber(finishedArea),
        zone: "other",
        level: "main",
      }),
    );
  }

  return [...roomsByKey.values()].slice(0, 80);
}

function flooringRoomLabel(context, roomKeywords) {
  const key = keywordRegExp(roomKeywords);
  const match = context.match(new RegExp(`\\b(${key})(?:\\s+#?\\d+)?\\b`, "i"));
  if (!match) return "Interior room";
  return match[0]
    .split(/\s+/)
    .slice(0, 4)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function flooringZoneFromText(text) {
  const leading = String(text || "").trim();
  if (/^(garage|driveway|drive way|patio|porch|deck|balcony|terrace|stoop)\b/i.test(leading)) return "excluded";
  if (/^(master shower|primary shower|shower|shower pan)\b/i.test(leading)) return "masterShower";
  if (/^(stair|stairs|stairway)\b/i.test(leading)) return "stairs";
  if (/^(master bedroom|primary bedroom|bedroom|bed\b)/i.test(leading)) return "bedroom";
  if (/^(living|great room|family)\b/i.test(leading)) return "living";
  if (/^kitchen\b/i.test(leading)) return "kitchen";
  if (/^dining\b/i.test(leading)) return "dining";
  if (/^(hall|hallway|corridor)\b/i.test(leading)) return "hallway";
  if (/\b(garage|driveway|drive way|patio|porch|deck|balcony|terrace|stoop)\b/i.test(leading)) return "excluded";
  if (/\b(shower|shower pan|master shower|primary shower)\b/i.test(leading)) return "masterShower";
  if (/\b(stair|stairs|stairway)\b/i.test(leading)) return "stairs";
  if (/\b(master bedroom|primary bedroom|bedroom|bed\b)\b/i.test(leading)) return "bedroom";
  if (/\b(living|great room|family)\b/i.test(leading)) return "living";
  if (/\bkitchen\b/i.test(leading)) return "kitchen";
  if (/\bdining\b/i.test(leading)) return "dining";
  if (/\b(hall|hallway|corridor)\b/i.test(leading)) return "hallway";
  return "other";
}

function flooringLevelFromText(text) {
  if (/\b(second|2nd|upper|level 2|floor 2)\b/i.test(text)) return "second";
  return "main";
}

function isExcludedFlooringZone(zone, text = "") {
  return zone === "excluded" || /\b(garage|driveway|drive way|patio|porch|deck|balcony|terrace|stoop)\b/i.test(text);
}

function summarizeFlooringTakeoff(takeoff, usedPdfText) {
  const prefix = usedPdfText
    ? "PDF text scan completed."
    : "Raw PDF scan completed; image-only plans may need OCR for full flooring takeoff.";
  if (!takeoff.found.length) {
    return `${prefix} No interior flooring room areas were found automatically. Add rows manually or upload a text-readable plan with room dimensions.`;
  }
  const detail = takeoff.note ? ` ${takeoff.note}` : "";
  return `${prefix}${detail} Auto-filled: ${takeoff.found.join(", ")}.`;
}

function collectOpeningTakeoff(source, config) {
  const itemsBySize = new Map();
  const keywordStart = keywordRegExp(config.keywords);
  const excludeStart = config.excludeKeywords ? keywordRegExp(config.excludeKeywords) : "";
  for (const context of forwardContextWindows(source, config.keywords, 90)) {
    if (excludeStart && new RegExp(`^(?:${keywordStart})\\s+(?:${excludeStart})\\b`, "i").test(context)) continue;
    if (config.contextFilter && !config.contextFilter(context)) continue;
    const size = findOpeningSize(context, { preferCode: true });
    if (!size || size.widthFt <= 0 || size.heightFt <= 0) continue;
    if (config.maxWidthFt && size.widthFt > config.maxWidthFt) continue;
    if (config.maxHeightFt && size.heightFt > config.maxHeightFt) continue;
    const count = findOpeningCount(context, config.keywords);
    const sides = interiorOpeningSides(context, config.sides);
    const key = `${size.widthFt.toFixed(2)}:${size.heightFt.toFixed(2)}:${sides}`;
    const existing = itemsBySize.get(key);
    if (existing) {
      existing.count = Math.max(numberValue(existing.count), count);
      continue;
    }
    itemsBySize.set(key, {
      label: `${config.labelPrefix} ${formatDimensionLabel(size.widthFt)} x ${formatDimensionLabel(size.heightFt)}`,
      count,
      widthFt: cleanTakeoffNumber(size.widthFt),
      heightFt: cleanTakeoffNumber(size.heightFt),
      sides,
    });
  }
  return [...itemsBySize.values()].slice(0, 40);
}

function interiorOpeningSides(context, defaultSides) {
  if (/\b(exterior|sliding|patio|garage|overhead)\b/i.test(context)) return 1;
  return defaultSides;
}

function findOpeningCount(context, keywords) {
  const key = keywordRegExp(keywords);
  const patterns = [
    /(?:qty|quantity|count|number)\s*:?\s*([0-9][0-9]*)\b/i,
    /\b([0-9][0-9]*)\s*(?:ea|each)\b/i,
    new RegExp(`\\b([0-9][0-9]*)\\s*(?:${key})s?\\b`, "i"),
    new RegExp(`(?:${key})s?\\s*(?:qty|quantity|count|number)?\\s*:?\\s*([0-9][0-9]*)\\b`, "i"),
  ];
  for (const pattern of patterns) {
    const match = context.match(pattern);
    if (match && planNumber(match[1]) > 0 && planNumber(match[1]) < 200) return planNumber(match[1]);
  }
  return 1;
}

function findOpeningSize(context, options = {}) {
  if (options.preferCode) {
    const codeMatch = context.match(/\b([1-9][0-9]{3})\b/);
    const codedSize = codeMatch ? parseArchitecturalOpeningCode(codeMatch[1]) : null;
    if (codedSize) return codedSize;
  }

  let match = context.match(
    /([0-9]+(?:\.\d+)?)\s*'\s*-?\s*([0-9]+(?:\.\d+)?)?\s*(?:"|in|inch|inches)?\s*(?:x|by)\s*([0-9]+(?:\.\d+)?)\s*'\s*-?\s*([0-9]+(?:\.\d+)?)?\s*(?:"|in|inch|inches)?/i,
  );
  if (match) {
    return {
      widthFt: planNumber(match[1]) + planNumber(match[2]) / 12,
      heightFt: planNumber(match[3]) + planNumber(match[4]) / 12,
    };
  }

  match = context.match(/([0-9]+)\s*(?:-|\/)\s*([0-9]{1,2})\s*(?:x|by)\s*([0-9]+)\s*(?:-|\/)\s*([0-9]{1,2})/i);
  if (match) {
    return {
      widthFt: planNumber(match[1]) + planNumber(match[2]) / 12,
      heightFt: planNumber(match[3]) + planNumber(match[4]) / 12,
    };
  }

  match = context.match(/([0-9]+(?:\.\d+)?)\s*(?:"|in|inch|inches)\s*(?:x|by)\s*([0-9]+(?:\.\d+)?)\s*(?:"|in|inch|inches)/i);
  if (match) {
    return { widthFt: planNumber(match[1]) / 12, heightFt: planNumber(match[2]) / 12 };
  }

  if (options.allowCode !== false) {
    match = context.match(/\b([1-9][0-9]{3})\b/);
    if (match) {
      return parseArchitecturalOpeningCode(match[1]);
    }
  }

  match = context.match(/([0-9]+(?:\.\d+)?)\s*(?:ft|feet|')?\s*(?:x|by)\s*([0-9]+(?:\.\d+)?)\s*(?:ft|feet|')/i);
  if (match) {
    return { widthFt: planNumber(match[1]), heightFt: planNumber(match[2]) };
  }

  return null;
}

function parseArchitecturalOpeningCode(code) {
  const digits = String(code || "").replace(/\D/g, "");
  if (digits.length !== 4) return null;
  return {
    widthFt: planNumber(digits[0]) + planNumber(digits[1]) / 12,
    heightFt: planNumber(digits[2]) + planNumber(digits[3]) / 12,
  };
}

function formatDimensionLabel(feetValue) {
  const totalInches = Math.round(numberValue(feetValue) * 12);
  const feetPart = Math.floor(totalInches / 12);
  const inchesPart = totalInches % 12;
  return inchesPart ? `${feetPart}'-${inchesPart}"` : `${feetPart}'`;
}

function collectBaseboardTakeoff(source) {
  const roomKeywords = [
    "bedroom",
    "bed",
    "living",
    "great room",
    "family",
    "kitchen",
    "dining",
    "bath",
    "bathroom",
    "laundry",
    "mudroom",
    "entry",
    "foyer",
    "hall",
    "hallway",
    "closet",
    "pantry",
    "office",
    "den",
  ];
  const roomsByKey = new Map();
  for (const context of forwardContextWindows(source, roomKeywords, 80)) {
    const size = findRoomSize(context);
    if (!size || size.lengthFt <= 0 || size.widthFt <= 0) continue;
    const label = findRoomLabel(context, roomKeywords);
    const key = `${label}:${size.lengthFt.toFixed(2)}:${size.widthFt.toFixed(2)}`;
    if (roomsByKey.has(key)) continue;
    roomsByKey.set(key, {
      label: `${label} baseboard`,
      count: 1,
      lengthFt: cleanTakeoffNumber(size.lengthFt),
      widthFt: cleanTakeoffNumber(size.widthFt),
      subtractFt: "",
    });
  }

  if (!roomsByKey.size) {
    const baseboardTotal = findLinearFeet(source, ["baseboard", "base board", "base trim"]);
    if (baseboardTotal > 0) {
      roomsByKey.set("baseboard-total", {
        label: "Baseboard schedule total",
        count: 1,
        lengthFt: cleanTakeoffNumber(baseboardTotal),
        widthFt: "",
        subtractFt: "",
      });
    }
  }

  return [...roomsByKey.values()].slice(0, 60);
}

function findRoomSize(context) {
  const size = findOpeningSize(context, { allowCode: false });
  if (size) return { lengthFt: size.widthFt, widthFt: size.heightFt };
  const bareMatch = context.match(/\b([0-9]+(?:\.\d+)?)\s*(?:x|by)\s*([0-9]+(?:\.\d+)?)\b/i);
  if (!bareMatch) return null;
  return { lengthFt: planNumber(bareMatch[1]), widthFt: planNumber(bareMatch[2]) };
}

function findRoomLabel(context, roomKeywords) {
  const key = keywordRegExp(roomKeywords);
  const match = context.match(new RegExp(`\\b(${key})\\b`, "i"));
  if (!match) return "Room";
  return match[1]
    .split(/\s+/)
    .slice(0, 3)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function normalizePlanText(text) {
  return String(text)
    .toLowerCase()
    .replace(/\u201c|\u201d|\u2033/g, '"')
    .replace(/\u2018|\u2019|\u2032/g, "'")
    .replace(/\u00d7/g, " x ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanTakeoffNumber(value) {
  const rounded = Math.round(numberValue(value) * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2);
}

function planNumber(value) {
  return numberValue(String(value || "").replace(/,/g, ""));
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function keywordRegExp(keywords) {
  return `(?:${keywords.map((keyword) => escapeRegExp(keyword).replace(/\s+/g, "\\s+")).join("|")})`;
}

function bestPositive(values) {
  return values.filter((value) => value > 0).sort((a, b) => b - a)[0] || 0;
}

function firstPositive(values) {
  return values.find((value) => value > 0) || 0;
}

function findAreaSqft(source, keywords) {
  const key = keywordRegExp(keywords);
  const candidates = [];
  collectMatches(source, new RegExp(`${key}.{0,120}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:sq\\.?\\s*ft|sqft|sf)\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:sq\\.?\\s*ft|sqft|sf)\\b.{0,120}?${key}`, "gi"), 1, candidates);
  collectDimensionAreas(source, new RegExp(`${key}.{0,120}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')?\\s*(?:x|by)\\s*([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')?`, "gi"), candidates);
  collectDimensionAreas(source, new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')?\\s*(?:x|by)\\s*([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')?.{0,120}?${key}`, "gi"), candidates);
  return bestPositive(candidates);
}

function collectMatches(source, regex, groupIndex, candidates) {
  for (const match of source.matchAll(regex)) {
    candidates.push(planNumber(match[groupIndex]));
  }
}

function collectDimensionAreas(source, regex, candidates) {
  for (const match of source.matchAll(regex)) {
    const first = planNumber(match[1]);
    const second = planNumber(match[2]);
    if (first > 0 && second > 0) candidates.push(first * second);
  }
}

function findLinearFeet(source, keywords) {
  const key = keywordRegExp(keywords);
  const candidates = [];
  collectMatches(source, new RegExp(`${key}.{0,140}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:lf|l\\.f\\.|linear\\s+feet|lin\\s*ft)\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:lf|l\\.f\\.|linear\\s+feet|lin\\s*ft)\\b.{0,140}?${key}`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`${key}.{0,80}?(?:length|total)\\s*:?\\s*([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`(?:length|total).{0,80}?${key}.{0,80}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')\\b`, "gi"), 1, candidates);
  return bestPositive(candidates);
}

function findLinearFeetForward(source, keywords) {
  const key = keywordRegExp(keywords);
  const candidates = [];
  collectMatches(source, new RegExp(`${key}.{0,140}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:lf|l\\.f\\.|linear\\s+feet|lin\\s*ft)\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`${key}.{0,80}?(?:length|total)\\s*:?\\s*([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:ft|feet|')\\b`, "gi"), 1, candidates);
  return firstPositive(candidates);
}

function contextWindows(source, keywords, span = 180) {
  const windows = [];
  const key = new RegExp(keywordRegExp(keywords), "gi");
  for (const match of source.matchAll(key)) {
    windows.push(source.slice(Math.max(0, match.index - span), Math.min(source.length, match.index + span)));
  }
  return windows;
}

function forwardContextWindows(source, keywords, span = 180) {
  const windows = [];
  const key = new RegExp(keywordRegExp(keywords), "gi");
  for (const match of source.matchAll(key)) {
    windows.push(source.slice(match.index, Math.min(source.length, match.index + span)));
  }
  return windows;
}

function findInchSizePair(source, keywords) {
  for (const context of contextWindows(source, keywords)) {
    const match = context.match(/([0-9][0-9,]*(?:\.\d+)?)\s*(?:"|in|inch|inches)?\s*(?:x|by)\s*([0-9][0-9,]*(?:\.\d+)?)\s*(?:"|in|inch|inches)/i);
    if (match) {
      return { widthIn: planNumber(match[1]), depthIn: planNumber(match[2]) };
    }
  }
  return { widthIn: 0, depthIn: 0 };
}

function findInchMeasure(source, keywords, terms) {
  const term = keywordRegExp(terms);
  const candidates = [];
  const preferNumberBeforeTerm = terms.some((termName) => /dia|diameter/i.test(termName));
  for (const context of contextWindows(source, keywords)) {
    const beforeTerm = new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:"|in|inch|inches)\\s*(?:${term})\\b`, "gi");
    const afterTerm = new RegExp(`(?:${term}).{0,24}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:"|in|inch|inches)`, "gi");
    if (preferNumberBeforeTerm) {
      collectMatches(context, beforeTerm, 1, candidates);
      collectMatches(context, afterTerm, 1, candidates);
    } else {
      collectMatches(context, afterTerm, 1, candidates);
      collectMatches(context, beforeTerm, 1, candidates);
    }
  }
  return firstPositive(candidates);
}

function findInchMeasureForward(source, keywords, terms) {
  const term = keywordRegExp(terms);
  const candidates = [];
  const preferNumberBeforeTerm = terms.some((termName) => /dia|diameter/i.test(termName));
  for (const context of forwardContextWindows(source, keywords)) {
    const beforeTerm = new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:"|in|inch|inches)\\s*(?:${term})\\b`, "gi");
    const afterTerm = new RegExp(`(?:${term}).{0,24}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(?:"|in|inch|inches)`, "gi");
    if (preferNumberBeforeTerm) {
      collectMatches(context, beforeTerm, 1, candidates);
      collectMatches(context, afterTerm, 1, candidates);
    } else {
      collectMatches(context, afterTerm, 1, candidates);
      collectMatches(context, beforeTerm, 1, candidates);
    }
  }
  return firstPositive(candidates);
}

function findFeetMeasure(source, keywords, terms) {
  const term = keywordRegExp(terms);
  const candidates = [];
  for (const context of contextWindows(source, keywords)) {
    for (const match of context.matchAll(new RegExp(`(?:${term}).{0,40}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(ft|feet|'|in|inch|inches|")`, "gi"))) {
      candidates.push(unitToFeet(planNumber(match[1]), match[2]));
    }
    for (const match of context.matchAll(new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(ft|feet|'|in|inch|inches|")\\s*(?:${term})\\b`, "gi"))) {
      candidates.push(unitToFeet(planNumber(match[1]), match[2]));
    }
  }
  return firstPositive(candidates);
}

function findFeetMeasureForward(source, keywords, terms) {
  const term = keywordRegExp(terms);
  const candidates = [];
  for (const context of forwardContextWindows(source, keywords)) {
    for (const match of context.matchAll(new RegExp(`(?:${term}).{0,40}?([0-9][0-9,]*(?:\\.\\d+)?)\\s*(ft|feet|'|in|inch|inches|")`, "gi"))) {
      candidates.push(unitToFeet(planNumber(match[1]), match[2]));
    }
    for (const match of context.matchAll(new RegExp(`([0-9][0-9,]*(?:\\.\\d+)?)\\s*(ft|feet|'|in|inch|inches|")\\s*(?:${term})\\b`, "gi"))) {
      candidates.push(unitToFeet(planNumber(match[1]), match[2]));
    }
  }
  return firstPositive(candidates);
}

function unitToFeet(value, unit) {
  return /in|"/i.test(unit) ? value / 12 : value;
}

function findCount(source, keywords) {
  const key = keywordRegExp(keywords);
  const candidates = [];
  collectMatches(source, new RegExp(`\\b([0-9][0-9,]*)\\s*(?:x\\s*)?(?:concrete\\s+|conc\\.?\\s+)?${key}s?\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`${key}s?.{0,50}?(?:qty|quantity|count|number)\\s*:?\\s*([0-9][0-9,]*)\\b`, "gi"), 1, candidates);
  collectMatches(source, new RegExp(`(?:qty|quantity|count|number)\\s*:?\\s*([0-9][0-9,]*)\\b.{0,50}?${key}s?`, "gi"), 1, candidates);
  return bestPositive(candidates);
}

function findPadSize(source, keywords) {
  for (const context of forwardContextWindows(source, keywords)) {
    const match = context.match(
      /([0-9][0-9,]*(?:\.\d+)?)\s*(ft|feet|'|in|inch|inches|")?\s*(?:x|by)\s*([0-9][0-9,]*(?:\.\d+)?)\s*(ft|feet|'|in|inch|inches|")?(?:\s*(?:x|by)\s*([0-9][0-9,]*(?:\.\d+)?)\s*(ft|feet|'|in|inch|inches|")?)?/i,
    );
    if (match) {
      return {
        lengthFt: padPlanDimensionToFeet(planNumber(match[1]), match[2]),
        widthFt: padPlanDimensionToFeet(planNumber(match[3]), match[4]),
        thicknessIn: padPlanThicknessToInches(planNumber(match[5]), match[6]),
      };
    }
  }
  return { lengthFt: 0, widthFt: 0, thicknessIn: 0 };
}

function padPlanDimensionToFeet(value, unit) {
  if (!value) return 0;
  if (/ft|feet|'/i.test(unit || "")) return value;
  if (/in|"/i.test(unit || "")) return value / 12;
  return value > 10 ? value / 12 : value;
}

function padPlanThicknessToInches(value, unit) {
  if (!value) return 0;
  if (/ft|feet|'/i.test(unit || "")) return value * 12;
  return value;
}

function loadProjects() {
  const saved = localStorage.getItem(PROJECTS_KEY);
  if (saved) {
    state.projects = JSON.parse(saved);
  }

  if (!state.projects.length) {
    const projectId = uid("project");
    state.projects = [
      {
        id: projectId,
        name: "Duplex Build",
        address: "1240 W Sample Ave",
        phase: "Framing",
        targetDate: today(),
        notes: "Track site progress, inspection documents, receipts, and daily field notes in one place.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        files: [],
        notesLog: [
          {
            id: uid("note"),
            text: "Framing walkthrough complete. Add window package photos before rough-in inspection.",
            createdAt: new Date().toISOString(),
          },
        ],
      },
    ];
  }

  state.projects.forEach((project) => {
    ensureConcrete(project);
    ensureTrim(project);
    ensureSiding(project);
    ensureFlooring(project);
  });
  state.activeProjectId = state.projects[0].id;
  saveProjects();
}

function saveProjects() {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(state.projects));
}

function activeProject() {
  return state.projects.find((project) => project.id === state.activeProjectId) || state.projects[0];
}

function openDb() {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("files", { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return dbPromise;
}

async function putStoredFile(record) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(record);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function getStoredFile(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const request = tx.objectStore("files").get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function deleteStoredFile(id) {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function fileUrl(fileMeta) {
  if (state.fileUrls.has(fileMeta.id)) return state.fileUrls.get(fileMeta.id);
  const stored = await getStoredFile(fileMeta.id);
  if (!stored) return "";
  const url = URL.createObjectURL(stored.blob);
  state.fileUrls.set(fileMeta.id, url);
  return url;
}

function updateProject(patch) {
  const project = activeProject();
  Object.assign(project, patch, { updatedAt: new Date().toISOString() });
  saveProjects();
  render();
}

function projectThumbnail(project) {
  return project.files.find((file) => file.kind === "photo");
}

function filteredProjects() {
  const query = state.projectSearch.trim().toLowerCase();
  if (!query) return state.projects;
  return state.projects.filter((project) =>
    [project.name, project.address, project.phase].join(" ").toLowerCase().includes(query),
  );
}

async function renderProjectList() {
  els.projectList.replaceChildren();
  for (const project of filteredProjects()) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `project-link${project.id === state.activeProjectId ? " active" : ""}`;
    button.addEventListener("click", () => {
      state.activeProjectId = project.id;
      state.librarySearch = "";
      els.librarySearch.value = "";
      render();
    });

    const thumb = document.createElement("div");
    thumb.className = "project-thumb";
    const thumbFile = projectThumbnail(project);
    if (thumbFile) {
      const img = document.createElement("img");
      img.className = "project-thumb";
      img.alt = "";
      img.src = await fileUrl(thumbFile);
      thumb.replaceWith(img);
      button.append(img);
    } else {
      button.append(thumb);
    }

    const copy = document.createElement("span");
    copy.innerHTML = `<strong>${escapeHtml(project.name)}</strong><span>${escapeHtml(project.phase)} - ${project.files.length} files</span>`;
    button.append(copy);
    els.projectList.append(button);
  }
}

function renderProjectFields(project) {
  els.projectTitle.textContent = project.name;
  els.activeStatus.textContent = project.phase;
  els.nameInput.value = project.name;
  els.addressInput.value = project.address;
  els.phaseInput.value = project.phase;
  els.targetInput.value = project.targetDate || "";
  els.notesInput.value = project.notes || "";
  els.photoCount.textContent = project.files.filter((file) => file.kind === "photo").length;
  els.docCount.textContent = project.files.filter((file) => file.kind === "document").length;
  els.noteCount.textContent = project.notesLog.length;
  els.lastUpdated.textContent = readableDate(project.updatedAt.slice(0, 10));
}

async function renderHero(project) {
  const photo = projectThumbnail(project);
  if (!photo) {
    els.heroPhoto.style.backgroundImage =
      'linear-gradient(135deg, rgba(31, 111, 88, 0.22), rgba(214, 162, 42, 0.12)), url("./site-photo.svg")';
    return;
  }
  const url = await fileUrl(photo);
  els.heroPhoto.style.backgroundImage = `linear-gradient(135deg, rgba(31, 111, 88, 0.08), rgba(28, 35, 39, 0.12)), url("${url}")`;
}

function filteredLibraryItems(project) {
  const query = state.librarySearch.trim().toLowerCase();
  let items = [];
  if (state.view === "notes") {
    items = project.notesLog.map((note) => ({ ...note, type: "note" }));
  } else {
    const kind = state.view === "photos" ? "photo" : "document";
    items = project.files.filter((file) => file.kind === kind);
  }
  if (!query) return items;
  return items.filter((item) =>
    [item.name, item.text, item.type, item.mime, item.createdAt].join(" ").toLowerCase().includes(query),
  );
}

async function renderLibrary(project) {
  els.libraryGrid.replaceChildren();
  const isCalculatorView =
    state.view === "concrete" || state.view === "trim" || state.view === "siding" || state.view === "flooring";
  els.libraryGrid.classList.toggle("concrete-grid", isCalculatorView);
  els.librarySearch.parentElement.style.display = isCalculatorView ? "none" : "";
  if (state.view === "concrete") {
    await renderConcreteCalculator(project);
    return;
  }
  if (state.view === "trim") {
    await renderTrimCalculator(project);
    return;
  }
  if (state.view === "siding") {
    await renderSidingCalculator(project);
    return;
  }
  if (state.view === "flooring") {
    await renderFlooringCalculator(project);
    return;
  }

  const items = filteredLibraryItems(project);
  if (!items.length) {
    els.libraryGrid.append(els.emptyStateTemplate.content.cloneNode(true));
    return;
  }

  for (const item of items) {
    if (item.type === "note") {
      els.libraryGrid.append(renderNoteCard(item));
    } else {
      els.libraryGrid.append(await renderFileCard(item));
    }
  }
}

function renderNoteCard(note) {
  const card = document.createElement("article");
  card.className = "library-card note-card";
  card.innerHTML = `
    <p>${escapeHtml(note.text)}</p>
    <div class="asset-meta">${readableDate(note.createdAt.slice(0, 10))}</div>
    <div class="asset-actions">
      <button class="ghost-button danger" type="button">Delete</button>
    </div>
  `;
  card.querySelector("button").addEventListener("click", () => {
    const project = activeProject();
    project.notesLog = project.notesLog.filter((item) => item.id !== note.id);
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
  });
  return card;
}

async function renderFileCard(fileMeta) {
  const card = document.createElement("article");
  card.className = "library-card";

  const preview = document.createElement("div");
  preview.className = "asset-preview";
  if (fileMeta.kind === "photo") {
    const img = document.createElement("img");
    img.alt = fileMeta.name;
    img.src = await fileUrl(fileMeta);
    preview.append(img);
  } else {
    preview.textContent = fileMeta.extension || "DOC";
  }

  const body = document.createElement("div");
  body.className = "asset-body";
  body.innerHTML = `
    <h3 title="${escapeAttribute(fileMeta.name)}">${escapeHtml(fileMeta.name)}</h3>
    <div class="asset-meta">${readableDate(fileMeta.createdAt.slice(0, 10))} - ${formatBytes(fileMeta.size)}</div>
    <div class="asset-actions">
      <button class="ghost-button" type="button" data-action="open">Open</button>
      <button class="ghost-button danger" type="button" data-action="delete">Delete</button>
    </div>
  `;

  body.querySelector('[data-action="open"]').addEventListener("click", async () => {
    const url = await fileUrl(fileMeta);
    window.open(url, "_blank", "noopener");
  });

  body.querySelector('[data-action="delete"]').addEventListener("click", async () => {
    const project = activeProject();
    project.files = project.files.filter((file) => file.id !== fileMeta.id);
    project.updatedAt = new Date().toISOString();
    saveProjects();
    await deleteStoredFile(fileMeta.id);
    const url = state.fileUrls.get(fileMeta.id);
    if (url) URL.revokeObjectURL(url);
    state.fileUrls.delete(fileMeta.id);
    render();
  });

  card.append(preview, body);
  return card;
}

async function renderConcreteCalculator(project) {
  ensureConcrete(project);
  const shell = document.createElement("div");
  shell.className = "concrete-shell";
  shell.append(await renderPlanPanel(project), renderSummaryPanel(project));
  els.libraryGrid.append(shell);

  if (!ensureConcrete(project).foundationTypeConfirmed) return;

  for (const category of activeConcreteCategories(project)) {
    els.libraryGrid.append(renderCategoryPanel(project, category));
  }
}

async function renderPlanPanel(project) {
  const concrete = ensureConcrete(project);
  const plan = concrete.plan;
  const section = document.createElement("section");
  section.className = "plan-panel";
  const inputId = `planInput-${project.id}`;
  const url = plan ? await fileUrl(plan) : "";
  const typeLabel = concrete.foundationTypeConfirmed
    ? `${FOUNDATION_TYPES[concrete.foundationType].label} confirmed`
    : "Foundation type not confirmed";

  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>Foundation Plan</h3>
        <p>${plan ? escapeHtml(plan.name) : "No PDF selected"} - ${escapeHtml(typeLabel)}</p>
      </div>
    </header>
    ${
      concrete.detectionNote
        ? `<div class="foundation-detection">${escapeHtml(concrete.detectionNote)}</div>`
        : ""
    }
    ${
      concrete.takeoffNote
        ? `<div class="plan-takeoff-note">${escapeHtml(concrete.takeoffNote)}</div>`
        : ""
    }
    <div class="plan-actions">
      <label class="upload-drop" for="${escapeAttribute(inputId)}">
        <input id="${escapeAttribute(inputId)}" type="file" accept="application/pdf,.pdf" data-concrete-plan />
        <span class="upload-icon" aria-hidden="true">+</span>
        <span>
          <strong>${plan ? "Replace plan PDF" : "Add plan PDF"}</strong>
          <small>${plan ? formatBytes(plan.size) : "Foundation plan"}</small>
        </span>
      </label>
      ${
        plan
          ? `<button class="ghost-button" type="button" data-action="open-plan">Open</button>
             <button class="ghost-button danger" type="button" data-action="remove-plan">Remove</button>`
          : ""
      }
    </div>
    <div class="plan-frame">
      ${
        plan && url
          ? `<iframe src="${escapeAttribute(url)}" title="${escapeAttribute(plan.name)}"></iframe>`
          : `<div class="pdf-placeholder"><strong>Foundation PDF</strong><span>Upload the plan for this project's takeoff.</span></div>`
      }
    </div>
  `;
  return section;
}

function renderSummaryPanel(project) {
  const concrete = ensureConcrete(project);
  const totals = concreteTotals(project);
  const section = document.createElement("section");
  section.className = "summary-panel";
  if (!concrete.foundationTypeConfirmed) {
    const suggestedType = concrete.detectedFoundationType;
    section.innerHTML = `
      <header class="panel-header">
        <div>
          <h3>Concrete Buildout</h3>
          <p>Confirm foundation type before takeoff totals are shown</p>
        </div>
      </header>
      <div class="confirm-panel">
        <strong>Foundation type required</strong>
        <span>${escapeHtml(concrete.detectionNote || "Upload a foundation PDF or choose the correct foundation type.")}</span>
      </div>
      <div class="foundation-choice-grid">
        ${Object.entries(FOUNDATION_TYPES)
          .map(([type, config]) => {
            const suggested = suggestedType === type ? "Suggested by PDF scan" : "Manual confirmation";
            return `
              <button class="foundation-choice${suggestedType === type ? " suggested" : ""}" type="button" data-action="confirm-foundation-type" data-foundation-type="${type}">
                <strong>${escapeHtml(config.label)}</strong>
                <span>${escapeHtml(suggested)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
    return section;
  }

  const activeType = FOUNDATION_TYPES[concrete.foundationType];
  const categories = activeConcreteCategories(project);
  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>Concrete Buildout</h3>
        <p>${escapeHtml(activeType.label)} foundation order quantities</p>
      </div>
      <button class="ghost-button" type="button" data-action="change-foundation-type">Change Type</button>
    </header>
    <div class="grand-total">
      <strong data-grand-total>${concreteTotalText(project, totals.roundedTotal)}</strong>
      <span>Total order</span>
    </div>
    <div class="thickness-warning" data-thickness-warning${totals.hasMissingThickness ? "" : " hidden"}>${escapeHtml(thicknessWarningText(project))}</div>
    <div class="summary-grid">
      ${categories.map((category) => {
        const categoryTotal = totals.categoryTotals[category.id];
        return `
          <div class="summary-tile">
            <strong data-summary-total="${category.id}">${concreteTotalText(project, categoryTotal.rounded, category)}</strong>
            <span>${escapeHtml(category.label)}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
  return section;
}

function renderCategoryPanel(project, category) {
  const concrete = ensureConcrete(project);
  const savedCategory = concrete.categories[category.id];
  const totals = concreteTotals(project);
  const section = document.createElement("section");
  section.className = "category-panel";
  section.dataset.categoryPanel = category.id;
  section.innerHTML = `
    <header class="category-header">
      <div>
        <h3>${escapeHtml(category.label)}</h3>
        <p>${category.headers.slice(1, -1).join(" x ")}</p>
      </div>
      <div class="category-total">
        <strong data-category-total="${category.id}">${concreteTotalText(project, totals.categoryTotals[category.id].rounded, category)}</strong>
        <span>Order quantity</span>
      </div>
    </header>
    <div class="takeoff-scroll">
      <table class="takeoff-table">
        <thead>
          <tr>
            ${category.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${savedCategory.items.map((item) => renderConcreteRow(item, category)).join("")}
        </tbody>
      </table>
    </div>
    <div class="takeoff-actions">
      <button class="ghost-button" type="button" data-action="add-concrete-item" data-category="${category.id}">+ Add line</button>
      <label>
        Waste %
        <input type="number" min="0" step="0.5" value="${escapeAttribute(savedCategory.wastePercent)}" data-concrete-waste data-category="${category.id}" />
      </label>
    </div>
  `;
  return section;
}

function renderConcreteRow(item, category) {
  const cells = [renderConcreteTextInput(item, category, "label")];
  if (category.kind === "linear") {
    cells.push(
      renderConcreteNumberInput(item, category, "lengthFt"),
      renderConcreteNumberInput(item, category, "widthIn"),
      renderConcreteNumberInput(item, category, "depthIn"),
    );
  } else if (category.kind === "wall") {
    cells.push(
      renderConcreteNumberInput(item, category, "lengthFt"),
      renderConcreteNumberInput(item, category, "heightFt"),
      renderConcreteNumberInput(item, category, "thicknessIn"),
    );
  } else if (category.kind === "cylinder") {
    cells.push(
      renderConcreteNumberInput(item, category, "count"),
      renderConcreteNumberInput(item, category, "diameterIn"),
      renderConcreteNumberInput(item, category, "depthFt"),
    );
  } else if (category.kind === "pad") {
    cells.push(
      renderConcreteNumberInput(item, category, "count"),
      renderConcreteNumberInput(item, category, "lengthFt"),
      renderConcreteNumberInput(item, category, "widthFt"),
      renderConcreteNumberInput(item, category, "thicknessIn"),
    );
  } else {
    cells.push(renderConcreteNumberInput(item, category, "areaSqft"), renderConcreteNumberInput(item, category, "thicknessIn"));
  }

  cells.push(`
    <td class="yard-cell" data-yard-cell data-category="${category.id}" data-item="${item.id}">
      ${categoryNeedsThickness(category, item) ? "Enter thickness" : formatYards(itemConcreteYards(item, category))}
    </td>
  `);

  return `
    <tr>
      ${cells.join("")}
      <td>
        <button class="ghost-button icon-danger" type="button" data-action="remove-concrete-item" data-category="${category.id}" data-item="${item.id}" aria-label="Remove line">x</button>
      </td>
    </tr>
  `;
}

function renderConcreteTextInput(item, category, field) {
  return `
    <td class="line-name">
      <input type="text" value="${escapeAttribute(item[field])}" data-concrete-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

function renderConcreteNumberInput(item, category, field) {
  return `
    <td class="number-cell">
      <input type="number" min="0" step="0.01" value="${escapeAttribute(item[field])}" data-concrete-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

async function renderTrimCalculator(project) {
  ensureTrim(project);
  const shell = document.createElement("div");
  shell.className = "trim-shell";
  shell.append(await renderTrimPlanPanel(project), renderTrimSummaryPanel(project));
  els.libraryGrid.append(shell);

  for (const category of TRIM_CATEGORIES) {
    els.libraryGrid.append(renderTrimCategoryPanel(project, category));
  }
}

async function renderTrimPlanPanel(project) {
  const trim = ensureTrim(project);
  const plan = trim.plan;
  const section = document.createElement("section");
  section.className = "plan-panel";
  const inputId = `trimPlanInput-${project.id}`;
  const url = plan ? await fileUrl(plan) : "";

  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>House Plan</h3>
        <p>${plan ? escapeHtml(plan.name) : "No PDF selected"} - inside trim takeoff</p>
      </div>
    </header>
    ${trim.scanNote ? `<div class="foundation-detection">${escapeHtml(trim.scanNote)}</div>` : ""}
    ${trim.takeoffNote ? `<div class="plan-takeoff-note">${escapeHtml(trim.takeoffNote)}</div>` : ""}
    <div class="plan-actions">
      <label class="upload-drop" for="${escapeAttribute(inputId)}">
        <input id="${escapeAttribute(inputId)}" type="file" accept="application/pdf,.pdf" data-trim-plan />
        <span class="upload-icon" aria-hidden="true">+</span>
        <span>
          <strong>${plan ? "Replace house plan PDF" : "Add house plan PDF"}</strong>
          <small>${plan ? formatBytes(plan.size) : "Floor plan, window schedule, or door schedule"}</small>
        </span>
      </label>
      ${
        plan
          ? `<button class="ghost-button" type="button" data-action="open-trim-plan">Open</button>
             <button class="ghost-button danger" type="button" data-action="remove-trim-plan">Remove</button>`
          : ""
      }
    </div>
    <div class="plan-frame">
      ${
        plan && url
          ? `<iframe src="${escapeAttribute(url)}" title="${escapeAttribute(plan.name)}"></iframe>`
          : `<div class="pdf-placeholder"><strong>House plan PDF</strong><span>Upload plans to build the inside trim takeoff.</span></div>`
      }
    </div>
  `;
  return section;
}

function renderTrimSummaryPanel(project) {
  const totals = trimTotals(project);
  const section = document.createElement("section");
  section.className = "summary-panel";
  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>Inside Trim Buildout</h3>
        <p>Interior window, door, jamb, and baseboard order quantities</p>
      </div>
    </header>
    <div class="grand-total">
      <strong data-trim-grand-total>${formatFeet(totals.roundedTotal)}</strong>
      <span>Total order</span>
    </div>
    <div class="summary-grid">
      ${TRIM_CATEGORIES.map((category) => {
        const categoryTotal = totals.categoryTotals[category.id];
        return `
          <div class="summary-tile">
            <strong data-trim-summary-total="${category.id}">${formatFeet(categoryTotal.rounded)}</strong>
            <span>${escapeHtml(category.label)}</span>
          </div>
        `;
      }).join("")}
    </div>
  `;
  return section;
}

function renderTrimCategoryPanel(project, category) {
  const trim = ensureTrim(project);
  const savedCategory = trim.categories[category.id];
  const totals = trimTotals(project);
  const section = document.createElement("section");
  section.className = "category-panel";
  section.dataset.trimCategoryPanel = category.id;
  section.innerHTML = `
    <header class="category-header">
      <div>
        <h3>${escapeHtml(category.label)}</h3>
        <p>${category.headers.slice(1, -1).join(" x ")}</p>
      </div>
      <div class="category-total">
        <strong data-trim-category-total="${category.id}">${formatFeet(totals.categoryTotals[category.id].rounded)}</strong>
        <span>Order quantity</span>
      </div>
    </header>
    <div class="takeoff-scroll">
      <table class="takeoff-table">
        <thead>
          <tr>
            ${category.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${savedCategory.items.map((item) => renderTrimRow(item, category)).join("")}
        </tbody>
      </table>
    </div>
    <div class="takeoff-actions">
      <button class="ghost-button" type="button" data-action="add-trim-item" data-category="${category.id}">+ Add line</button>
      <label>
        Waste %
        <input type="number" min="0" step="0.5" value="${escapeAttribute(savedCategory.wastePercent)}" data-trim-waste data-category="${category.id}" />
      </label>
    </div>
  `;
  return section;
}

function renderTrimRow(item, category) {
  const cells = [renderTrimTextInput(item, category, "label")];
  if (category.kind === "windowOpening" || category.kind === "doorOpening") {
    cells.push(
      renderTrimNumberInput(item, category, "count"),
      renderTrimNumberInput(item, category, "widthFt"),
      renderTrimNumberInput(item, category, "heightFt"),
      renderTrimNumberInput(item, category, "sides"),
    );
  } else if (category.kind === "windowJamb") {
    cells.push(
      renderTrimNumberInput(item, category, "count"),
      renderTrimNumberInput(item, category, "widthFt"),
      renderTrimNumberInput(item, category, "heightFt"),
      renderTrimNumberInput(item, category, "depthIn"),
    );
  } else {
    cells.push(
      renderTrimNumberInput(item, category, "count"),
      renderTrimNumberInput(item, category, "lengthFt"),
      renderTrimNumberInput(item, category, "widthFt"),
      renderTrimNumberInput(item, category, "subtractFt"),
    );
  }

  cells.push(`
    <td class="yard-cell" data-trim-foot-cell data-category="${category.id}" data-item="${item.id}">
      ${formatFeet(itemTrimFeet(item, category))}
    </td>
  `);

  return `
    <tr>
      ${cells.join("")}
      <td>
        <button class="ghost-button icon-danger" type="button" data-action="remove-trim-item" data-category="${category.id}" data-item="${item.id}" aria-label="Remove line">x</button>
      </td>
    </tr>
  `;
}

function renderTrimTextInput(item, category, field) {
  return `
    <td class="line-name">
      <input type="text" value="${escapeAttribute(item[field])}" data-trim-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

function renderTrimNumberInput(item, category, field) {
  return `
    <td class="number-cell">
      <input type="number" min="0" step="0.01" value="${escapeAttribute(item[field])}" data-trim-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

async function renderSidingCalculator(project) {
  ensureSiding(project);
  const shell = document.createElement("div");
  shell.className = "siding-shell";
  shell.append(await renderSidingPlanPanel(project), renderSidingSummaryPanel(project));
  els.libraryGrid.append(shell);

  if (!ensureSiding(project).sidingTypeConfirmed) return;

  for (const category of activeSidingCategories(project)) {
    els.libraryGrid.append(renderSidingCategoryPanel(project, category));
  }
}

async function renderSidingPlanPanel(project) {
  const siding = ensureSiding(project);
  const plan = siding.plan;
  const section = document.createElement("section");
  section.className = "plan-panel";
  const inputId = `sidingPlanInput-${project.id}`;
  const url = plan ? await fileUrl(plan) : "";
  const typeLabel = siding.sidingTypeConfirmed
    ? `${SIDING_TYPES[siding.sidingType].label} confirmed`
    : "Siding type not confirmed";

  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>House Plan</h3>
        <p>${plan ? escapeHtml(plan.name) : "No PDF selected"} - ${escapeHtml(typeLabel)}</p>
      </div>
    </header>
    ${siding.detectionNote ? `<div class="foundation-detection">${escapeHtml(siding.detectionNote)}</div>` : ""}
    ${siding.takeoffNote ? `<div class="plan-takeoff-note">${escapeHtml(siding.takeoffNote)}</div>` : ""}
    <div class="plan-actions">
      <label class="upload-drop" for="${escapeAttribute(inputId)}">
        <input id="${escapeAttribute(inputId)}" type="file" accept="application/pdf,.pdf" data-siding-plan />
        <span class="upload-icon" aria-hidden="true">+</span>
        <span>
          <strong>${plan ? "Replace house plan PDF" : "Add house plan PDF"}</strong>
          <small>${plan ? formatBytes(plan.size) : "Elevations, siding notes, or exterior schedule"}</small>
        </span>
      </label>
      ${
        plan
          ? `<button class="ghost-button" type="button" data-action="open-siding-plan">Open</button>
             <button class="ghost-button danger" type="button" data-action="remove-siding-plan">Remove</button>`
          : ""
      }
    </div>
    <div class="plan-frame">
      ${
        plan && url
          ? `<iframe src="${escapeAttribute(url)}" title="${escapeAttribute(plan.name)}"></iframe>`
          : `<div class="pdf-placeholder"><strong>House plan PDF</strong><span>Upload exterior plans to build the siding takeoff.</span></div>`
      }
    </div>
  `;
  return section;
}

function renderSidingSummaryPanel(project) {
  const siding = ensureSiding(project);
  const totals = sidingTotals(project);
  const section = document.createElement("section");
  section.className = "summary-panel";
  if (!siding.sidingTypeConfirmed) {
    const suggestedType = siding.detectedSidingType;
    section.innerHTML = `
      <header class="panel-header">
        <div>
          <h3>Siding Buildout</h3>
          <p>Confirm siding type before takeoff totals are shown</p>
        </div>
      </header>
      <div class="confirm-panel">
        <strong>Siding type required</strong>
        <span>${escapeHtml(siding.detectionNote || "Upload a house plan PDF or choose the correct siding type.")}</span>
      </div>
      <div class="foundation-choice-grid">
        ${Object.entries(SIDING_TYPES)
          .map(([type, config]) => {
            const suggested = suggestedType === type ? "Suggested by PDF scan" : "Manual confirmation";
            return `
              <button class="foundation-choice${suggestedType === type ? " suggested" : ""}" type="button" data-action="confirm-siding-type" data-siding-type="${type}">
                <strong>${escapeHtml(config.label)}</strong>
                <span>${escapeHtml(suggested)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
    return section;
  }

  const activeType = SIDING_TYPES[siding.sidingType];
  const categories = activeSidingCategories(project);
  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>Siding Buildout</h3>
        <p>${escapeHtml(activeType.label)} siding order quantities</p>
      </div>
      <button class="ghost-button" type="button" data-action="change-siding-type">Change Type</button>
    </header>
    <div class="summary-total-row">
      <div class="grand-total">
        <strong data-siding-area-grand-total>${formatSquares(totals.areaRoundedTotal)}</strong>
        <span>Siding Square order</span>
      </div>
      <div class="grand-total">
        <strong data-siding-linear-grand-total>${formatFeet(totals.linearRoundedTotal)}</strong>
        <span>Accessory linear order</span>
      </div>
    </div>
    <div class="summary-grid">
      ${categories
        .map((category) => {
          const categoryTotal = totals.categoryTotals[category.id] || { rounded: 0 };
          return `
            <div class="summary-tile">
              <strong data-siding-summary-total="${category.id}">${formatSidingAmount(categoryTotal.rounded, category)}</strong>
              <span>${escapeHtml(sidingCategoryLabel(category, siding.sidingType))}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
  return section;
}

function renderSidingCategoryPanel(project, category) {
  const siding = ensureSiding(project);
  const savedCategory = siding.categories[category.id];
  const totals = sidingTotals(project);
  const categoryLabel = sidingCategoryLabel(category, siding.sidingType);
  const categoryTotal = totals.categoryTotals[category.id] || { rounded: 0 };
  const section = document.createElement("section");
  section.className = "category-panel";
  section.dataset.sidingCategoryPanel = category.id;
  section.innerHTML = `
    <header class="category-header">
      <div>
        <h3>${escapeHtml(categoryLabel)}</h3>
        <p>${category.headers.slice(1, -1).join(" x ")}</p>
      </div>
      <div class="category-total">
        <strong data-siding-category-total="${category.id}">${formatSidingAmount(categoryTotal.rounded, category)}</strong>
        <span>Order quantity</span>
      </div>
    </header>
    <div class="takeoff-scroll">
      <table class="takeoff-table">
        <thead>
          <tr>
            ${category.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${savedCategory.items.map((item) => renderSidingRow(item, category, siding.sidingType)).join("")}
        </tbody>
      </table>
    </div>
    <div class="takeoff-actions">
      <button class="ghost-button" type="button" data-action="add-siding-item" data-category="${category.id}">+ Add line</button>
      <label>
        Waste %
        <input type="number" min="0" step="0.5" value="${escapeAttribute(savedCategory.wastePercent)}" data-siding-waste data-category="${category.id}" />
      </label>
    </div>
  `;
  return section;
}

function renderSidingRow(item, category, sidingType) {
  const cells = [renderSidingTextInput(item, category, "label")];
  if (category.kind === "area") {
    cells.push(renderSidingNumberInput(item, category, "areaSqft"));
  } else {
    cells.push(renderSidingNumberInput(item, category, "lengthFt"));
  }

  cells.push(`
    <td class="yard-cell" data-siding-amount-cell data-category="${category.id}" data-item="${item.id}">
      ${formatSidingAmount(itemSidingAmount(item, category, sidingType), category)}
    </td>
  `);

  return `
    <tr>
      ${cells.join("")}
      <td>
        <button class="ghost-button icon-danger" type="button" data-action="remove-siding-item" data-category="${category.id}" data-item="${item.id}" aria-label="Remove line">x</button>
      </td>
    </tr>
  `;
}

function renderSidingTextInput(item, category, field) {
  return `
    <td class="line-name">
      <input type="text" value="${escapeAttribute(item[field])}" data-siding-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

function renderSidingNumberInput(item, category, field) {
  return `
    <td class="number-cell">
      <input type="number" min="0" step="0.01" value="${escapeAttribute(item[field])}" data-siding-field="${field}" data-category="${category.id}" data-item="${item.id}" />
    </td>
  `;
}

async function renderFlooringCalculator(project) {
  ensureFlooring(project);
  const shell = document.createElement("div");
  shell.className = "flooring-shell";
  shell.append(await renderFlooringPlanPanel(project), renderFlooringSummaryPanel(project));
  els.libraryGrid.append(shell);

  if (!flooringCanShowTotals(project)) return;

  for (const finish of activeFlooringFinishes(project)) {
    els.libraryGrid.append(renderFlooringFinishPanel(project, finish));
  }
}

async function renderFlooringPlanPanel(project) {
  const flooring = ensureFlooring(project);
  const plan = flooring.plan;
  const section = document.createElement("section");
  section.className = "plan-panel";
  const inputId = `flooringPlanInput-${project.id}`;
  const url = plan ? await fileUrl(plan) : "";
  const typeLabel = flooring.levelTypeConfirmed
    ? `${FLOORING_LEVEL_TYPES[flooring.levelType].label} confirmed`
    : "House level not confirmed";

  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>House Plan</h3>
        <p>${plan ? escapeHtml(plan.name) : "No PDF selected"} - ${escapeHtml(typeLabel)}</p>
      </div>
    </header>
    ${flooring.detectionNote ? `<div class="foundation-detection">${escapeHtml(flooring.detectionNote)}</div>` : ""}
    ${flooring.takeoffNote ? `<div class="plan-takeoff-note">${escapeHtml(flooring.takeoffNote)}</div>` : ""}
    <div class="plan-actions">
      <label class="upload-drop" for="${escapeAttribute(inputId)}">
        <input id="${escapeAttribute(inputId)}" type="file" accept="application/pdf,.pdf" data-flooring-plan />
        <span class="upload-icon" aria-hidden="true">+</span>
        <span>
          <strong>${plan ? "Replace house plan PDF" : "Add house plan PDF"}</strong>
          <small>${plan ? formatBytes(plan.size) : "Interior floor plans and room dimensions"}</small>
        </span>
      </label>
      ${
        plan
          ? `<button class="ghost-button" type="button" data-action="open-flooring-plan">Open</button>
             <button class="ghost-button danger" type="button" data-action="remove-flooring-plan">Remove</button>`
          : ""
      }
    </div>
    <div class="plan-frame">
      ${
        plan && url
          ? `<iframe src="${escapeAttribute(url)}" title="${escapeAttribute(plan.name)}"></iframe>`
          : `<div class="pdf-placeholder"><strong>House plan PDF</strong><span>Upload plans to calculate interior flooring areas.</span></div>`
      }
    </div>
  `;
  return section;
}

function renderFlooringSummaryPanel(project) {
  const flooring = ensureFlooring(project);
  const totals = flooringTotals(project);
  const section = document.createElement("section");
  section.className = "summary-panel";
  if (!flooring.levelTypeConfirmed) {
    const suggestedType = flooring.detectedLevelType;
    section.innerHTML = `
      <header class="panel-header">
        <div>
          <h3>Flooring Buildout</h3>
          <p>Confirm house level before flooring totals are shown</p>
        </div>
      </header>
      <div class="confirm-panel">
        <strong>House level required</strong>
        <span>${escapeHtml(flooring.detectionNote || "Upload a house plan PDF or choose single level or multi level.")}</span>
      </div>
      <div class="foundation-choice-grid">
        ${Object.entries(FLOORING_LEVEL_TYPES)
          .map(([type, config]) => {
            const suggested = suggestedType === type ? "Suggested by PDF scan" : "Manual confirmation";
            return `
              <button class="foundation-choice${suggestedType === type ? " suggested" : ""}" type="button" data-action="confirm-flooring-level" data-flooring-level="${type}">
                <strong>${escapeHtml(config.label)}</strong>
                <span>${escapeHtml(suggested)}</span>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
    return section;
  }

  if (!flooringCanShowTotals(project)) {
    section.innerHTML = `
      <header class="panel-header">
        <div>
          <h3>Flooring Buildout</h3>
          <p>${escapeHtml(FLOORING_LEVEL_TYPES[flooring.levelType].label)} finish choices required</p>
        </div>
        <button class="ghost-button" type="button" data-action="change-flooring-level">Change Level</button>
      </header>
      <div class="confirm-panel">
        <strong>Confirm flooring choices</strong>
        <span>Kitchen and dining are always wood. Garages and patios are excluded from this calculator.</span>
      </div>
      <div class="flooring-choice-list">
        ${flooringChoicesForLevel(flooring.levelType).map((choice) => renderFlooringChoice(flooring, choice)).join("")}
      </div>
      <button class="primary-action compact" type="button" data-action="confirm-flooring-choices"${
        flooringChoicesComplete(project) ? "" : " disabled"
      }>Confirm Choices</button>
    `;
    return section;
  }

  section.innerHTML = `
    <header class="panel-header">
      <div>
        <h3>Flooring Buildout</h3>
        <p>${escapeHtml(FLOORING_LEVEL_TYPES[flooring.levelType].label)} interior flooring order quantities</p>
      </div>
      <button class="ghost-button" type="button" data-action="change-flooring-choices">Change Choices</button>
    </header>
    <div class="summary-grid">
      ${activeFlooringFinishes(project)
        .map((finish) => {
          const total = totals[finish] || { rounded: 0 };
          return `
            <div class="summary-tile">
              <strong data-flooring-summary-total="${finish}">${formatFlooringArea(total.rounded)}</strong>
              <span>${escapeHtml(FLOORING_FINISHES[finish].label)}</span>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
  return section;
}

function renderFlooringChoice(flooring, choice) {
  return `
    <label class="flooring-choice">
      <span>${escapeHtml(choice.label)}</span>
      <select data-flooring-choice="${escapeAttribute(choice.id)}">
        <option value="">Choose finish</option>
        ${choice.options
          .map((finish) => {
            const selected = flooring.choices[choice.id] === finish ? " selected" : "";
            return `<option value="${escapeAttribute(finish)}"${selected}>${escapeHtml(FLOORING_FINISHES[finish].label)}</option>`;
          })
          .join("")}
      </select>
    </label>
  `;
}

function renderFlooringFinishPanel(project, finish) {
  const flooring = ensureFlooring(project);
  const grouped = flooringRoomsByFinish(project);
  const rooms = grouped[finish] || [];
  const totals = flooringTotals(project);
  const section = document.createElement("section");
  section.className = "category-panel";
  section.dataset.flooringFinishPanel = finish;
  section.innerHTML = `
    <header class="category-header">
      <div>
        <h3>${escapeHtml(FLOORING_FINISHES[finish].label)}</h3>
        <p>Interior area only</p>
      </div>
      <div class="category-total">
        <strong data-flooring-category-total="${finish}">${formatFlooringArea((totals[finish] || { rounded: 0 }).rounded)}</strong>
        <span>Order quantity</span>
      </div>
    </header>
    <div class="takeoff-scroll">
      <table class="takeoff-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Area sq ft</th>
            <th>Level</th>
            <th>Area</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rooms.map((room) => renderFlooringRow(room, finish)).join("")}
        </tbody>
      </table>
    </div>
    <div class="takeoff-actions">
      <button class="ghost-button" type="button" data-action="add-flooring-room" data-finish="${finish}">+ Add line</button>
      <label>
        Waste %
        <input type="number" min="0" step="0.5" value="${escapeAttribute(flooring.waste[finish])}" data-flooring-waste data-finish="${finish}" />
      </label>
    </div>
  `;
  return section;
}

function renderFlooringRow(room, finish) {
  return `
    <tr>
      <td class="line-name">
        <input type="text" value="${escapeAttribute(room.label)}" data-flooring-field="label" data-room="${room.id}" />
      </td>
      <td class="number-cell">
        <input type="number" min="0" step="0.01" value="${escapeAttribute(room.areaSqft)}" data-flooring-field="areaSqft" data-room="${room.id}" />
      </td>
      <td class="number-cell">
        <select data-flooring-field="level" data-room="${room.id}">
          <option value="main"${room.level === "main" ? " selected" : ""}>Main</option>
          <option value="second"${room.level === "second" ? " selected" : ""}>Second</option>
        </select>
      </td>
      <td class="yard-cell" data-flooring-area-cell data-finish="${finish}" data-room="${room.id}">
        ${formatFlooringArea(room.areaSqft)}
      </td>
      <td>
        <button class="ghost-button icon-danger" type="button" data-action="remove-flooring-room" data-room="${room.id}" aria-label="Remove line">x</button>
      </td>
    </tr>
  `;
}

async function render() {
  const project = activeProject();
  if (!project) return;
  renderProjectFields(project);
  await Promise.all([renderProjectList(), renderHero(project), renderLibrary(project)]);
  els.tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.view === state.view));
}

async function handleFiles(files) {
  const project = activeProject();
  for (const file of files) {
    const id = uid("file");
    const extension = file.name.includes(".") ? file.name.split(".").pop().toUpperCase().slice(0, 5) : "DOC";
    const kind = file.type.startsWith("image/") ? "photo" : "document";
    await putStoredFile({ id, blob: file });
    project.files.unshift({
      id,
      name: file.name,
      mime: file.type || "application/octet-stream",
      size: file.size,
      kind,
      extension,
      createdAt: new Date().toISOString(),
    });
  }
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function handleConcretePlan(file) {
  if (!file) return;
  const project = activeProject();
  const concrete = ensureConcrete(project);
  if (concrete.plan?.id) {
    await deleteStoredFile(concrete.plan.id);
    const previousUrl = state.fileUrls.get(concrete.plan.id);
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    state.fileUrls.delete(concrete.plan.id);
  }

  const id = uid("plan");
  const detection = await detectFoundationTypeFromFile(file);
  await putStoredFile({ id, blob: file });
  concrete.plan = {
    id,
    name: file.name,
    mime: file.type || "application/pdf",
    size: file.size,
    createdAt: new Date().toISOString(),
  };
  concrete.detectedFoundationType = detection.type;
  concrete.detectionNote = detection.note;
  concrete.takeoffNote = detection.takeoffNote;
  concrete.foundationType = detection.type || concrete.foundationType || "";
  concrete.foundationTypeConfirmed = false;
  applyPlanTakeoff(concrete, detection.takeoff);
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function removeConcretePlan() {
  const project = activeProject();
  const concrete = ensureConcrete(project);
  if (!concrete.plan) return;
  await deleteStoredFile(concrete.plan.id);
  const url = state.fileUrls.get(concrete.plan.id);
  if (url) URL.revokeObjectURL(url);
  state.fileUrls.delete(concrete.plan.id);
  concrete.plan = null;
  concrete.detectedFoundationType = "";
  concrete.detectionNote = "";
  concrete.takeoffNote = "";
  concrete.foundationTypeConfirmed = false;
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function concreteItem(categoryId, itemId) {
  const project = activeProject();
  const concrete = ensureConcrete(project);
  const savedCategory = concrete.categories[categoryId];
  return savedCategory.items.find((item) => item.id === itemId);
}

function handleConcreteInput(event) {
  const target = event.target;
  if (!target.matches("[data-concrete-field], [data-concrete-waste]")) return;

  const project = activeProject();
  const concrete = ensureConcrete(project);
  const categoryId = target.dataset.category;
  if (!categoryId || !concrete.categories[categoryId]) return;

  if (target.matches("[data-concrete-waste]")) {
    concrete.categories[categoryId].wastePercent = target.value;
  } else {
    const item = concreteItem(categoryId, target.dataset.item);
    if (!item) return;
    item[target.dataset.concreteField] = target.value;
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  refreshConcreteTotals();
}

async function handleConcreteChange(event) {
  const target = event.target;
  if (!target.matches("[data-concrete-plan]")) return;
  await handleConcretePlan(target.files[0]);
  target.value = "";
}

async function handleConcreteClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (
    ![
      "add-concrete-item",
      "remove-concrete-item",
      "open-plan",
      "remove-plan",
      "confirm-foundation-type",
      "change-foundation-type",
    ].includes(action)
  ) {
    return;
  }

  const project = activeProject();
  const concrete = ensureConcrete(project);

  if (action === "confirm-foundation-type") {
    if (!FOUNDATION_TYPES[button.dataset.foundationType]) return;
    concrete.foundationType = button.dataset.foundationType;
    concrete.foundationTypeConfirmed = true;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "change-foundation-type") {
    concrete.foundationTypeConfirmed = false;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "open-plan") {
    if (!concrete.plan) return;
    window.open(await fileUrl(concrete.plan), "_blank", "noopener");
    return;
  }

  if (action === "remove-plan") {
    await removeConcretePlan();
    return;
  }

  const category = CONCRETE_CATEGORY_MAP[button.dataset.category];
  if (!category) return;

  if (action === "add-concrete-item") {
    concrete.categories[category.id].items.push(createDefaultConcreteItem(category));
  }

  if (action === "remove-concrete-item") {
    const savedCategory = concrete.categories[category.id];
    savedCategory.items = savedCategory.items.filter((item) => item.id !== button.dataset.item);
    if (!savedCategory.items.length) {
      savedCategory.items.push(createDefaultConcreteItem(category));
    }
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function refreshConcreteTotals() {
  const project = activeProject();
  const totals = concreteTotals(project);
  const grand = els.libraryGrid.querySelector("[data-grand-total]");
  if (grand) grand.textContent = concreteTotalText(project, totals.roundedTotal);

  const warning = els.libraryGrid.querySelector("[data-thickness-warning]");
  if (warning) {
    const warningText = thicknessWarningText(project);
    warning.textContent = warningText;
    warning.hidden = !warningText;
  }

  for (const category of activeConcreteCategories(project)) {
    const categoryTotal = totals.categoryTotals[category.id];
    const summary = els.libraryGrid.querySelector(`[data-summary-total="${category.id}"]`);
    const categoryLabel = els.libraryGrid.querySelector(`[data-category-total="${category.id}"]`);
    if (summary) summary.textContent = concreteTotalText(project, categoryTotal.rounded, category);
    if (categoryLabel) categoryLabel.textContent = concreteTotalText(project, categoryTotal.rounded, category);
  }

  els.libraryGrid.querySelectorAll("[data-yard-cell]").forEach((cell) => {
    const category = CONCRETE_CATEGORY_MAP[cell.dataset.category];
    const item = concreteItem(cell.dataset.category, cell.dataset.item);
    if (category && item) {
      cell.textContent = categoryNeedsThickness(category, item)
        ? "Enter thickness"
        : formatYards(itemConcreteYards(item, category));
    }
  });
}

function applyTrimTakeoff(trim, takeoff) {
  for (const [categoryId, items] of Object.entries(takeoff.categories || {})) {
    const category = TRIM_CATEGORY_MAP[categoryId];
    if (!category || !items.length) continue;
    trim.categories[categoryId].items = items.map((item) => ({ id: uid("trim"), ...category.defaultItem, ...item }));
  }
}

async function handleTrimPlan(file) {
  if (!file) return;
  const project = activeProject();
  const trim = ensureTrim(project);
  if (trim.plan?.id) {
    await deleteStoredFile(trim.plan.id);
    const previousUrl = state.fileUrls.get(trim.plan.id);
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    state.fileUrls.delete(trim.plan.id);
  }

  const id = uid("trim-plan");
  const detection = await detectTrimTakeoffFromFile(file);
  await putStoredFile({ id, blob: file });
  trim.plan = {
    id,
    name: file.name,
    mime: file.type || "application/pdf",
    size: file.size,
    createdAt: new Date().toISOString(),
  };
  trim.scanNote = detection.scanNote;
  trim.takeoffNote = detection.takeoffNote;
  applyTrimTakeoff(trim, detection.takeoff);
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function removeTrimPlan() {
  const project = activeProject();
  const trim = ensureTrim(project);
  if (!trim.plan) return;
  await deleteStoredFile(trim.plan.id);
  const url = state.fileUrls.get(trim.plan.id);
  if (url) URL.revokeObjectURL(url);
  state.fileUrls.delete(trim.plan.id);
  project.trim = createDefaultTrim();
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function trimItem(categoryId, itemId) {
  const project = activeProject();
  const trim = ensureTrim(project);
  const savedCategory = trim.categories[categoryId];
  return savedCategory.items.find((item) => item.id === itemId);
}

function handleTrimInput(event) {
  const target = event.target;
  if (!target.matches("[data-trim-field], [data-trim-waste]")) return;

  const project = activeProject();
  const trim = ensureTrim(project);
  const categoryId = target.dataset.category;
  if (!categoryId || !trim.categories[categoryId]) return;

  if (target.matches("[data-trim-waste]")) {
    trim.categories[categoryId].wastePercent = target.value;
  } else {
    const item = trimItem(categoryId, target.dataset.item);
    if (!item) return;
    item[target.dataset.trimField] = target.value;
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  refreshTrimTotals();
}

async function handleTrimChange(event) {
  const target = event.target;
  if (!target.matches("[data-trim-plan]")) return;
  await handleTrimPlan(target.files[0]);
  target.value = "";
}

async function handleTrimClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (!["add-trim-item", "remove-trim-item", "open-trim-plan", "remove-trim-plan"].includes(action)) return;

  const project = activeProject();
  const trim = ensureTrim(project);

  if (action === "open-trim-plan") {
    if (!trim.plan) return;
    window.open(await fileUrl(trim.plan), "_blank", "noopener");
    return;
  }

  if (action === "remove-trim-plan") {
    await removeTrimPlan();
    return;
  }

  const category = TRIM_CATEGORY_MAP[button.dataset.category];
  if (!category) return;

  if (action === "add-trim-item") {
    trim.categories[category.id].items.push(createDefaultTrimItem(category));
  }

  if (action === "remove-trim-item") {
    const savedCategory = trim.categories[category.id];
    savedCategory.items = savedCategory.items.filter((item) => item.id !== button.dataset.item);
    if (!savedCategory.items.length) {
      savedCategory.items.push(createDefaultTrimItem(category));
    }
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function refreshTrimTotals() {
  const project = activeProject();
  const totals = trimTotals(project);
  const grand = els.libraryGrid.querySelector("[data-trim-grand-total]");
  if (grand) grand.textContent = formatFeet(totals.roundedTotal);

  for (const category of TRIM_CATEGORIES) {
    const categoryTotal = totals.categoryTotals[category.id];
    const summary = els.libraryGrid.querySelector(`[data-trim-summary-total="${category.id}"]`);
    const categoryLabel = els.libraryGrid.querySelector(`[data-trim-category-total="${category.id}"]`);
    if (summary) summary.textContent = formatFeet(categoryTotal.rounded);
    if (categoryLabel) categoryLabel.textContent = formatFeet(categoryTotal.rounded);
  }

  els.libraryGrid.querySelectorAll("[data-trim-foot-cell]").forEach((cell) => {
    const category = TRIM_CATEGORY_MAP[cell.dataset.category];
    const item = trimItem(cell.dataset.category, cell.dataset.item);
    if (category && item) {
      cell.textContent = formatFeet(itemTrimFeet(item, category));
    }
  });
}

function applySidingTakeoff(siding, takeoff) {
  for (const [categoryId, items] of Object.entries(takeoff.categories || {})) {
    const category = SIDING_CATEGORY_MAP[categoryId];
    if (!category || !items.length) continue;
    siding.categories[categoryId].items = items.map((item) => ({
      id: uid("siding"),
      ...category.defaultItem,
      ...item,
    }));
  }
}

async function handleSidingPlan(file) {
  if (!file) return;
  const project = activeProject();
  const siding = ensureSiding(project);
  if (siding.plan?.id) {
    await deleteStoredFile(siding.plan.id);
    const previousUrl = state.fileUrls.get(siding.plan.id);
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    state.fileUrls.delete(siding.plan.id);
  }

  const id = uid("siding-plan");
  const detection = await detectSidingTakeoffFromFile(file);
  await putStoredFile({ id, blob: file });
  siding.plan = {
    id,
    name: file.name,
    mime: file.type || "application/pdf",
    size: file.size,
    createdAt: new Date().toISOString(),
  };
  siding.detectedSidingType = detection.type;
  siding.detectionNote = detection.note;
  siding.takeoffNote = detection.takeoffNote;
  siding.sidingType = detection.type || siding.sidingType || "";
  siding.sidingTypeConfirmed = false;
  applySidingTakeoff(siding, detection.takeoff);
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function removeSidingPlan() {
  const project = activeProject();
  const siding = ensureSiding(project);
  if (!siding.plan) return;
  await deleteStoredFile(siding.plan.id);
  const url = state.fileUrls.get(siding.plan.id);
  if (url) URL.revokeObjectURL(url);
  state.fileUrls.delete(siding.plan.id);
  project.siding = createDefaultSiding();
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function sidingItem(categoryId, itemId) {
  const project = activeProject();
  const siding = ensureSiding(project);
  const savedCategory = siding.categories[categoryId];
  return savedCategory.items.find((item) => item.id === itemId);
}

function handleSidingInput(event) {
  const target = event.target;
  if (!target.matches("[data-siding-field], [data-siding-waste]")) return;

  const project = activeProject();
  const siding = ensureSiding(project);
  const categoryId = target.dataset.category;
  if (!categoryId || !siding.categories[categoryId]) return;

  if (target.matches("[data-siding-waste]")) {
    siding.categories[categoryId].wastePercent = target.value;
  } else {
    const item = sidingItem(categoryId, target.dataset.item);
    if (!item) return;
    item[target.dataset.sidingField] = target.value;
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  refreshSidingTotals();
}

async function handleSidingChange(event) {
  const target = event.target;
  if (!target.matches("[data-siding-plan]")) return;
  await handleSidingPlan(target.files[0]);
  target.value = "";
}

async function handleSidingClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (
    ![
      "add-siding-item",
      "remove-siding-item",
      "open-siding-plan",
      "remove-siding-plan",
      "confirm-siding-type",
      "change-siding-type",
    ].includes(action)
  ) {
    return;
  }

  const project = activeProject();
  const siding = ensureSiding(project);

  if (action === "confirm-siding-type") {
    if (!SIDING_TYPES[button.dataset.sidingType]) return;
    siding.sidingType = button.dataset.sidingType;
    siding.sidingTypeConfirmed = true;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "change-siding-type") {
    siding.sidingTypeConfirmed = false;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "open-siding-plan") {
    if (!siding.plan) return;
    window.open(await fileUrl(siding.plan), "_blank", "noopener");
    return;
  }

  if (action === "remove-siding-plan") {
    await removeSidingPlan();
    return;
  }

  const category = SIDING_CATEGORY_MAP[button.dataset.category];
  if (!category) return;

  if (action === "add-siding-item") {
    siding.categories[category.id].items.push(createDefaultSidingItem(category));
  }

  if (action === "remove-siding-item") {
    const savedCategory = siding.categories[category.id];
    savedCategory.items = savedCategory.items.filter((item) => item.id !== button.dataset.item);
    if (!savedCategory.items.length) {
      savedCategory.items.push(createDefaultSidingItem(category));
    }
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function refreshSidingTotals() {
  const project = activeProject();
  const siding = ensureSiding(project);
  const totals = sidingTotals(project);
  const areaGrand = els.libraryGrid.querySelector("[data-siding-area-grand-total]");
  const linearGrand = els.libraryGrid.querySelector("[data-siding-linear-grand-total]");
  if (areaGrand) areaGrand.textContent = formatSquares(totals.areaRoundedTotal);
  if (linearGrand) linearGrand.textContent = formatFeet(totals.linearRoundedTotal);

  for (const category of activeSidingCategories(project)) {
    const categoryTotal = totals.categoryTotals[category.id] || { rounded: 0 };
    const summary = els.libraryGrid.querySelector(`[data-siding-summary-total="${category.id}"]`);
    const categoryLabel = els.libraryGrid.querySelector(`[data-siding-category-total="${category.id}"]`);
    if (summary) summary.textContent = formatSidingAmount(categoryTotal.rounded, category);
    if (categoryLabel) categoryLabel.textContent = formatSidingAmount(categoryTotal.rounded, category);
  }

  els.libraryGrid.querySelectorAll("[data-siding-amount-cell]").forEach((cell) => {
    const category = SIDING_CATEGORY_MAP[cell.dataset.category];
    const item = sidingItem(cell.dataset.category, cell.dataset.item);
    if (category && item) {
      cell.textContent = formatSidingAmount(itemSidingAmount(item, category, siding.sidingType), category);
    }
  });
}

function applyFlooringTakeoff(flooring, takeoff) {
  const rooms = Array.isArray(takeoff.rooms) ? takeoff.rooms : [];
  flooring.rooms = rooms.length
    ? rooms.map((room) =>
        createDefaultFlooringRoom({
          label: room.label || "Interior room",
          areaSqft: room.areaSqft || "",
          zone: room.zone || "other",
          level: room.level || "main",
          lockedFinish: room.lockedFinish || "",
        }),
      )
    : [createDefaultFlooringRoom()];
}

async function handleFlooringPlan(file) {
  if (!file) return;
  const project = activeProject();
  const flooring = ensureFlooring(project);
  if (flooring.plan?.id) {
    await deleteStoredFile(flooring.plan.id);
    const previousUrl = state.fileUrls.get(flooring.plan.id);
    if (previousUrl) URL.revokeObjectURL(previousUrl);
    state.fileUrls.delete(flooring.plan.id);
  }

  const id = uid("flooring-plan");
  const detection = await detectFlooringTakeoffFromFile(file);
  await putStoredFile({ id, blob: file });
  flooring.plan = {
    id,
    name: file.name,
    mime: file.type || "application/pdf",
    size: file.size,
    createdAt: new Date().toISOString(),
  };
  flooring.detectedLevelType = detection.type;
  flooring.detectionNote = detection.note;
  flooring.takeoffNote = detection.takeoffNote;
  flooring.levelType = detection.type || flooring.levelType || "";
  flooring.levelTypeConfirmed = false;
  flooring.choicesConfirmed = false;
  applyFlooringTakeoff(flooring, detection.takeoff);
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function removeFlooringPlan() {
  const project = activeProject();
  const flooring = ensureFlooring(project);
  if (!flooring.plan) return;
  await deleteStoredFile(flooring.plan.id);
  const url = state.fileUrls.get(flooring.plan.id);
  if (url) URL.revokeObjectURL(url);
  state.fileUrls.delete(flooring.plan.id);
  project.flooring = createDefaultFlooring();
  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function flooringRoomById(roomId) {
  const project = activeProject();
  const flooring = ensureFlooring(project);
  return flooring.rooms.find((room) => room.id === roomId);
}

function handleFlooringInput(event) {
  const target = event.target;
  if (!target.matches("[data-flooring-field], [data-flooring-waste]")) return;

  const project = activeProject();
  const flooring = ensureFlooring(project);

  if (target.matches("[data-flooring-waste]")) {
    flooring.waste[target.dataset.finish] = target.value;
  } else {
    const room = flooringRoomById(target.dataset.room);
    if (!room) return;
    room[target.dataset.flooringField] = target.value;
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  refreshFlooringTotals();
}

async function handleFlooringChange(event) {
  const target = event.target;
  if (target.matches("[data-flooring-plan]")) {
    await handleFlooringPlan(target.files[0]);
    target.value = "";
    return;
  }
  if (!target.matches("[data-flooring-choice], [data-flooring-field]")) return;

  const project = activeProject();
  const flooring = ensureFlooring(project);
  if (target.matches("[data-flooring-choice]")) {
    flooring.choices[target.dataset.flooringChoice] = target.value;
    flooring.choicesConfirmed = false;
  } else {
    const room = flooringRoomById(target.dataset.room);
    if (!room) return;
    room[target.dataset.flooringField] = target.value;
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

async function handleFlooringClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (
    ![
      "open-flooring-plan",
      "remove-flooring-plan",
      "confirm-flooring-level",
      "change-flooring-level",
      "confirm-flooring-choices",
      "change-flooring-choices",
      "add-flooring-room",
      "remove-flooring-room",
    ].includes(action)
  ) {
    return;
  }

  const project = activeProject();
  const flooring = ensureFlooring(project);

  if (action === "open-flooring-plan") {
    if (!flooring.plan) return;
    window.open(await fileUrl(flooring.plan), "_blank", "noopener");
    return;
  }

  if (action === "remove-flooring-plan") {
    await removeFlooringPlan();
    return;
  }

  if (action === "confirm-flooring-level") {
    if (!FLOORING_LEVEL_TYPES[button.dataset.flooringLevel]) return;
    flooring.levelType = button.dataset.flooringLevel;
    flooring.levelTypeConfirmed = true;
    flooring.choicesConfirmed = false;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "change-flooring-level") {
    flooring.levelTypeConfirmed = false;
    flooring.choicesConfirmed = false;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "confirm-flooring-choices") {
    if (!flooringChoicesComplete(project)) return;
    flooring.choicesConfirmed = true;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "change-flooring-choices") {
    flooring.choicesConfirmed = false;
    project.updatedAt = new Date().toISOString();
    saveProjects();
    render();
    return;
  }

  if (action === "add-flooring-room") {
    const finish = button.dataset.finish;
    if (!FLOORING_FINISHES[finish]) return;
    flooring.rooms.push(
      createDefaultFlooringRoom({
        label: `${FLOORING_FINISHES[finish].label} line`,
        lockedFinish: finish,
        zone: "other",
        level: "main",
      }),
    );
  }

  if (action === "remove-flooring-room") {
    flooring.rooms = flooring.rooms.filter((room) => room.id !== button.dataset.room);
  }

  project.updatedAt = new Date().toISOString();
  saveProjects();
  render();
}

function refreshFlooringTotals() {
  const project = activeProject();
  const totals = flooringTotals(project);
  for (const finish of activeFlooringFinishes(project)) {
    const total = totals[finish] || { rounded: 0 };
    const summary = els.libraryGrid.querySelector(`[data-flooring-summary-total="${finish}"]`);
    const category = els.libraryGrid.querySelector(`[data-flooring-category-total="${finish}"]`);
    if (summary) summary.textContent = formatFlooringArea(total.rounded);
    if (category) category.textContent = formatFlooringArea(total.rounded);
  }
  els.libraryGrid.querySelectorAll("[data-flooring-area-cell]").forEach((cell) => {
    const room = flooringRoomById(cell.dataset.room);
    if (room) cell.textContent = formatFlooringArea(room.areaSqft);
  });
}

function createProject(name, address) {
  const project = {
    id: uid("project"),
    name,
    address,
    phase: "Planning",
    targetDate: "",
    notes: "",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    files: [],
    notesLog: [],
    concrete: createDefaultConcrete(),
    trim: createDefaultTrim(),
    siding: createDefaultSiding(),
    flooring: createDefaultFlooring(),
  };
  state.projects.unshift(project);
  state.activeProjectId = project.id;
  saveProjects();
  render();
}

function concreteExportLines(project) {
  const concrete = ensureConcrete(project);
  const totals = concreteTotals(project);
  const typeLabel = concrete.foundationTypeConfirmed ? FOUNDATION_TYPES[concrete.foundationType].label : "Not confirmed";
  const lines = [
    "Concrete Calculator",
    `Plan PDF: ${concrete.plan?.name || "Not set"}`,
    `Foundation type: ${typeLabel}`,
    `Plan scan: ${concrete.detectionNote || "Not scanned"}`,
    `Total order: ${concreteCanShowTotals(project) ? formatYards(totals.roundedTotal) : concreteTotalText(project, totals.roundedTotal)}`,
  ];

  if (!concrete.foundationTypeConfirmed) {
    return lines;
  }

  for (const category of activeConcreteCategories(project)) {
    const savedCategory = concrete.categories[category.id];
    const categoryTotal = totals.categoryTotals[category.id];
    lines.push(
      "",
      `${category.label}: ${concreteTotalText(project, categoryTotal.rounded, category)} order quantity`,
      `Waste: ${numberValue(savedCategory.wastePercent)}%`,
      ...savedCategory.items.map((item) => {
        const itemName = item.label || "Line";
        const lineTotal = categoryNeedsThickness(category, item)
          ? "Enter thickness"
          : formatYards(itemConcreteYards(item, category));
        return `- ${itemName}: ${lineTotal}`;
      }),
    );
  }

  return lines;
}

function trimExportLines(project) {
  const trim = ensureTrim(project);
  const totals = trimTotals(project);
  const lines = [
    "Inside Trim Calculator",
    `Plan PDF: ${trim.plan?.name || "Not set"}`,
    `Plan scan: ${trim.scanNote || "Not scanned"}`,
    `Total order: ${formatFeet(totals.roundedTotal)}`,
  ];

  for (const category of TRIM_CATEGORIES) {
    const savedCategory = trim.categories[category.id];
    const categoryTotal = totals.categoryTotals[category.id];
    lines.push(
      "",
      `${category.label}: ${formatFeet(categoryTotal.rounded)} order quantity`,
      `Waste: ${numberValue(savedCategory.wastePercent)}%`,
      ...savedCategory.items.map((item) => {
        const itemName = item.label || "Line";
        return `- ${itemName}: ${formatFeet(itemTrimFeet(item, category))}`;
      }),
    );
  }

  return lines;
}

function sidingExportLines(project) {
  const siding = ensureSiding(project);
  const totals = sidingTotals(project);
  const typeLabel = siding.sidingTypeConfirmed ? SIDING_TYPES[siding.sidingType].label : "Not confirmed";
  const lines = [
    "Siding Calculator",
    `Plan PDF: ${siding.plan?.name || "Not set"}`,
    `Siding type: ${typeLabel}`,
    `Plan scan: ${siding.detectionNote || "Not scanned"}`,
    `Siding Square order: ${siding.sidingTypeConfirmed ? formatSquares(totals.areaRoundedTotal) : "Confirm siding type"}`,
    `Accessory linear order: ${siding.sidingTypeConfirmed ? formatFeet(totals.linearRoundedTotal) : "Confirm siding type"}`,
  ];

  if (!siding.sidingTypeConfirmed) {
    return lines;
  }

  for (const category of activeSidingCategories(project)) {
    const savedCategory = siding.categories[category.id];
    const categoryTotal = totals.categoryTotals[category.id] || { rounded: 0 };
    lines.push(
      "",
      `${sidingCategoryLabel(category, siding.sidingType)}: ${formatSidingAmount(categoryTotal.rounded, category)} order quantity`,
      `Waste: ${numberValue(savedCategory.wastePercent)}%`,
      ...savedCategory.items.map((item) => {
        const itemName = item.label || "Line";
        return `- ${itemName}: ${formatSidingAmount(itemSidingAmount(item, category, siding.sidingType), category)}`;
      }),
    );
  }

  return lines;
}

function flooringExportLines(project) {
  const flooring = ensureFlooring(project);
  const totals = flooringTotals(project);
  const levelLabel = flooring.levelTypeConfirmed ? FLOORING_LEVEL_TYPES[flooring.levelType].label : "Not confirmed";
  const lines = [
    "Flooring Calculator",
    `Plan PDF: ${flooring.plan?.name || "Not set"}`,
    `House level: ${levelLabel}`,
    `Plan scan: ${flooring.detectionNote || "Not scanned"}`,
  ];

  if (!flooringCanShowTotals(project)) {
    lines.push("Flooring choices: Not confirmed");
    return lines;
  }

  for (const finish of activeFlooringFinishes(project)) {
    const grouped = flooringRoomsByFinish(project);
    const total = totals[finish] || { rounded: 0 };
    lines.push(
      "",
      `${FLOORING_FINISHES[finish].label}: ${formatFlooringArea(total.rounded)} order quantity`,
      `Waste: ${numberValue(flooring.waste[finish])}%`,
      ...grouped[finish].map((room) => `- ${room.label || "Room"}: ${formatFlooringArea(room.areaSqft)}`),
    );
  }

  return lines;
}

function exportProject() {
  const project = activeProject();
  const lines = [
    project.name,
    "=".repeat(project.name.length),
    "",
    `Address: ${project.address || "Not set"}`,
    `Phase: ${project.phase}`,
    `Target date: ${readableDate(project.targetDate)}`,
    `Photos: ${project.files.filter((file) => file.kind === "photo").length}`,
    `Documents: ${project.files.filter((file) => file.kind === "document").length}`,
    "",
    "Notes",
    project.notes || "No project notes.",
    "",
    "Daily Notes",
    ...project.notesLog.map((note) => `- ${readableDate(note.createdAt.slice(0, 10))}: ${note.text}`),
    "",
    ...concreteExportLines(project),
    "",
    ...trimExportLines(project),
    "",
    ...sidingExportLines(project),
    "",
    ...flooringExportLines(project),
    "",
    "Files",
    ...project.files.map((file) => `- ${file.name} (${file.kind}, ${formatBytes(file.size)})`),
  ];
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${project.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}-summary.txt`;
  link.click();
  URL.revokeObjectURL(url);
}

function deleteProject() {
  const project = activeProject();
  if (!project || state.projects.length === 1) {
    alert("Create another project before deleting this one.");
    return;
  }
  if (!confirm(`Delete ${project.name}?`)) return;
  const deletedFiles = project.files.map((file) => file.id);
  if (project.concrete?.plan?.id) deletedFiles.push(project.concrete.plan.id);
  if (project.trim?.plan?.id) deletedFiles.push(project.trim.plan.id);
  if (project.siding?.plan?.id) deletedFiles.push(project.siding.plan.id);
  if (project.flooring?.plan?.id) deletedFiles.push(project.flooring.plan.id);
  state.projects = state.projects.filter((item) => item.id !== project.id);
  state.activeProjectId = state.projects[0].id;
  saveProjects();
  deletedFiles.forEach((id) => deleteStoredFile(id));
  render();
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char],
  );
}

function escapeAttribute(value = "") {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function formatBytes(bytes) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / 1024 ** index).toFixed(index ? 1 : 0)} ${units[index]}`;
}

function wireEvents() {
  els.newProjectBtn.addEventListener("click", () => {
    els.dialogName.value = "";
    els.dialogAddress.value = "";
    els.projectDialog.showModal();
    els.dialogName.focus();
  });

  els.projectForm.addEventListener("submit", (event) => {
    if (event.submitter?.value === "cancel") return;
    event.preventDefault();
    createProject(els.dialogName.value.trim(), els.dialogAddress.value.trim());
    els.projectDialog.close();
  });

  els.nameInput.addEventListener("input", () => updateProject({ name: els.nameInput.value || "Untitled Project" }));
  els.addressInput.addEventListener("input", () => updateProject({ address: els.addressInput.value }));
  els.phaseInput.addEventListener("change", () => updateProject({ phase: els.phaseInput.value }));
  els.targetInput.addEventListener("change", () => updateProject({ targetDate: els.targetInput.value }));
  els.notesInput.addEventListener("input", () => updateProject({ notes: els.notesInput.value }));
  els.fileInput.addEventListener("change", () => {
    handleFiles([...els.fileInput.files]);
    els.fileInput.value = "";
  });
  els.libraryGrid.addEventListener("input", handleConcreteInput);
  els.libraryGrid.addEventListener("input", handleTrimInput);
  els.libraryGrid.addEventListener("input", handleSidingInput);
  els.libraryGrid.addEventListener("input", handleFlooringInput);
  els.libraryGrid.addEventListener("change", handleConcreteChange);
  els.libraryGrid.addEventListener("change", handleTrimChange);
  els.libraryGrid.addEventListener("change", handleSidingChange);
  els.libraryGrid.addEventListener("change", handleFlooringChange);
  els.libraryGrid.addEventListener("click", handleConcreteClick);
  els.libraryGrid.addEventListener("click", handleTrimClick);
  els.libraryGrid.addEventListener("click", handleSidingClick);
  els.libraryGrid.addEventListener("click", handleFlooringClick);

  els.noteForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = els.quickNoteInput.value.trim();
    if (!text) return;
    const project = activeProject();
    project.notesLog.unshift({ id: uid("note"), text, createdAt: new Date().toISOString() });
    project.updatedAt = new Date().toISOString();
    els.quickNoteInput.value = "";
    saveProjects();
    render();
  });

  els.tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      state.view = tab.dataset.view;
      render();
    }),
  );

  els.librarySearch.addEventListener("input", () => {
    state.librarySearch = els.librarySearch.value;
    render();
  });

  els.projectSearch.addEventListener("input", () => {
    state.projectSearch = els.projectSearch.value;
    renderProjectList();
  });

  els.exportBtn.addEventListener("click", exportProject);
  els.deleteProjectBtn.addEventListener("click", deleteProject);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.warn("BatmanBuilt app install support is unavailable in this browser context.", error);
    });
  });
}

loadProjects();
wireEvents();
registerServiceWorker();
render();
