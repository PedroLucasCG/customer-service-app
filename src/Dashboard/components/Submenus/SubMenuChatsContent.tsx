import SvgIcon from "../../../components/SvgIcon";
import styles from '../../Dashboard.module.css';

export default function SubMenuSalaContent(props: { fn: (event: React.MouseEvent<HTMLLIElement>) => void; }) {
    return (<>
        <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li onClick={ props.fn }>
                    <SvgIcon iconName="people"/>
                    <span>Chats</span>
                </li>
                <li onClick={ props.fn }>
                    <SvgIcon iconName="chat"/>
                    <span>Visitantes</span>
                </li>
            </ul>
    </>);
}
