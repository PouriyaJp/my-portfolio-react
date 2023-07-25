import {useEffect, useRef} from "react";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import {blue, lightGreen, teal} from "@mui/material/colors";

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

    return(
        <Box sx={{
            // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${require("./assets/bg5.jpg")})`,
            height: "100vh",
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography ref={nameEl} variant="h3" color={lightGreen[700]} />
            <Typography ref={infoEl} variant="h5" color={teal["A200"]} />

        </Box>
    );
}

export default Home;