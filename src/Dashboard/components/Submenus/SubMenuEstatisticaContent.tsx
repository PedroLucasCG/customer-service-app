import SvgIcon from "../../../components/SvgIcon";
import styles from '../../Dashboard.module.css';

export default function SubMenuEstatisticaContent(props:  { fn: (event: React.MouseEvent<HTMLLIElement>) => void; }) {
    return (<>
        <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li onClick={ props.fn }>
                    <SvgIcon iconName="calendar"/>
                    <span>salas</span>
                </li>
                <li>
                    <SvgIcon iconName="people"/>
                    <span>bbb</span>
                </li>
                <li>
                    <SvgIcon iconName="graph"/>
                    <span>ccc</span>
                </li>
            </ul>
    </>);
}
