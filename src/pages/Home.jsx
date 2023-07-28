import {useEffect, useRef, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import {lightGreen, teal} from "@mui/material/colors";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {links} from "../constants/particles";
import TextTransition, {presets} from "react-text-transition";
import bg05 from "../assets/bg5.jpg";
import {Helmet} from "react-helmet-async";

const Home = () => {
    const [index, setIndex] = useState(0);
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings= [
        "به وبسایت شخصی من خوش اومدی",
        "تو میتونی با رزومه و توانایی های  من آشنا بشی",
        "میتونی از طریق ایمیل به من پیام بدی",
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: ["من پوریا جمشیدپور یک برنامه نویس فول استک هستم"],
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 10,
            showCursor: false
        });

        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000);

        // const typedInfo = new Typed(infoEl.current, {
        //     strings: [
        //         "من یک برنامه نویس فول استک هستم",
        //         "که عاشق کدنویسی در دنیای لاراول و ری اکت هستم",
        //         "میتونی دوست خوب من باشی",
        //     ],
        //     startDelay: 1500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // });

        return () => {
            typedName.destroy();
            clearInterval(stringsTransition);
            // typedInfo.destroy();
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
            zIndex:10000
        }}>
            <Helmet>
                <title>صفحه اصلی</title>
            </Helmet>
            <Typography ref={nameEl} variant="h3" color={lightGreen[700]} sx={{
                position: "absolute",
                top: "50px",
            }}/>
            <Box component="div" sx={{display: "flex"}}>
                <Typography variant="h4" color="whitesmoke" sx={{mr: 1, textAlign: "left"}}>
                    دوست خوب من
                </Typography>
                <TextTransition springConfig={presets.wobbly}>
                    <Typography ref={infoEl} variant="h5" color={teal["A200"]} >
                        {strings[index % strings.length]}
                    </Typography>
                </TextTransition>
            </Box>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={links}/>
        </Box>
    );
}

export default Home;