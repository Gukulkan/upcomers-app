import React from 'react';
import {Menu, Icon, Row, Breadcrumb, Card, Col, Avatar} from 'antd';
import "antd/dist/antd.css";
import {connect} from "react-redux";

const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'mail',
        }
    }


    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }


    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="top">
                    <Col span={12} offset={0}>
                        <Menu
                            onClick={this.handleClick}
                            // selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >
                            <Menu.Item key="mail">
                                <Icon type="mail"/>Navigation One
                            </Menu.Item>
                            <Menu.Item key="app" disabled>
                                <Icon type="appstore"/>Navigation Two
                            </Menu.Item>
                            <SubMenu
                                title={<span className="submenu-title-wrapper"><Icon type="setting"/>Navigation Three - Submenu</span>}>
                                <MenuItemGroup title="Item 1">
                                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                                </MenuItemGroup>
                                <MenuItemGroup title="Item 2">
                                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                                </MenuItemGroup>
                            </SubMenu>
                            <Menu.Item key="alipay">
                                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four -
                                    Link</a>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col span={12} offset={0}>
                        <Breadcrumb separator=">">
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                            <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                            <Breadcrumb.Item>An Application</Breadcrumb.Item>
                        </Breadcrumb>,
                    </Col>
                </Row>
                <Row type="flex" justify="center" align="top">
                    <Col span={12}>
                        <Row type="flex" justify="space-between" align="top">
                            <Col span={18}>
                                <Card title="Card title">
                                    <Card style={{ marginTop: 16 }} loading={false}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={(<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>)}
                                            description={(
                                                <div>
                                                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>

                                                    <p>fasdf asdfasdfasdf asdf asdf</p>
                                                </div>
                                            )}
                                        />
                                    </Card>
                                    <Card style={{ width: 300, marginTop: 16 }} loading={true}>
                                        <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Card title"
                                            description="This is the description"
                                        />
                                    </Card>
                                </Card>

                            </Col>
                            <Col span={6}>
                                <Card title="Card title">Card content</Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
};

const mapStateToProps = (state) => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);