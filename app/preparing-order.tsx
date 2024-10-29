import React, { useEffect } from 'react';
import * as Progress from 'react-native-progress';
import Animated, { SlideInDown, SlideInLeft, SlideInRight } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

const PreparingOrderScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/delivery');
    }, 4000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.Image
        entering={SlideInRight.springify().damping(13)}
        source={require('../assets/images/orderLoading.gif')}
        style={styles.loadingImage}
      />
      <Animated.Text
        entering={SlideInDown.duration(500)}
        style={styles.loadingText}
      >
        Waiting for Restaurant to accept your order
      </Animated.Text>
      <Animated.View entering={SlideInLeft.duration(800)}>
        <Progress.CircleSnail size={60} color="white" thickness={6} />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCBB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    height: 384, 
    width: 384,  
  },
  loadingText: {
    fontSize: 18,
    marginVertical: 40, 
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PreparingOrderScreen;
