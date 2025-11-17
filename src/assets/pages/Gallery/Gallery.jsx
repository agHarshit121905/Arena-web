import { ParallaxScroll } from "../../components/ParallaxScroll";

function Gallery() {
  const images = [
    "https://i.postimg.cc/pXD4JpRd/arena-design.jpg",
    "https://i.postimg.cc/J4dy2SVT/baddy.jpg",
    "https://i.postimg.cc/zvCsRswq/inaug-23-2.jpg",
    "https://i.postimg.cc/R00QNVs3/inaug-1.jpg",
    "https://i.postimg.cc/wvyXQ4dg/inaug-2.jpg",
    "https://i.postimg.cc/MKby5jgM/skating-1.jpg",
    "https://i.postimg.cc/5248R2MP/skating-2.jpg",
    "https://i.postimg.cc/m22pCVXm/football-1.jpg",
    "https://i.postimg.cc/HkrSPnC5/football-2.jpg",
    "https://i.postimg.cc/kXdQWyYP/cricket-1.jpg",
    "https://i.postimg.cc/HWM0JN2t/cricket-2.jpg",
    "https://i.postimg.cc/15tMfXXT/frisbee.jpg",
    "https://i.postimg.cc/ydynSSFq/pool.jpg",
    "https://i.postimg.cc/8ChmqrXF/powelifting.jpg",
    "https://i.postimg.cc/G3jS46QB/prize-1.jpg",
    "https://i.postimg.cc/W3vX37q6/prize-2.jpg",
    "https://i.postimg.cc/hGx2cYvt/prize-3.jpg",
    "https://i.postimg.cc/g2LDH7vH/swimming-1.jpg",
    "https://i.postimg.cc/jjVhghc0/swimming-2.jpg",
    "https://i.postimg.cc/QCp1cbnQ/baddy-2.jpg",
    "https://i.postimg.cc/05KLrV4D/badminton.jpg",
    "https://i.postimg.cc/c4wXc785/basketball-2.jpg",
    "https://i.postimg.cc/2SrJcrS7/basketball-g.jpg",
    "https://i.postimg.cc/HLSrNY4G/hockey.jpg",
    "https://i.postimg.cc/zGwLNS51/kabbadi-1.jpg",
    "https://i.postimg.cc/g0Yx2XkL/kabbadi-2.jpg",
    "https://i.postimg.cc/k4B230f2/tennis.jpg",
    "https://i.postimg.cc/zXc7WNRf/tennis-2.jpg",
    "https://i.postimg.cc/3wry94GC/TT.jpg",
    "https://i.postimg.cc/Y9pYFCH0/TT-2.jpg",
    "https://i.postimg.cc/mgs1z62n/VB.jpg",
    "https://i.postimg.cc/4dqqBcYY/Athletics.jpg",
    "https://i.postimg.cc/PJDccqD2/athletics-G.jpg",
    "https://i.postimg.cc/bNX4nQXM/carrom.jpg",
    "https://i.postimg.cc/C1z9G7xy/carrom-2.jpg",
    "https://i.postimg.cc/W3XrwcNn/chess-2.jpg",
    "https://i.postimg.cc/9fPyzqss/chess-1.jpg",
  ];

  return (
    <div className="min-h-screen bg-black text-white font-[Karantina] text-center">
      <h1 className="text-7xl sm:text-9xl mb-3 pt-40 text-white tracking-wider">
        GALL<span className="text-[#FFCD71]">ERY</span>
      </h1>
      <div
        className="
      flex flex-col items-center justify-center"
      >
        <ParallaxScroll images={images} className="bg-black" />
      </div>
    </div>
  );
}
export default Gallery;
