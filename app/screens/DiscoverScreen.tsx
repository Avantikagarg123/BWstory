import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, StatusBar, View, ViewStyle, Image } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, Screen, Text } from "app/components"
import { useFonts } from "expo-font"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
const image = require("../../assets/images/Discover/image.jpg")
const image1 = require("../../assets/images/Discover/image1.jpg")
const image2 = require("../../assets/images/Discover/image2.jpg")
const image3 = require("../../assets/images/Discover/image3.jpg")
const image4 = require("../../assets/images/Discover/image4.jpg")
interface DiscoverScreenProps extends AppStackScreenProps<"Discover"> {}

export const DiscoverScreen: FC<DiscoverScreenProps> = observer(function DiscoverScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Bold": require("../../assets/fonts/RobotoSlab-VariableFont_wght.ttf"), // Corrected path
  })

  if (!fontsLoaded) {
    return null // Prevent rendering until fonts are loaded
  }

  const DATA = [
    {
      id: "1",
      name: "Imran Ansari",
      address: "Jharkhand",
      follow: "Follow",
      image: image,
      date: "Mar 15, 2025",
      entertainment: "Entertainment",
      view: "8",
      testing: "Testing",
      total_address: "Jharkhand, India",
    },
    {
      id: "2",
      name: "Parth Singh",
      address: "Jharkhand",
      follow: "Follow",
      image: image1,
      date: "Mar 15, 2025",
      entertainment: "Entertainment",
      view: "8",
      testing: "Testing",
      total_address: "Jharkhand, India",
    },
    {
      id: "3",
      name: "Sandeep Kumar",
      address: "Jharkhand",
      follow: "Follow",
      image: image2,
      date: "Mar 15, 2025",
      entertainment: "Entertainment",
      view: "8",
      testing: "Testing",
      total_address: "Jharkhand, India",
    },
    {
      id: "4",
      name: "Akash Kumar",
      address: "Jharkhand",
      follow: "Follow",
      image: image3,
      date: "Mar 15, 2025",
      entertainment: "Entertainment",
      view: "8",
      testing: "Testing",
      total_address: "Jharkhand, India",
    },
    {
      id: "5",
      name: "Lalit Kumar",
      address: "Jharkhand",
      follow: "Follow",
      image: image4,
      date: "Mar 15, 2025",
      entertainment: "Entertainment",
      view: "8",
      testing: "Testing",
      total_address: "Jharkhand, India",
    },
  ]
  interface ItemProps {
    name: string
    address: string
    follow: string
    image: any
    date: string
    entertainment: string
    view: string
    testing: string
    total_address: string
  }

  const Item: FC<ItemProps> = ({
    name,
    address,
    follow,
    image,
    date,
    testing,
    entertainment,
    view,
    total_address
  }) => (
    <View style={{ backgroundColor: "white", margin: 10, borderRadius: 10 }}>
      <View style={{ flexDirection: "row", margin: 10, justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Icon icon="user" style={{ height: 50, width: 50 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>{name}</Text>
            <Text>{address}</Text>
          </View>
        </View>
        <View
          style={{
            width: 100,
            height: 50,
            borderColor: "#0B2B26",
            borderWidth: 1.5,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 25,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{follow}</Text>
        </View>
      </View>
      <Image source={image} style={{ width: "100%", height: 400 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
        <Text>{date}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text>{entertainment} | </Text>
          <Text>{view} Views</Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>{testing}</Text>
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Icon icon="like" style={{ height: 30, width: 30 }} />
        <Icon icon="comment" style={{ height: 30, width: 30 ,marginLeft:20}} />
        <Icon icon="share" style={{ height: 30, width: 30,marginLeft:20 }} />
      </View>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <Icon icon="send" style={{height:30,width:30}}/>
        <Text>{total_address}</Text>
      </View>
    </View>
  )
  return (
    <Screen style={$root}>
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
      <View
        style={{
          height: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#BDBDBD",
          alignItems: "center",
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "gray",
          elevation: 10,
        }}
      >
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
          <Text style={{ color: "white" }}>All</Text>
        </View>
        <View
          style={{
            borderColor: "#0B2B26",
            borderWidth: 1,
            backgroundColor: "white",
            width: 150,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            elevation: 10,
          }}
        >
          <Text style={{ color: "#0B2B26" }}>Entertainment</Text>
        </View>
        <View
          style={{
            borderColor: "#0B2B26",
            borderWidth: 1,
            backgroundColor: "white",
            width: 100,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 40,
            elevation: 10,
          }}
        >
          <Text style={{ color: "#0B2B26" }}>Lifestyle</Text>
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            name={item.name}
            address={item.address}
            follow={item.follow}
            image={item.image}
            date={item.date}
            testing={item.testing}
            entertainment={item.entertainment}
            view={item.view}
            total_address={item.total_address}
          />
        )}
        keyExtractor={(item) => item.id}
        style={{ marginBottom:160}}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
