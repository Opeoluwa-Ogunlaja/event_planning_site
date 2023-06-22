import { icon_facebook, icon_instagram, icon_pinterest, icon_twitter } from "../assets/icons/regular";
import logo from "../assets/logo.svg";

const socials = [{
    name: 'facebook',
    icon: icon_facebook
},
{
    name: 'instagram',
    icon: icon_instagram
},
{
    name: 'pinterest',
    icon: icon_pinterest
},
{
    name: 'twitter',
    icon: icon_twitter
}]


const Footer = () => {
    return <footer className="py-5 bg-footer section-container flex items-center sm:flex-row flex-col">
        <div className="w-12 aspect-square">
            <img src={logo} alt="logo" className="w-full aspect-square object-cover"/>
        </div>
        <div className="ml-auto">
            <ul></ul>
            <ul className="flex gap-2">
                {socials.map(() => {
                    
                })}
            </ul>
        </div>
    </footer>
}

export default Footer;