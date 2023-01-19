import UploadableImage from "../../components/UploadableImage";

export default function Page() {
  return (
    <main className={"h-screen bg-amber-200"}>
      <div className={"max-w-3xl flex items-center justify-center p-4"}>
        <UploadableImage />
      </div>
    </main>
  );
}
