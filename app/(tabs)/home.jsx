import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";

import { images } from "../../constants";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-3">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back to
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Incognitos
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-20 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.container}>
              <Image
                source={images.profile}
                style={styles.image}
              />
            </View>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3 text-center">
                Legal Resources{'\n'}
              </Text>
              <Text className="text-xs font-pregular text-gray-100 mb-3">
                1. RAINN (Rape, Abuse & Incest National Network){'\n\n'}Website: {' '}
                <Text className="text-xs text-blue">https://www.rainn.org</Text>
                {'\n\n\n'}
                
                2. National Women's Law Center (NWLC){'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://nwlc.org</Text>
                {'\n\n\n'}
                
                3. American Civil Liberties Union (ACLU){'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://www.aclu.org</Text>
                {'\n\n\n'}
                
                4. Equal Employment Opportunity Commission (EEOC){'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://www.eeoc.gov</Text>
              </Text>
            </View>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3 text-center">
                List of NGOs{'\n'}
              </Text>
              <Text className="text-xs font-pregular text-gray-100 mb-3">
                1. Hollaback!{'\n\n'}Website: {' '}
                <Text className="text-xs text-blue">https://www.ihollaback.org</Text>
                {'\n\n\n'}
                
                2. Stop Street Harassment{'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">http://www.stopstreetharassment.org</Text>
                {'\n\n\n'}
                
                3. End Violence Against Women International (EVAWI){'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://www.evawintl.org</Text>
                {'\n\n\n'}
                
                4. Women's Aid{'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://www.womensaid.org.uk</Text>
                {'\n\n\n'}
                
                5. Safe Horizon{'\n\n'}Website:{' '}
                <Text className="text-xs text-blue">https://www.safehorizon.org</Text>
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center',      // Centers the content horizontally
  },
  image: {
    width: 100,  // Adjust image width
    height: 120, // Adjust image height
  },
});
export default Home;
