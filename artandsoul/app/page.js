import { FeaturedArtist } from "./_components/FeaturedArtist/featured_artist";
import { Footer } from "./_components/Footer/footer";
import { Header } from "./_components/Header/header";
import { HeroSection } from "./_components/HeroSection/hero";
import { HeroSectionImages } from "./_components/HeroSection/hero_section_images";
import { Line } from "./_components/Line/line";
import { RedRectangle } from "./_components/RedRectangle/red_rectangle";
import { RecentWorks } from "./_components/SecondPage/recent_works";
import { WhoWeAre } from "./_components/SecondPage/who_we_are";

export default function Home() {
  return (
   <div>
   <HeroSectionImages/>
      <div className="">
        <Header/>
        <HeroSection/>
        
      </div>
      <Line/>
     
      <div>
        <WhoWeAre/>
        <RecentWorks/>
      </div>
      <div>
        <RedRectangle/>
      </div>
      <div>
        <FeaturedArtist/>
      </div>
      <div>
        <Footer/>
      </div>
   </div>
  );
}
