---
title: "Hello World – TS Demo"
---

[← Back to Home](../../)

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
