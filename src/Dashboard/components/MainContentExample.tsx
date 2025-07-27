import style from "./MainContent.module.css";
import SvgIcon from "../../components/SvgIcon";

export default function MainContentExample() {
    return (<>
        <main className={ style.main }>
            <div>
                <h1>Bem-vindo de volta, - Pessoa - </h1>
                <h2> O resumo de hoje !</h2>
            </div>

            <div>
                <div>
                    <p>Chats Ativos <SvgIcon iconName="bubble" /></p>
                    <h2>3</h2>
                    <span>Visitantes Online</span>
                </div>

                <div>
                    <p>Tempo Médio de Resposta <SvgIcon iconName="clock" /></p>
                    <h2>3min 45s</h2>
                    <span><SvgIcon iconName="activity" /> Melhorando</span>
                </div>

                <div>
                    <p>Índice de satisfação <SvgIcon iconName="activity" /></p>
                    <h2>5.8</h2>
                    <span className={ style.bar }>
                        <span className={ style.fill } style={{ width: '76%' }}></span>
                    </span>
                </div>
            </div>

            <div>
                <h3>Performance</h3>
                <div className={ style.details }>
                    <div>
                        <p><SvgIcon iconName="done" />Resolvidos Hoje</p>
                        <h3>18</h3>
                    </div>
                    <div>
                        <p><SvgIcon iconName="alert" />Não resolvidos</p>
                        <h3>1</h3>
                    </div>
                    <div>
                        <p><SvgIcon iconName="activity" />Em andamento</p>
                        <h3>5</h3>
                    </div>
                    <div>
                        <p><SvgIcon iconName="up" />Taxa de resolução</p>
                        <h3>94.7%</h3>
                    </div>
                </div>
            </div>
        </main>
    </>);
}
