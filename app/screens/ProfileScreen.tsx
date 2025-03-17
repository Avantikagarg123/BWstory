import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StatusBar, ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, Screen, Text } from "app/components"
import { useFonts } from "expo-font"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ProfileScreenProps extends AppStackScreenProps<"Profile"> {}

export const ProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/RobotoSlab-VariableFont_wght.ttf"), // Corrected path
  })

  if (!fontsLoaded) {
    return null // Prevent rendering until fonts are loaded
  }
  return (
    <Screen style={$root} preset="scroll">
      <StatusBar backgroundColor="#051F20" barStyle="light-content" />
      <Header
        title="BWstory"
        titleStyle={{ color: "white", fontSize: 25, fontFamily: "Roboto-Bold" }}
        leftIcon="menu"
        leftIconColor="white"
        rightIcon="search"
        rightIconColor="white"
        backgroundColor="#0B2B26"
      />
      <View style={{ flex: 1, margin: 20 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 80,
                width: 80,
                backgroundColor: "#D3D3D3",
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon icon="user1" style={{ height: 50, width: 50 }} />
            </View>
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>Avantika Garg</Text>

              <View style={{ flexDirection: "row" }}>
                <Icon icon="send" style={{ height: 30, width: 30 }} />
                <Text style={{ fontSize: 15 }}>Address</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Icon icon="bag" style={{ height: 30, width: 30 }} />
                <Text style={{ fontSize: 15 }}>Anonymous</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#0B2B26",
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              elevation: 10,
            }}
          >
            <Text style={{ color: "white" }}>Edit</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30 ,alignItems:"center"}}>
          <View
            style={{
              backgroundColor: "#0B2B26",
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              elevation: 10,
            }}
          >
            <Text style={{ color: "white" }}>Trash</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text>0{"\n"}Feed</Text>
            <Icon icon="line" style={{ height: 40, width: 40 }} />
            <Text>0{"\n"}Followers</Text>
            <Icon icon="line" style={{ height: 40, width: 40 }} />
            <Text>0{"\n"}Folowing</Text>
          </View>
        </View>

        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>About me</Text>
            <Text style={{ fontSize: 15 }}>Anonymous</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: "#0B2B26",
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              elevation: 10,
              marginRight:10
            }}
          >
            <Text style={{ color: "white" }}>Drafts</Text>
          </View>
          <View
            style={{
              backgroundColor: "#0B2B26",
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              elevation: 10,
            }}
          >
            <Text style={{ color: "white" }}>History</Text>
          </View>
          </View>
          
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" ,marginTop:20}}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>No Post</Text>
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
