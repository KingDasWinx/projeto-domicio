import { HeaderContainer } from "../styles/header-style"
import { Dropdown, Space } from 'antd';
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";


export const Header = () => {
    const items = [
        {
            label: <p>Nada aqui</p>,
            key: '0',
        },
    ];

    return (
        <HeaderContainer>
            <div>
                <Link to="/">
                    <img className="imagem" src={logo} alt="" />
                </Link>
            </div>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <ion-icon name="ellipsis-vertical" />
                    </Space>
                </a>
            </Dropdown>
        </HeaderContainer>
    )
}