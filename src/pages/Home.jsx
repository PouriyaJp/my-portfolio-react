import {useEffect, useRef, useCallback} from "react";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import {lightGreen, teal} from "@mui/material/colors";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {links} from "../constants/particles";
import bg05 from "../assets/bg5.jpg";

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["پوریا جمشیدپور"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        });
        const typedInfo = new Typed(infoEl.current, {
            strings: [
                "من یک برنامه نویس فول استک هستم",
                "که عاشق کدنویسی در دنیای لاراول و ری اکت هستم",
                "میتونی دوست خوب من باشی",
            ],
            startDelay: 1500,
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false
        });

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        }
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return(
        <Box sx={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${bg05})`,
            height: "100vh",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Typography ref={nameEl} variant="h3" color={lightGreen[700]} />
            <Typography ref={infoEl} variant="h5" color={teal["A200"]} />
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>
        </Box>
    );
}

export default Home;