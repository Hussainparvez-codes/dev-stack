# 🚀 Dev Stack

Dev Stack is a modern and responsive web application that helps developers explore different technologies and build their ideal development stack.

Users can browse technologies by category and add their preferred technologies to their personal stack.

## ✨ Features

- 🔍 **Explore Technologies** — Browse different frontend, backend, database, language, and DevOps technologies.
- 🧩 **Build Your Own Stack** — Select technologies and add them to your personal stack. You can also remove selected technologies.
- ⚡ **Dynamic JSON Data & Loading State** — Technology information is loaded from a JSON file with a loading spinner while the data is being fetched.

## 🛠️ Technologies Used

- React.js
- JavaScript
- Tailwind CSS
- React Toastify
- JSON
- Vite
- HTML5

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

## 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data managed inside a component that can change over time.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data. I used it in the `Technologies` component to manage technology data, loading state, and the selected technology stack.

```jsx
const [technologies, setTechnologies] = useState([]);
const [loading, setLoading] = useState(true);
const [selectedStack, setSelectedStack] = useState([]);

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component. I used it to fetch the technology data from `technologies.json` when the Technologies component loads.

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. It helps React efficiently update the correct items when the list changes.

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))
## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it to show a loading spinner while the JSON data is being fetched.

```jsx
{loading ? (
  <p>Loading technologies...</p>
) : (
  technologies.map((technology) => (
    <TechnologyCard
      key={technology.id}
      technology={technology}
    />
  ))
)}
## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

```jsx
<TechnologyCard
  technology={technology}
  selectedStack={selectedStack}
  setSelectedStack={setSelectedStack}
/>