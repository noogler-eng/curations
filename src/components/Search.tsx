import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function SearchComp({
  setSearched,
}: {
  setSearched: (value: string) => void;
}) {
  const array1 = [
    "⛵️ fictions books for vacations reads",
    "🍿 animated movies",
    "🎶 music to feel unstopabble",
    "🫆 mystery books",
    "⚽️ football banters",
    "🎥 new sitcoms",
    "📚 mystery books",
    "🎃 feel good movies",
    "🎧 best podcasts",
    "📊 best documentaries",
    "🦄 best books to read",
    "🧠 self-improvement books",
    "🎨 art books",
    "🎮 video games to play",
    "🌍 travel destinations",
  ];
  const array2 = [
    "🧘‍♂️ self-help books",
    "🎨 art documentaries",
    "🍽️ best recipes",
    "🎮 video games to play",
    "🌍 travel destinations",
    "📖 classic novels",
    "🎤 best stand-up comedy",
    "🧩 puzzles and games",
    "🏞️ nature documentaries",
    "💡 productivity tips",
    "👨‍🍳 cooking shows",
    "🎨 art books",
    "🎮 video games to play",
    "🌍 travel destinations",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div className="mb-4 flex items-center justify-center gap-2 w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="flex w-full">
            {array1.map((content, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/7">
                <div>
                  <Card
                    onClick={() => setSearched(content.toString())}
                    className="p-1"
                  >
                    <CardContent className="text-sm w-full text-center whitespace-nowrap">
                      <span className="text-sm">{content}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="mb-4 flex items-center justify-center gap-2 w-full">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
            direction: "ltr",
          }}
          className="w-full "
        >
          <CarouselContent className="flex w-full">
            {array2.map((content, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/7">
                <div>
                  <Card
                    onClick={() => setSearched(content.toString())}
                    className="p-1"
                  >
                    <CardContent className="text-sm w-full text-center whitespace-nowrap">
                      <span className="text-sm">{content}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
