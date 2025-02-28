import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { animateWithGsap } from '../utils/animations'

const HowItWorks = () => {

    const videoRef = useRef();

    useGSAP(() => {
        gsap.from('#chip', {
            scrollTrigger: {
                trigger: "#chip",
                start: '20% bottom'
            },
            opacity: 0,
            scale: 2,
            duration: 2,
            ease: 'power2.inOut'
        })

        animateWithGsap('.g_fadeIn', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut"
        })
    }, [])

    return (
        <section className='common-padding'>
            <div className='svreen-max-width'>
                <div id='chip' className='flex-center w-full my-20'>
                    <img src={chipImg} alt="chip" width={180} height={180} />
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='hiw-title'>
                        A17 pro chip.
                        <br /> A monster win for gaming.
                    </h2>
                    <p className='hiw-subtitle'>
                        it`s here. the biggest one redesign in the history of Apple GPUs.
                    </p>
                </div>
                <div className='mt-10 md:mt-20 mb-14'>
                    <div className='relative h-full flex-center'>
                        <div className='overflow-hidden'>
                            <img src={frameImg} alt="frame" className='bg-transparent relative z-10' />
                        </div>
                        <div className='hiw-video'>
                            <video className='pointer-events-none' playsInline preload='none' muted autoPlay ref={videoRef}>
                                <source src={frameVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                    <p className='text-gray text-center font-semibold mt-3'>
                        Honka! start rail
                    </p>
                    <div className="hiw-text-container mt-10">
                        <div className="flex flex-1 justify-center flex-col">
                            <p className="hiw-text g_fadeIn">
                                A17 pro is an entirely new class of  iphone chip that delivers our  space {' '}
                                <span className="text-white">
                                    best geraphic performane by far
                                </span>,
                                using the same alloy that spacecrafts use for missions to Mars.
                            </p>


                        <p className="hiw-text g_fadeIn">
                            Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                            <span className="text-white">
                                lightest Pro models ever.
                            </span>
                            You'll notice the difference the moment you pick one up.
                        </p>
                        </div>

                        <div className='flex-1 flex  justify-center flex-col g_fadeIn'>
                            <p className='hiw-text'>new</p>
                            <p className='hiw-bigtext'>pro-class GPU</p>
                            <p className='hiw-text'>with 6 cores</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks