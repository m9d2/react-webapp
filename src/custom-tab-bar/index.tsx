import { Tabbar } from "@nutui/nutui-react-taro";
import { User, Home } from "@nutui/icons-react-taro";
import Taro from "@tarojs/taro";
import "./index.scss";

const Index = () => {
  const handleOnSwitch = (index: number) => {
    switch (index) {
      case 0:
        Taro.switchTab({
          url: "/pages/index/index",
        });
        break;
      case 1:
        Taro.switchTab({
          url: "/pages/my/index",
        });
        break;
    }
  };

  return (
    <Tabbar
      safeArea
      inactiveColor="#7d7e80"
      activeColor="#1989fa"
      onSwitch={handleOnSwitch}
    >
      <Tabbar.Item title="首页" icon={<Home />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  );
};

export default Index;
