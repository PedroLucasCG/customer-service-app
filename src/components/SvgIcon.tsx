import graph from '../assets/graph.svg';
import calendar from '../assets/calendar-date.svg';
import people from '../assets/people.svg';

const icons ={
    graph,
    calendar,
    people
};

interface SvgIconProps {
    iconName: keyof typeof icons;
}

export default function SvgIcon({ iconName }: SvgIconProps) {
    return <img src={icons[iconName]} alt={iconName} />;
}
