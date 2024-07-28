export default function BluredBlob() {
  return (
    <>
      <div className="absolute top-0 left-0 h-full w-full backdrop-blur-3xl bg-secondary-dark/10 z-[11]" />
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 max-w-screen-lg w-full rounded-full h-[600px] blur-4xl bg-primary/20 z-5" />
    </>
  );
}
