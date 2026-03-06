import "./style.scss";
// import { setupCounter } from "./counter.ts";

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
const bases: Record<string, string> = {
  blackTea: "#8B4513",
  greenTea: "#C8E6C9",
  coffee: "#6F4E37",
};

const creamers: Record<string, string> = {
  milk: "AliceBlue",
  cream: "#F5F5DC",
  half: "#FFFACD",
};

const syrups: Record<string, string> = {
  vanilla: "#FFEFD5",
  caramel: "#DAA520",
  hazelnut: "#6B4423",
};

function applyTemperature(input: HTMLInputElement): void {
  const container = document.getElementById(
    "condensation",
  ) as HTMLDivElement | null;
  if (!container) return;

  const children = container.children;

  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;

    if (input.value === "hot") {
      child.className = "stream";
    } else {
      child.className = "flake";
    }
  }
}

function applyBase(input: HTMLInputElement): void {
  const baseElements = document.getElementsByClassName("base");

  if (baseElements.length === 0) return;

  const baseDiv = baseElements[0] as HTMLDivElement;

  const color = bases[input.value];
  if (!color) return;

  baseDiv.style.backgroundColor = color;
}

function applyCream(input: HTMLInputElement): void {
  const creamElements = document.getElementsByClassName("foam");

  if (creamElements.length === 0) return;

  const color = creamers[input.value];
  if (!color) return;
  for (let i = 0; i < creamElements.length; i++) {
    const element = creamElements[i] as HTMLDivElement;
    element.style.backgroundColor = color;
  }
}

function applySyrup(input: HTMLInputElement): void {
  const syrupEl = document.querySelector<HTMLElement>(".syrup");
  if (!syrupEl) return;

  const color = syrups[input.value];
  if (!color) return;

  // Set CSS variable used by SCSS
  syrupEl.style.setProperty("--syrup-color", color);
}

function setupSyrupListeners(): void {
  const syrupInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="syrup"]',
  );

  syrupInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      applySyrup(e.target as HTMLInputElement);
    });
  });

  // On page load, apply initial checked syrup
  const checked = document.querySelector<HTMLInputElement>(
    'input[name="syrup"]:checked',
  );
  if (checked) applySyrup(checked);
}

setupSyrupListeners();

function setupCreamListeners(): void {
  const creamInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="cream"]',
  );

  creamInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      applyCream(e.target as HTMLInputElement);
    });
  });

  const checked = document.querySelector<HTMLInputElement>(
    'input[name="cream"]:checked',
  );
  if (checked) applyCream(checked);
}
setupCreamListeners();

function setupTemperatureListeners(): void {
  const tempInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="temperature"]',
  );

  tempInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      applyTemperature(e.target as HTMLInputElement);
    });
  });

  const checked = document.querySelector<HTMLInputElement>(
    'input[name="temperature"]:checked',
  );
  if (checked) applyTemperature(checked);
}
setupTemperatureListeners();

function setupBaseListeners(): void {
  const baseInputs = document.querySelectorAll<HTMLInputElement>(
    'input[name="base"]',
  );

  baseInputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      applyBase(e.target as HTMLInputElement);
    });
  });

  const checked = document.querySelector<HTMLInputElement>(
    'input[name="base"]:checked',
  );
  if (checked) applyBase(checked);
}
setupBaseListeners();

setupBaseListeners();