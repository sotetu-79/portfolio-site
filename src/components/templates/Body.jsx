import Profile from "../organisms/Profile";
import SectionBorder from "../atoms/SectionBorder";
import Posts from "../organisms/Posts";
import Skills from "../organisms/Skill";
import Experience from "../organisms/Experience";
import Works from "../organisms/Works";

function Body() {
  return (
    <>
      <Works />
      <SectionBorder />
      <Profile />
      <SectionBorder />
      <Skills />
      <SectionBorder />
      <Posts />
      <SectionBorder />
      <Experience />
      <SectionBorder />
    </>
  );
}

export default Body;
