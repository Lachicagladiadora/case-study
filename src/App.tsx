import { Header } from "./components/Header";
import { useState } from "react";
import { page } from "./types";

function App() {
  const [page, setPage] = useState<page>("home");
  //#region todo:
  // - navbar
  // -header
  // - footer
  // general for main
  //   each part from main
  return (
    <>
      <Header currentPage={page} updatePage={setPage} />
      <main className="h-[400dvh]">
        <section>About us</section>
        <section>Benefits</section>
        <section>Roofing</section>
        <section>Our partners</section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
