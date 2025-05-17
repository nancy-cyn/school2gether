import React from 'react';
import MathBox from "./math";
import IsiZuluBox from "./isizulu";
import EnglishBox from "./english";
import AfrikaansBox from "./afrikaans";
import EmsBox from './ems';
import ScienceBox from './science';
import SkillsBox from './skills';
import SocialBox from './social';
import GeographyBox from './geography';
import SearchBar from './search';
import Title from './title';
import SortDropdown from './sort';
import "./math.css";
import "./isizulu.css";
import "./english.css";
import "./afrikaans.css";
import "./App.css";
import "./ems.css";
import  "./science.css";
import "./skills.css";
import "./social.css";
import  "./search.css";
import "./title.css";
import "./sort.css";

function App() {
  return (
    <div className="boxes-container">
      <Title />
      <SortDropdown />
      <SearchBar />
      <MathBox />
      <IsiZuluBox />
      <EnglishBox />
      <AfrikaansBox />
      <EmsBox />
      <ScienceBox />
      <SkillsBox />
      <SocialBox />
      <GeographyBox />
    </div>
  );
}

export default App;