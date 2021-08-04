import React from 'react';
import Merchbox from './Merchbox';
import crew from '../images/crew.png';
import pants from '../images/pants.png';
import lifterTank from '../images/lifterTank.png';
import dumbbells from '../images/dumbbells.png';
import proteine from '../images/proteine.png';
import girlTankTop from '../images/girlTankTop.png';


function Merch(){
  return(
    <div id="merch">
      <h2>Our Premium <span>Gear</span></h2>
      <div className="merch-container">
        <Merchbox
          image={crew}
          title="Body Armor"
          tag="Premium Body Armor"
          description="Stay protected at all times with our premium product high-quality body armor"
          price="2589.99"
        />
        <Merchbox
          image={girlTankTop}
          title="Gym Tank Top"
          tag="Women's Gym Apparel"
          description="Stay protected at all times with our premium product high-quality body armor"
          price="119.99"
        />
        <Merchbox
          image={pants}
          title="Gym Pants"
          tag="Unisex Gym Apparel"
          description="Stay protected at all times with our premium product high-quality body armor"
          price="244.99"
        />
      </div>
      <div className="merch-container">
        <Merchbox
          image={lifterTank}
          title="Lifter's Tank Top"
          tag="Men's Gym Apparel"
          description="Stay protected at all times with our premium product high-quality body armor"
          price="129.99"
        />
        <Merchbox
          image={dumbbells}
          title="Travel Dumbbells"
          tag="Workout Gear"
          description="Set of dumbbells for exercises while you travel. Practical and comfortable, only 100kg of cast iron each"
          price="485.99"
        />
        <Merchbox
          image={proteine}
          title="Power Proteins"
          tag="Food Supplement"
          description="High powered proteins, made of for glorious muscle gains"
          price="119.99"
        />
      </div>
    </div>
  );
}


export default Merch
