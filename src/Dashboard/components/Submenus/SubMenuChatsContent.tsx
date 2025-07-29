import SvgIcon from "../../../components/SvgIcon";
import styles from '../../Dashboard.module.css';

export default function SubMenuSalaContent(props: { fn: (event: React.MouseEvent<HTMLLIElement>) => void; }) {
    return (<>
        <h4 className={ styles.h4 }>Chats</h4>
            <ul className={ styles.ul }>
                <li onClick={ props.fn }>
                    <SvgIcon iconName="people"/>
                    <span>Pessoa 1</span>
                </li>
                <li onClick={ props.fn }>
                    <SvgIcon iconName="chat"/>
                    <span>Pessoa 2</span>
                </li>
            </ul>
    </>);
}
