import Card from "./Card";

export default function Recos() {
  const data = {
    link: "https://www.curations.club/armaansandhu/66a499f5c0b9bd26dad44306",
    image:
      "https://storage.googleapis.com/curations-curation-picture-bucket/1722063347454-victorian.jpg",
    title: "in my victorian era 🎀",
    description: "period drama tv and movies that i love",
    cover1:
      "https://www.curations.club/_next/static/media/victorian1.42d8e947.webp",
    cover2:
      "https://www.curations.club/_next/static/media/victorian2.1cc1a4b8.webp",
    count: 36,
  };

  return (
    <div className="bg-white flex flex-col items-center justify-center py-20 text-center relative gap-10">
      <div className="flex items-center justify-center gap-2">
        <h2 className="font-[cursive] text-5xl">
          Find great <span className="font-semibold">recos</span>
        </h2>
        <img
          src="https://www.curations.club/_next/static/media/heart.894b7078.webp"
          width={60}
        />
      </div>

      <p className="text-xl">discover what people love, make it yours.</p>

      <div className="flex flex-wrap justify-center items-center gap-6 px-4">
        <Card data={data} />
        <Card data={data} />
        <Card data={data} />
      </div>
    </div>
  );
}
