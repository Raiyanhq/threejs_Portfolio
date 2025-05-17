import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
const isMobile = useMediaQuery({ maxWidth: 768})

    const sizes = calculateSizes(isMobile)
    return (
        <section className={"min-h-screen w-full flex flex-col relative"}>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className="sm:text-3xl text-3xl font-medium text-white text-center font-generalsans"> Hi! I am
                    Raiyan! <span className="waving-hand">🤘</span></p>
                <p className="hero_tag text-gray_gradient text-center">Aspiring Full Stack Developer</p>
            </div>
            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader/>}>

                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                        <HeroCamera isMobile={{isMobile}}>
                            <HackerRoom
                                //scale={0.2}
                                //position={[0, -6, 0]}
                                //rotation={[0, -Math.PI / 2, 0]}
                                position={sizes.deskPosition}
                                rotation={[0.1, -Math.PI, 0]}
                                scale={sizes.deskScale}

                            />

                        </HeroCamera>

                        <group>
                            <Target postion={sizes.targetPosition}/>
                            <ReactLogo position ={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        <ambientLight intensity={1}/>
                        <directionalLight position={[10, 10, 10]} intensity={1}/>
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href={'#contact'} className="w-fit">
                    <Button name="Let's Talk!" isBeam containerClass="sm:-fit w-full sm:min-w-96" />
                </a>

            </div>
        </section>
    );
}


export default Hero
