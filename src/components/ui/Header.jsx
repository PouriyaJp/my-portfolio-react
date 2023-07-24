import { cloneElement } from "react";
import {AppBar, Toolbar, useScrollTrigger} from "@mui/material";

const Header = () => {
    function ElevationScroll(props) {
        const { children } = props;

        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 100,
        });

        return cloneElement(children, {
            elevation: trigger ? 4 : 0,
        });
    }

    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </>
    );
};

export default Header;
