import { TypeAnimation } from 'react-type-animation'
import './homepage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Homepage = () => {

  const [typingStatus, setTypingStatus] = useState("human1")

    return (
        <div className='homepage'>
            <img src="/orbital.png" alt="" className="orbital" />
            <div className="left">
                <h1>BUDDY AI</h1>
                <h2>Making Work Fun and Easy with Buddy AI!</h2>
                <h3>Your smart office assistant that simplifies tasks, boosts productivity, and makes work effortless.</h3>
                <Link to="/dashboard">Get Started</Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="bgContainer">
                        <div className="bg"></div>
                    </div>
                    <img src="/buddybot.png" alt="" className="bot" />
                <div className="chat">
                    <img src={typingStatus === "human1"
                         ? "/vishwa.jpg" 
                         : typingStatus === "human2" 
                         ? "/NaguHDimage.jpeg" 
                         : "buddybot.png"} alt="" />
                    <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Human: Hai Buddy!',
                        2000, () => {
                            setTypingStatus("bot")
                        },
                        'Bot: Hey there! How can I help you?',
                        2000, () =>{
                            setTypingStatus("human2")
                        },
                        'Human2: Love you Buddy!',
                        2000,() => {
                            setTypingStatus("bot")
                        },
                        'Bot: Aww, thats so sweet!',
                        2000,() => {
                            setTypingStatus("human1")
                        },
      ]}
      wrapper="span"
      repeat={Infinity}
      cursor={true}
      omitDeletionAnimation={true}
    />
                    </div>
                </div>
            </div>
            <div className="terms">
                <img src="/buddylogo.png" alt="" />
                <div className="links">
                    <Link to ="/">Terms of Service</Link>
                    <span>|</span>
                    <Link to ="/">Privacy Policy</Link>
                </div>
            </div>
        </div>
    );
};

export default Homepage;