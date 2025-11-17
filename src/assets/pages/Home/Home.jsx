import Stadium from "./homeImages/stadium.png";
import Glory from "./homeImages/glory.png";
import Awaits from "./homeImages/awaits.png";
import Spartan from "./homeImages/spartan.png";
import About from "./homeImages/aboutus.png";
import Theme from "./homeImages/theme.png";

function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen md:h-[946px]">
        {/* Background Image */}
        <img
          src={Stadium}
          alt="Stadium"
          className="w-full sm:h-full object-cover h-[100%]"
        />

        {/* Desktop View */}
        <img
          src={Glory}
          alt="Glory"
          className="hidden md:block absolute"
          style={{
            width: "466px",
            height: "250px",
            left: "160px",
            top: "281px",
          }}
        />
        <img
          src={Spartan}
          alt="Spartan"
          className="hidden md:block absolute"
          style={{
            width: "876px",
            height: "846px",
            left: "calc(50% - 438px)",
            top: "100px",
            zIndex: 10,
          }}
        />
        <img
          src={Awaits}
          alt="Awaits"
          className="hidden md:block absolute"
          style={{
            width: "511px",
            height: "250px",
            left: "979px",
            top: "598.35px",
          }}
        />

        {/* Mobile View */}
        <div className="sm:hidden absolute inset-0 flex flex-col items-center pt-32">
          {/* Added padding-top to move down */}
          {/* Glory Image */}
          <div className="flex justify-between pl-8 flex-col ">
            <div className="relative flex mt-20 items-center mb-6">
              <img
                src={Glory}
                alt="Glory"
                className="w-[75%] max-w-[280px]" // Adjusted size for mobile
              />
            </div>
            {/* Spartan Image */}
            <div className="relative mb-6">
              <img
                src={Spartan}
                alt="Spartan"
                className="w-[80%] max-w-[320px]" // Proper scaling for mobile
              />
            </div>
            {/* Awaits Image (Extreme right) */}
            <div className="relative flex items-center mb-16 ml-auto">
              {/* Move it to the extreme right */}
              <img
                src={Awaits}
                alt="Awaits"
                className="w-[75%] max-w-[280px]" // Adjusted size for mobile
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className=" text-center lg:text-left ml-[4%]">
        <h2 className="lg:text-left text-center text-[60px] sm:text-[80px] md:text-[130px] lg:text-[180px] font-karantina mb-8">
          <span className="text-white">ABOUT</span>{" "}
          <span style={{ color: "#FDD181" }}>US</span>
        </h2>
      </section>

      {/* Arena Section */}
      <section className="flex flex-col items-start sm:flex sm:flex-row sm:justify-between sm:items-center mb-[5%] ml-[4%] mr-[4%] sm:mr-0">
        <div className="flex flex-col justify-evenly sm:mr-[5%] w-[75%]">
          <div className="flex items-center gap-4">
            {/* Vertical Line */}
            <div className="bg-[#FDD181] w-[3px] lg:h-[90px] h-[70px]"></div>
            <h3 className="text-[80px] sm:text-[50px] md:text-[90px] font-karantina ">
              ARENA
            </h3>
          </div>
          <div className="hidden sm:block">
            <p className="text-gray-300 text-[30px] sm:text-[13px] md:text-[20px] lg:text-[30px]">
              Sports are more than just games—they're a celebration of human
              spirit, a testament to resilience, and a platform for greatness.
              Every year, here at BITS PILANI HYDERABAD CAMPUS, we allow this
              spirit to entirely consume us as we host our annual sports fest,
              ARENA. One of India's most anticipated sports fests, brings
              together athletes, fans, and competitors to push boundaries and
              achieve glory.
            </p>
          </div>
        </div>
        <div className="shrink-[2] sm:pr-[10%]">
          <img src={About} alt="Arena Poster" className="" />
        </div>
        <div className="sm:hidden">
          <p className="text-gray-300 text-[20px] sm:text-[13px] md:text-[20px] lg:text-[30px] py-[5%]">
            Sports are more than just games—they're a celebration of human
            spirit, a testament to resilience, and a platform for greatness.
            Every year, here at BITS PILANI HYDERABAD CAMPUS, we allow this
            spirit to entirely consume us as we host our annual sports fest,
            ARENA. One of India's most anticipated sports fests, brings together
            athletes, fans, and competitors to push boundaries and achieve
            glory.
          </p>
        </div>
      </section>

      {/* Theme Section */}
      <section className="flex flex-col items-end sm:flex-row-reverse justify-between sm:items-center ml-[4%]">
        <div className="flex flex-col justify-evenly pr-[10%] w-[75%]">
          <div className="flex items-center gap-4 ml-auto">
            {/* Vertical Line */}
            <h3 className="text-[80px] sm:text-[50px] md:text-[90px] font-karantina">
              THEME
            </h3>
            <div className="bg-[#FDD181] w-[3px] lg:h-[90px] h-[70px]"></div>
          </div>
          <div>
            <p className="text-gray-300 text-[13px] md:text-[20px] lg:text-[30px] text-right sm:block hidden">
              Experience the thrill of India’s most anticipated sports fest,
              ARENA, from 6th to 9th February 2025 at BITS Pilani Hyderabad
              Campus. With this year’s theme inspired by the gladiator’s spirit,
              the fest celebrates resilience, courage, and unyielding
              determination. Join athletes and fans from across the nation as we
              push boundaries, break barriers, and chase glory. Step into the
              arena and be a part of the action!
            </p>
          </div>
        </div>
        <div className="shrink-[2] mr-[5%]">
          <img src={Theme} alt="Theme" className="" />
        </div>
        <p className="text-gray-300 text-[20px] sm:hidden py-[5%]">
          Experience the thrill of India’s most anticipated sports fest, ARENA,
          from 6th to 9th February 2025 at BITS Pilani Hyderabad Campus. With
          this year’s theme inspired by the gladiator’s spirit, the fest
          celebrates resilience, courage, and unyielding determination. Join
          athletes and fans from across the nation as we push boundaries, break
          barriers, and chase glory. Step into the arena and be a part of the
          action!
        </p>
      </section>

      {/* Previous Years Section */}
      <section className=" ml-[4%] mt-[4%]">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-[#FDD181] w-[3px] lg:h-[90px] h-[70px]"></div>
          <h3 className="text-[50px] sm:text-[70px] md:text-[80px] font-karantina">
            PREVIOUS YEARS
          </h3>
        </div>

        {/* Arena 2024 */}
        <section className="flex flex-col items-start sm:flex sm:flex-row-reverse sm:justify-between sm:items-center mb-[5%] mr-[4%] sm:mr-0 sm:pr-[10%]">
          <div className="flex flex-col justify-evenly sm:w-[75%] w-[100%]">
            <div className="sm:flex items-center gap-4 sm:ml-auto">
              <h3 className="text-[50px] sm:text-[50px] md:text-[90px] font-karantina ">
                ARENA 20<span className="text-[#FDD181]">24</span>
              </h3>
            </div>
            <div className="hidden sm:block">
              <p className="text-gray-300 text-[30px] sm:text-[13px] md:text-[20px] lg:text-[30px]  text-right">
                ARENA 2024 at BITS Pilani Hyderabad Campus was a grand
                celebration of athletic excellence and unyielding determination.
                With athletes and fans from across the country, the fest
                showcased intense competitions, thrilling victories, and moments
                of unforgettable sportsmanship. This edition celebrated the
                champion within every participant, inspiring all to break
                boundaries and reach new heights. ARENA 2024 truly embodied the
                spirit of resilience, passion, and glory in the world of sports.
              </p>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-lg md:mb-0 w-full max-w-[540px] h-[331px] flex items-center justify-center mb-4 lg:mb-0 shrink-[2] mr-[10%]">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/JIWNk4zqAfI"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="sm:hidden">
            <p className="text-gray-300 text-[20px] sm:text-[13px] md:text-[20px] lg:text-[30px] py-[5%]">
              ARENA 2024 at BITS Pilani Hyderabad Campus was a grand celebration
              of athletic excellence and unyielding determination. With athletes
              and fans from across the country, the fest showcased intense
              competitions, thrilling victories, and moments of unforgettable
              sportsmanship. This edition celebrated the champion within every
              participant, inspiring all to break boundaries and reach new
              heights. ARENA 2024 truly embodied the spirit of resilience,
              passion, and glory in the world of sports.
            </p>
          </div>
        </section>

        {/* Arena 2023 */}
        <section className="flex flex-col items-end sm:flex-row justify-between sm:items-center ">
          <div className="flex flex-col justify-evenly sm:mr-[5%] sm:w-[75%] w-[100%]">
            <div className="sm:flex items-center gap-4 text-right pr-[10%]">
              <h3 className="text-[50px] sm:text-[50px] md:text-[90px] font-karantina">
                ARENA 20<span className="text-[#FDD181]">23</span>
              </h3>
            </div>
            <div>
              <p className="text-gray-300 text-[13px] md:text-[20px] lg:text-[30px] sm:block hidden">
                In 2023, BITS Pilani Hyderabad Campus hosted its flagship sports
                festival, ARENA, celebrating the true essence of sportsmanship
                and camaraderie. Athletes from across the nation came together
                to compete, inspire, and achieve greatness, embodying the spirit
                of perseverance and teamwork. From electrifying matches to
                unforgettable moments of glory, ARENA 2023 stood as a testament
                to the power of sports in uniting people and igniting passion.
                It was a celebration of resilience, determination, and the
                pursuit of excellence, leaving an indelible mark on all who
                participated.
              </p>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-lg md:mb-0 w-full max-w-[540px] h-[331px] flex items-center justify-center mb-4 lg:mb-0 shrink-[2] mr-[10%]">
            <iframe
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/VXu5lvIBQiU"
              title="YouTube Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <p className="text-gray-300 text-[20px] sm:hidden py-[5%]">
            In 2023, BITS Pilani Hyderabad Campus hosted its flagship sports
            festival, ARENA, celebrating the true essence of sportsmanship and
            camaraderie. Athletes from across the nation came together to
            compete, inspire, and achieve greatness, embodying the spirit of
            perseverance and teamwork. From electrifying matches to
            unforgettable moments of glory, ARENA 2023 stood as a testament to
            the power of sports in uniting people and igniting passion. It was a
            celebration of resilience, determination, and the pursuit of
            excellence, leaving an indelible mark on all who participated.
          </p>
        </section>
      </section>
    </div>
  );
}

export default Home;
