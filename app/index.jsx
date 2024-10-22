import {  Image, ScrollView, Text, View } from 'react-native';
import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';



export default function App(){
  const {isLoading, isLoggedIn} = useGlobalContext();

  if(!isLoading && isLoggedIn) return <Redirect href="/home"/>
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height : '100%'}}>
        <View className="w-full justify-center items-center min-h-[80vh] px-5">
          <Image
            source={images.logo}
            className="w-[250px] h-[70px] mt-5"
            resizeMode="contain"
          />

          <Image 
            source={images.cards}
            className="max-w-[370px] w-full h-[270px]"
            resizeMode='contain'
          />

          <View className="relative mt-2">
            <Text className="text-3xl text-white font-bold text-center">Speak up {'\n'}
              <Text className="text-3xl text-white font-bold text-center">Stay Anonymous</Text>
            </Text>
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-4 text-center">Empowering voices through anonymity: Step into a world of safer communities with Incognitos.</Text>

          <CustomButton 
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-6"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#222831' style='light'/>
    </SafeAreaView>
  );
}
