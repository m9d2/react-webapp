import { View } from "@tarojs/components";
import "./index.scss";
import { Col, Row } from "@nutui/nutui-react-taro";
import Taro from "@tarojs/taro";

const Menu = (props: {
  title: string;
  icon: React.ReactElement;
  url: string;
}) => {
  const { title, icon, url } = props;
  return (
    <View className="menu-card">
      <View className="menu-icon" onClick={() => Taro.switchTab({ url: url })}>
        {icon}
      </View>
      <View className="menu-title">{title}</View>
    </View>
  );
};

const menus = [
  {
    title: "收藏夹",
    icon: <></>,
    url: "",
  },
  {
    title: "错题集",
    icon: <></>,
    url: "",
  },
  {
    title: "做题历史",
    icon: <></>,
    url: "",
  },
];

function Index() {
  return (
    <View className="container">
      <View className="menu-card">
        <Row>
          {menus.map((menu, index) => {
            return (
              <Col span="6" key={index}>
                <Menu title={menu.title} icon={menu.icon} url={menu.url} />
              </Col>
            );
          })}
        </Row>
      </View>
    </View>
  );
}

export default Index;
