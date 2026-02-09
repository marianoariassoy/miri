const Modal = ({
  activeImage,
  setActiveImage,
}: {
  activeImage: string;
  setActiveImage: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 fade-in-fast"
      onClick={() => setActiveImage(null)}
    >
      <img
        src={activeImage}
        alt="Preview"
        className="max-w-full max-h-full shadow-2xl"
      />

      <button
        onClick={() => setActiveImage(null)}
        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-foreground transition cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
};

export default Modal;
