import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
    <View className="justify-center items-center">
      <Text className="text-gray-100 text-3xl">Home</Text>
    </View>
    </SafeAreaView>
  )
}

export default Home