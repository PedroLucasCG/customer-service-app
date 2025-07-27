import { useState, useRef, useEffect, createContext } from 'react';
import type { JSX } from 'react';
import SvgIcon from '../components/SvgIcon';
import styles from './Dashboard.module.css';
import logo from '../assets/imgs/logo.png';
import SubMenuChatsContent from './components/Submenus/SubMenuChatsContent';
import SubMenuVisitantesContent from './components/Submenus/SubMenuVisitantesContent';
import SubMenuEstatisticaContent from './components/Submenus/SubMenuEstatisticaContent';
import MainContentExample from './components/MainContentExample';

const componentMap: Record<string, JSX.Element> = {
    main: <MainContentExample />,
    chats: <MainContentExample />,
    visitantes: <MainContentExample />,
};

export default function SideBar() {
    const [retracted, setRetracted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const submenuRef = useRef<HTMLDivElement>(null);
    const [activeSubmenu, setActiveSubmenu] = useState(<></>);
    const [content, setContent] = useState(<MainContentExample />);

    const toggleSideBar = () => {
        setRetracted(prev => !prev);
    }

    const switchContent = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        setContent(componentMap[target.innerText.toLowerCase()]);
    }

    const toggleSubmenu = (event: React.MouseEvent<HTMLLIElement>) => {
        const label = (event.currentTarget.querySelector("span")?.innerText || "").toLowerCase();
        switch (label) {
            case "chats":
                console.log(1);
                setActiveSubmenu(<SubMenuChatsContent fn={ switchContent } />);
                break;
            case "visitantes":
                setActiveSubmenu(<SubMenuVisitantesContent fn={ switchContent } />);
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
            <div className={ styles.logo }>
                <img src={ logo } />
                <h1>Customer Service</h1>
            </div>
            <h4 className={ styles.h4 }>Menu</h4>
            <ul className={ styles.ul }>
                <li onClick={toggleSubmenu}>
                    <SvgIcon iconName="chat"/>
                    <span>Chats</span>
                </li>
                <li onClick={toggleSubmenu}>
                    <SvgIcon iconName="people"/>
                    <span>Visitantes</span>
                </li>
                <li>
                    <SvgIcon iconName="logout"/>
                    <span>logout</span>
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
