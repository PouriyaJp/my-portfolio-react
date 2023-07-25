import {useContext} from "react";
import MainContext from "../../context";
import {SidebarContent} from ".";
import {SidebarDrawer} from "../drawer";

const Sidebar = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return (
        <>
            <SidebarContent setDrawerOpen={setDrawerOpen}/>

            {/* SidebarDrawer */}
            <SidebarDrawer/>
        </>
    );
};

export default Sidebar;
