import Header from "./Header/Header";
import DragAndDrop from "./DragDrop/DragAndDrop";
import Inputs from "./Inputs/Inputs";
import Btn from "./Components/Btn";

function App() {
  return (
    <>
      <section className="bg-[url(/images/pattern-lines.svg)] p-5 ">
        <Header />
        <div className="absolute w-35 top-13 right-0">
          <img
            src="/images/pattern-squiggly-line-top.svg"
            alt="imagen squiggly"
          />
        </div>
        <DragAndDrop />
      </section>
      <section className="flex flex-col p-5 space-y-5">
        <Inputs />

        <Btn />
      </section>
    </>
  );
}

export default App;
