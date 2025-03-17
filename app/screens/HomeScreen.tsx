import React from "react";
import { observer } from "mobx-react-lite";
import BottomTabNavigator from "app/navigators/BottomTabNavigator";

export const HomeScreen = observer(() => {
  return <BottomTabNavigator />;
});
