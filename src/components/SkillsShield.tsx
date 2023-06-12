interface SkillsShieldProps {
    imgAlt: string;
    text: string;
    logo: string;
    backgroundColor?: string;
    logoColor?: string;
    style?: string;
    className?: string;
}

const SkillsShield = (props: SkillsShieldProps) => {
    const backgroundColor = props.backgroundColor ?? "black";
    const logoColor = props.logoColor ?? "white";
    const style = props.style ?? "flat";
    const className = props.className ?? "h-6 md:h-7";
    const src = "https://img.shields.io/badge/" + props.text + "-" + backgroundColor + ".svg?style=" + style + "&logo=" + props.logo + "&logoColor=" + logoColor;
    return (
        <img
            alt={props.imgAlt}
            className={className}
            src={src}
        />);
}

export default SkillsShield;