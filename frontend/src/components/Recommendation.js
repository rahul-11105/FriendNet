import React from 'react'
import { useContext } from 'react';
import "../public/Recommendation.css";
import context from '../Contex/UserContext';
import FrndRecommendation from './FrndRecommendation';

export default function Recommendation() {
  const context1 = useContext(context);
  let arr = context1.frnd;
  
  return ( 
    <>
    <section className="recommendation"> 
        <h2>Recommendations</h2> 
        <div className='reco'>
            <ul id="ul">
              {arr.length > 0 ? (
                arr.map(user => <FrndRecommendation key={user._id} name={user.Name} />) 
              ) : (
                <p>Oops! No friends found</p>
              )}
            </ul>
        </div>
      </section>
    </>
  )
}
