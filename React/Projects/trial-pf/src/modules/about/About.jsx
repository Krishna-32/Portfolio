import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationLinkedin from "../../../public/animations/linkedin.json"; 
import animationGithub from "../../../public/animations/github.json"; 
import animationGmail from "../../../public/animations/gmail.json"; 
import animationInsta from "../../../public/animations/insta.json"; 

function About() {
    const linedin = useRef(null);
    const github = useRef(null);
    const gmail = useRef(null);
    const insta = useRef(null);

    useEffect(() => {
        Lottie.loadAnimation({
            container: linedin.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationLinkedin
        });

        Lottie.loadAnimation({
            container: github.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationGithub
        });

        Lottie.loadAnimation({
            container: gmail.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationGmail
        });

        Lottie.loadAnimation({
            container: insta.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationInsta
        });
    }, []);

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.02" className='w-full h-screen bg-light_green rounded-tl-3xl rounded-tr-3xl'>
            <div className='px-16 py-20'>
                <p className='text-[3.5vw] font-regularNeue leading-[4.5vw] pr-24'>
                    Web development is my passion — I love creating <span className='border-b-[3px] border-blackk'>visually appealing</span>, <span className='border-b-[3px] border-blackk'>user-friendly</span> websites and adding <br /> <span className='border-b-[3px] border-blackk'>fun animations</span> to enhance <span className='border-b-[3px] border-blackk'>the experience</span>.
                </p>
            </div>

            <div className='border-t-2 border-[#99ad53] w-full h-20 font-regularNeue font-light'>

                
                <div className='flex justify-between px-16 pt-5 pr-64 '> 
                    <div className='w-full'>
                        <p>
                            Additional Info:
                        </p>
                    </div>

                    <div className='w-full'>
                        <p>
                            Hi, I'm Krishna Gupta! I'm currently pursuing a Computer Programming Diploma at Georgian@ilac in Toronto.
                        </p>

                        <br />

                        <p>
                            I'm currently looking for opportunities to grow my skills and gain experience. I'm open to internships, entry-level positions, junior developer roles. I'm excited to contribute to innovative projects and work with a team where I can continue to learn and develop my skills.
                        </p>
                    </div>
                </div>



                <div className='flex justify-between items-center px-16 pt-32 pr-64 '> 
                    <div className='w-full'>

                        <p>Socials:</p>                            
                    
                    </div>

                    <div className="w-full">
                            <div className="flex gap-24">
                                <div className="w-24 cursor-pointer" ref={linedin}></div>

                                <div className="w-14 cursor-pointer" ref={github}></div>

                                <div className="w-20 cursor-pointer" ref={gmail}></div>

                                <div className="w-20 cursor-pointer" ref={insta}></div>
                            </div>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default About;
