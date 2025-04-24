import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
      <header className="h-dvh w-dvw bg-light-blue flex flex-col items-center">
        <nav className="flex justify-between max-w-[950px] w-full py-6 px-4">
          <h1>Maelo Solar</h1>
          <div className="flex gap-6">
            <a> Home</a>
            <a>Roofing</a>
            <a>About</a>
            <a>Contact Us</a>
            <div>Affiliates</div>
          </div>
          <p>
            <FontAwesomeIcon icon={faPhoneFlip} /> 631-521-3640
          </p>
        </nav>
      </header>
      <div>About us</div>
      <div>Benefits</div>
      <div>Roofing</div>
      <div>Our partners</div>
      <footer></footer>
    </>
  );
}

export default App;
