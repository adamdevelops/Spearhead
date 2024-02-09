"use client";
import { ExampleButton, LayoutContainer } from "./components";

export default function Home() {
  const handleExampleButtonClick = () => {
    alert("You clicked me!");
  };

  return (
    <main>
      <LayoutContainer>
        <h1>Spearhead</h1>
        <div>
          <ExampleButton label="Click me!" onClick={handleExampleButtonClick} />
        </div>
      </LayoutContainer>
    </main>
  );
}
