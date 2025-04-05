import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { Ionicons } from "@expo/vector-icons"

import MapPage from "../screens/mapPage"
import TimelinePage from "../screens/timelinePage"

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = "map"

            if (route.name === "マップ") {
              iconName = focused ? "map" : "map-outline"
            } else if (route.name === "タイムライン") {
              iconName = focused ? "list" : "list-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#4CAF50",
          tabBarInactiveTintColor: "gray",
          headerShown: true,
        })}
      >
        <Tab.Screen name="マップ" component={MapPage} />
        <Tab.Screen name="タイムライン" component={TimelinePage} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

