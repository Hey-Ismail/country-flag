import { Suspense } from "react";
import "./App.css";
import Countries from "./components/countries/Countries";

const countries = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json(),
);

function App() {
  return (
    <>
      <Suspense fallback={<p>please wait !!!</p>}>
        <Countries countries={countries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
