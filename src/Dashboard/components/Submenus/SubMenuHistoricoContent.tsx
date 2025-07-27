import SvgIcon from "../../../components/SvgIcon";
import styles from '../../Dashboard.module.css';

export default function SubMenuHistoricoContent(props: { fn: (event: React.MouseEvent<HTMLLIElement>) => void; }) {
    return (<>
        <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li>
                    <SvgIcon iconName="calendar"/>
                    <span>hhh</span>
                </li>
                <li>
                    <SvgIcon iconName="people"/>
                    <span>tttt</span>
                </li>
                <li>
                    <SvgIcon iconName="graph"/>
                    <span>dfdfdf</span>
                </li>
            </ul>
    </>);
}
