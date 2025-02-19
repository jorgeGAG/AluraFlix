import styled from "styled-components";
import { ContenidoParcial, BotonLink, Logo } from "../UI/Estilos";
import logo from '../../assets/img/logo.svg';
import { Link, useLocation } from "react-router-dom";

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

const HeaderContenido = styled(ContenidoParcial)`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;

const HeaderLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const BotonConBorde = styled(BotonLink)`
    border: 2px solid #2271D1;
`;

export function Cabecera() {
    const url = useLocation();

    return (
        <Header>
            <HeaderContenido>
                <HeaderLink to='/'>
                    <Logo src={logo} alt="" />
                </HeaderLink>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {url.pathname === '/' && (
                        <>
                            <BotonConBorde tipo='lineas' color="#fff" to='/'>HOME</BotonConBorde>
                            <BotonLink tipo='lineas' color="#fff" to='/video'>NUEVO VIDEO</BotonLink>
                        </>
                    )}
                </div>
            </HeaderContenido>
        </Header>
    );
}
