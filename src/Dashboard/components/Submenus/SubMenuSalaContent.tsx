import SvgIcon from "../../../components/SvgIcon";
import styles from '../../Dashboard.module.css';

export default function SubMenuSalaContent(props: { fn: (event: React.MouseEvent<HTMLLIElement>) => void; }) {
    return (<>
        <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li>
                    <SvgIcon iconName="calendar"/>
                    <span>gráficos</span>
                </li>
                <li>
                    <SvgIcon iconName="people"/>
                    <span>clientes</span>
                </li>
                <li>
                    <SvgIcon iconName="graph"/>
                    <span>usuários</span>
                </li>
            </ul>
    </>);
}
