import chat from '../assets/icons/chatbox.svg';
import people from '../assets/icons/people.svg';
import logout from '../assets/icons/logout.svg';
import activity from '../assets/icons/activity.svg';
import alert from '../assets/icons/alert.svg';
import done from '../assets/icons/done.svg';
import up from '../assets/icons/up.svg';
import bubble from '../assets/icons/bubble.svg';
import clock from '../assets/icons/clock.svg';

const icons ={
    chat,
    people,
    logout,
    activity,
    alert,
    done,
    up,
    bubble,
    clock,
};

interface SvgIconProps {
    iconName: keyof typeof icons;
}

export default function SvgIcon({ iconName }: SvgIconProps) {
    return <img src={icons[iconName]} alt={iconName} className='icon'/>;
}
