import DataInputs from "../Db/DataInputs";

function Inputs() {
  return (
    <>
      {DataInputs.map((item, index) => (
        <div key={index} className="flex flex-col gap-2">
          <label className="text-Neutral0 text-2xl">{item.name}</label>
          <input
            type={item.type}
            className="bg-indigo-950 rounded-lg p-3 text-Neutral0 border-2 border-Neutral700"
            placeholder={item.placeHolder}
          />
        </div>
      ))}
    </>
  );
}

export default Inputs;
