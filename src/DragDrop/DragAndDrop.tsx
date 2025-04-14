import ImageUploader from "./DragComponent";

function DragAndDrop() {
  return (
    <div className="mt-8">
      <h3 className="text-Neutral300 font-semibold">Upload Avatar</h3>

      <ImageUploader />

      <p className="text-Neutral300 text-[10px] flex gap-2 mt-5">
        <span>
          <img src="/images/icon-info.svg" alt="icono info" />
        </span>{" "}
        Upload your photo (JPG or PNG, max size: 500kb)
      </p>
    </div>
  );
}

export default DragAndDrop;
