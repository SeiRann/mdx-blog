export default function Button3D({ on3D }: { on3D: () => void }) {
  return (
    <button
      className="p-5 w-24 bg-orange-background rounded-md m-5"
      onClick={on3D}
    >
      3D
    </button>
  );
}
