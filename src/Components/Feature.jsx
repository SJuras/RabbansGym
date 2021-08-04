import React from 'react';
import Featurebox from './Featurebox';
import FeatureImage1 from '../images/1.svg';
import FeatureImage2 from '../images/2.svg';
import FeatureImage3 from '../images/3.svg';
import FeatureImage4 from '../images/4.svg';

function Feature(){
  return(
    <div id="features">
      <h2>FEATURES</h2>
      <div className="a-container">
        <Featurebox
          image={FeatureImage1}
          title="Weightlifting"
          text="Strength training begins with full-body power exercises"
         />
        <Featurebox
          image={FeatureImage2}
          title="Cardio"
          text="Essential part of your workout, cardio will burn off redundant calories"
         />
        <Featurebox
          image={FeatureImage3}
          title="Toning"
          text="Gain muscle tone with high-repetition exercises in our programs"
         />
        <Featurebox
          image={FeatureImage4}
          title="HIIT"
          text="High Intensity Interval Training"
         />
      </div>
    </div>
  );
}

export default Feature;
