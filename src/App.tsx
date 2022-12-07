import Heading from "./components/Heading";
import Section from "./components/Section";
import Counter from "./components/Counter";
import React, { useState } from "react";
import List from "./components/List";
function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Next title"}>This is my Section</Section>
      <Counter setCount={setCount}>Count is{count}</Counter>
      <List
        items={["Coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}

export default App;
