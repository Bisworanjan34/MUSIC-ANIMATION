import React, { useRef, useState } from 'react'
import audio from '../audio/khamosiya.mp3'
import './Musicanimation.css'
const Musicanimation = () => {
let musicref=useRef()
let [music,setmusic]=useState(false)
let audioRef=useRef()
    let musicon=()=>{
        musicref.current.classList.toggle('active')
        console.log('music on')
        if(!music){
            setmusic(true)
            audioRef.current.play()
        }
        else{
            setmusic(false)
            audioRef.current.pause()
        }
    }
    const handleSongEnd = () => {
      audioRef.current.currentTime = 0; // Reset the song to the beginning
      audioRef.current.play(); // Automatically play again
      setIsPlaying(true); // Keep the play state as "playing"
    };
  return (
    <div>
      
      <h1 className='font-bold uppercase text-balck opacity-85 text-2xl py-3 bg-slate-200'>{music?'khamosiyan mp3 song...':'music animation'}</h1>
      <div className="div music-box "
      ref={musicref}
      >
         <div className="div box box1 "></div>
         <div className="div box box2 "></div>
         <div className="div box box3 "></div>
         <div className="div box box4 "></div>
         <div className="div box box5 "></div>
         <div className="div box box6 "></div>
         <div className="div box box7 "></div>
         <div className="div box box8 "></div>
      </div>

      <audio ref={audioRef} onEnded={handleSongEnd} src={audio}></audio>

      <button className='musicbtn'
      onClick={musicon} >
        {music?'music off':'music on'}
      
      </button>
    </div>
  )
}

export default Musicanimation
