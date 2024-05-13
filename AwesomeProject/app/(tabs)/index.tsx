import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '../../components/HelloWave';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedText } from '../../components/ThemedText';
import { ThemedView } from '../../components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'white', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/doodleBase-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Doodle Base for Zuri</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Find Your Doodle</ThemedText>
        <ThemedText>
          Scroll <ThemedText type="defaultSemiBold">Zuri's Lineage MAKE THIS LARGER WHEN SCROLLED OVER AND BRING UP ALL DOODLE NAMES SCROLL</ThemedText> to find your Doodle's name.
          {/* <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'subscribe', android: 'cmd + m' })}
          </ThemedText>{' '}
          to subscribe. */}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Confirm</ThemedText>
        <ThemedText type="defaultSemiBold">
Select and Click to confirm Doodle Lineage.MAKE THIS LARGER WHEN SCROLLED OVER AND SHOW SELECTED DOODLE NAME WITH A CLICK TO CONFIRM</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Subscribe to Doodle Base</ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">form here for Owner Name</ThemedText>
          <ThemedText type="defaultSemiBold">form here for Owner Email</ThemedText>
          <ThemedText type="defaultSemiBold">form here for password</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">click button here for already subscribed</ThemedText>. 
          Have a subscribe button that takes you to the Home Page
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "115%",
    width: "120%",
    top: 5,
    left:-30,
    position: 'absolute',
  },
});
