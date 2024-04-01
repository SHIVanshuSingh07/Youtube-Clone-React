import React from 'react'
import './Feed.css'
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

function Feed() {
  return (
    <div className='cardd'>
        <img src={thumbnail1} alt="" />
        <h2>Best Channek to learn codeing.</h2>
        <h3>SHIVANSHU SINGH</h3>
        <p>15k views &bull; 2 days ago</p>
    </div>
  )
}

export default Feed
