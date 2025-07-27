import { useState, useRef, useEffect, createContext } from 'react';
import type { JSX } from 'react';
import SvgIcon from '../components/SvgIcon';
import styles from './Dashboard.module.css';
import SubMenuSalaContent from './components/Submenus/SubMenuSalaContent';
import SubMenuHistoricoContent from './components/Submenus/SubMenuHistoricoContent';
import SubMenuEstatisticaContent from './components/Submenus/SubMenuEstatisticaContent';
import MainContentExample from './components/MainContentExample';

const componentMap: Record<string, JSX.Element> = {
  salas: <MainContentExample />,
};

export default function SideBar() {
    const [retracted, setRetracted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const [activeSubmenu, setActiveSubmenu] = useState(<></>);
    const [content, setContent] = useState(<></>);

    const toggleSideBar = () => {
        setRetracted(prev => !prev);
    }

    const switchContent = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        setContent(componentMap[target.innerText]);
    }

    const toggleSubmenu = (event: React.MouseEvent<HTMLLIElement>) => {
        const label = (event.currentTarget.querySelector("span")?.innerText || "").toLowerCase();
        switch (label) {
            case "salas":
                setActiveSubmenu(<SubMenuSalaContent fn={ switchContent } />);
                break;
            case "histórico":
                setActiveSubmenu(<SubMenuHistoricoContent fn={ switchContent } />);
                break;
            case "estatística":
                setActiveSubmenu(<SubMenuEstatisticaContent fn={ switchContent } />);
                break;
            default:
                break;
        }
        setIsOpen(true);
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (submenuRef.current && !submenuRef.current.contains(target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (<div className={ styles.container }>
        <aside className={ `${ styles.aside } ${ retracted ? styles.retracted : "" }` }>
            <div className={ styles.retractButton } onClick={ toggleSideBar }>{retracted ? "»" : "«"}</div>
            <div className={ styles.logo }>Logo</div>
            <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li onClick={toggleSubmenu}>
                    <SvgIcon iconName="calendar"/>
                    <span>salas</span>
                </li>
                <li onClick={toggleSubmenu}>
                    <SvgIcon iconName="people"/>
                    <span>histórico</span>
                </li>
                <li onClick={toggleSubmenu}>
                    <SvgIcon iconName="graph"/>
                    <span>estatística</span>
                </li>
            </ul>
        </aside>
        <div ref={ submenuRef } className={ `${ styles.submenu } ${ isOpen ? "" : "hidden" }` }>
            { activeSubmenu }
        </div>
        <main className={ styles.main }>
            { content }
        </main>
    </div>);
}
