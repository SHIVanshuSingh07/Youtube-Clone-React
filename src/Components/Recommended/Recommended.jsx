import React, { useEffect, useState } from 'react'
import './Recommended.css'
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";



const Recommended = ({categoryId}) => {
    const[apiData,setApiData] = useState([]);
    const fetchData = async()=>{
        const relatedVideo_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular$maxResult=45&regionCode=us&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }
    useEffect(()=>{
        fetchData();

    },[])
  return (
    <div className='recommended'>
        {apiData.map((item,index)=>{
            return (
        <div className="side-video-list">
            <img src={thumbnail1} alt="" />
            <div className="vid-info">
                <h4>Help you to become a better developer </h4>
                <p>SHivaNshu</p>
                <p>199K Views</p>
            </div>
        </div>    
            )
        })}
        
    </div>
  )
}

export default Recommended