---
title: "Hello World – TS Demo"
---

[← Back to Home](../)

# 🎉 Hello World – Observable Framework + TypeScript

Welcome to this demonstration of **Observable Framework** with **TypeScript**! This presentation showcases interactive code, visualizations, and the power of combining Markdown with executable TypeScript.

---

## Text Example

Observable Framework presentation demo. You can write Markdown content alongside live, executable code.

```ts
const greet = (name: string) => `Hello, ${name}!`;
display(greet("Observable Framework"));
```

---

## 📊 Data Visualization with Plot

Let's create a simple bar chart using **Observable Plot**, a declarative visualization library.

```ts
import * as Plot from "@observablehq/plot";

// Sample data
const data = [
  { category: "A", value: 10, label: "Category A" },
  { category: "B", value: 24, label: "Category B" },
  { category: "C", value: 36, label: "Category C" },
  { category: "D", value: 18, label: "Category D" },
  { category: "E", value: 42, label: "Category E" },
];

// Create and display the chart
display(
  Plot.plot({
    title: "Sample Bar Chart",
    marginLeft: 60,
    x: { label: "Categories" },
    y: { label: "Values" },
    marks: [
      Plot.barY(data, { x: "category", y: "value", fill: "#4a90e2" }),
      Plot.ruleY([0]),
    ],
  })
);
```

---

## 💻 TypeScript Features

Observable Framework fully supports TypeScript with strict type checking:

```ts
// Typed interfaces and functions
interface DataPoint {
  name: string;
  value: number;
  timestamp: Date;
}

const createDataPoint = (name: string, value: number): DataPoint => ({
  name,
  value,
  timestamp: new Date(),
});

// Example usage
const point: DataPoint = createDataPoint("Event", 100);
display(`Created data point: ${point.name} = ${point.value}`);
```

---

## 🎨 Interactive Elements

You can create interactive experiences with Observable:

```ts
// Create a simple counter
let count = 0;

display(
  html`
    <div style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
      <h3>Interactive Counter</h3>
      <p>Count: <strong>${count}</strong></p>
      <button onclick="window.location.reload()">Reset</button>
    </div>
  `
);
```

---

## 📈 Multiple Visualizations

Here's a scatter plot example with multiple data series:

```ts
import * as Plot from "@observablehq/plot";

const scatterData = Array.from({ length: 50 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  category: Math.random() > 0.5 ? "Group A" : "Group B",
}));

display(
  Plot.plot({
    title: "Scatter Plot: Two Groups",
    marginLeft: 60,
    x: { label: "X Axis" },
    y: { label: "Y Axis" },
    color: { legend: true },
    marks: [
      Plot.dot(scatterData, {
        x: "x",
        y: "y",
        fill: "category",
        r: 4,
      }),
    ],
  })
);
```

---

## ⚡ Interactive Code Editor with Reactive Flow

Try the **top-down reactive pattern** — change the inputs below, edit the code in the middle, and see the output update automatically!

### Step 1: Inputs (at the top)

```ts
import * as Inputs from "@observablehq/inputs";

viewof userName = Inputs.text({
  label: "👤 Your Name:",
  value: "Observer",
  placeholder: "Enter your name"
})

viewof multiplier = Inputs.range([1, 10], {
  label: "🔢 Number Multiplier:",
  value: 3,
  step: 1
})
```

### Step 2: Editable Code Block (in the middle)

```ts
import * as Inputs from "@observablehq/inputs";

viewof userCode = Inputs.textarea({
  label: "✏️ Edit and Execute Code:",
  value: `// Edit this code! It can use userName and multiplier from above
const greeting = \`Hello, \${userName}!\`;
const calculation = 5 * multiplier;
const message = \`\${greeting} Your result is: \${calculation}\`;
display(message);`,
  rows: 10
})
```

### Step 3: Automatic Output (at the bottom)

```ts
// This cell automatically re-runs when userName, multiplier, or userCode changes
// It's reactive - the top-down data flow!

let executionOutput = "";

try {
  // Create a safe execution context with the inputs available
  const sandbox = {
    userName,
    multiplier,
    display: (result) => {
      executionOutput = result;
    }
  };

  // Execute the user's code with access to inputs
  const executeFunc = new Function(
    'userName',
    'multiplier',
    'display',
    userCode
  );
  executeFunc(sandbox.userName, sandbox.multiplier, sandbox.display);

  display(
    html`
      <div style="padding: 16px; background: #e8f5e9; border-left: 4px solid #4caf50; border-radius: 4px; font-family: monospace;">
        <strong>✅ Output:</strong>
        <pre style="margin: 8px 0 0 0; white-space: pre-wrap; word-wrap: break-word;">${executionOutput}</pre>
      </div>
    `
  );
} catch (error) {
  display(
    html`
      <div style="padding: 16px; background: #ffebee; border-left: 4px solid #f44336; border-radius: 4px; font-family: monospace;">
        <strong>❌ Error:</strong>
        <pre style="margin: 8px 0 0 0; color: #c62828; white-space: pre-wrap; word-wrap: break-word;">${error.message}</pre>
      </div>
    `
  );
}
```

### How the Reactive Flow Works:

1. **Top** → User inputs (`userName`, `multiplier`) are defined
2. **Middle** → Editable code block references these inputs
3. **Bottom** → Output reads from both inputs and code, automatically updates
4. **Change anything** → The whole page re-evaluates top-to-bottom!

---

## 🚀 Next Steps

1. **Edit** this presentation in `src/hello-world.md`
2. **Add** your own data, visualizations, and interactive elements
3. **Deploy** to GitHub Pages with `pnpm deploy`
4. **Create** new presentations in `presentations/my-next-pres/`

---

## 📚 Resources

- [Observable Framework Documentation](https://observablehq.com/framework)
- [Observable Plot Gallery](https://observablehq.com/plot)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

Made with ❤️ using Observable Framework, TypeScript, and pnpm
