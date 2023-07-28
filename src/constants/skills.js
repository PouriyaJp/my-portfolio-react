import HtmlIcon from "../assets/icons/html5-original.svg";
import CssIcon from "../assets/icons/css3-original.svg";
import BootstrapIcon from "../assets/icons/bootstrap-svgrepo-com.svg";
import JsIcon from "../assets/icons/javascript-original.svg";
import jQueryIcon from "../assets/icons/jquery-1-logo-svgrepo-com.svg";
import ReactIcon from "../assets/icons/react-original.svg";
import PhpIcon from "../assets/icons/icons8-php-logo.svg";
import LaravelIcon from "../assets/icons/laravel-svgrepo-com.svg";
import GitIcon from "../assets/icons/git-original.svg";
import LinuxIcon from "../assets/icons/ubuntu-svgrepo-com.svg";
import {blue, deepPurple, lightBlue, orange, red, yellow} from "@mui/material/colors";

export const devSkills = {
    htmlSkill: {
        id: 0,
        name: "HTML",
        icon: HtmlIcon,
        color: orange[800],
    },
    cssSkill: {
        id: 1,
        name: "CSS",
        icon: CssIcon,
        color: lightBlue[500],
    },
    bootstrapSkill: {
        id: 2,
        name: "Bootstrap",
        icon: BootstrapIcon,
        color: deepPurple[400],
    },
    jsSkill: {
        id: 3,
        name: "JavaScript",
        icon: JsIcon,
        color: yellow["A200"],
    },
    jquerySkill: {
        id: 4,
        name: "jQuery",
        icon: jQueryIcon,
        color: blue[500],
    },
    reactSkill: {
        id: 5,
        name: "React",
        icon: ReactIcon,
        color: lightBlue["A100"],
    },
    phpSkill: {
        id: 6,
        name: "PHP",
        icon: PhpIcon,
        color: deepPurple[400],
    },
    laravelSkill: {
        id: 7,
        name: "Laravel",
        icon: LaravelIcon,
        color: red[500],
    },
    gitSkill: {
        id: 8,
        name: "Git",
        icon: GitIcon,
        color: "primary",
    },
    linuxSkill: {
        id: 9,
        name: "Linux/Ubuntu",
        icon: LinuxIcon,
        color: orange[900],
    },
};
