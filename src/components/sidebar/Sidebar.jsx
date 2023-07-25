import {useContext} from "react";
import MainContext from "../../context";
import {SidebarContent} from ".";
import {DrawerActionButton, SidebarDrawer} from "../drawer";

const Sidebar = () => {
    const {setDrawerOpen} = useContext(MainContext);

    return (
        <>
            {/* DrawerActionButton */}
            <DrawerActionButton/>

            <SidebarContent setDrawerOpen={setDrawerOpen}/>

            {/* SidebarDrawer */}
            <SidebarDrawer/>
        </>
    );
};

export default Sidebar;
