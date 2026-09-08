import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={20} color="#2f2b2c"></Ionicons>
        </View>
      </View>
      {/* Header */}

      {/* Body */}
      <View style={styles.content}>
        <View style={styles.contentInitial}>
          <Text style={styles.contentTitle}>Bom dia!</Text>
          <Text style={styles.contentSubtitle}>Que tal um café hoje?</Text>
        </View>

        <View style={styles.featured}>
          <Image 
            source={require('./assets/coffee.jpg')}
            style={styles.image}>
          </Image>
          <Text>Cappucino Especial</Text>
          <Text>Cremoso e delicioso</Text>
          <Text>R$ 12,90</Text>
        </View>
      </View>
      {/* Body */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  
  //Header
  },
  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#9B9B9B",
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center"
  },
  //Header

  //Body
  content: {
    paddingHorizontal: 24,
  },
  contentInitial: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contentTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: "#2F2D2C"
  },
  contentSubtitle: {
    fontSize: 16,
    color: "#9B9B9B",
    marginTop: 8
  },

  //Card
  featured: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    shadowColor: "#000000",
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation: 4
  },
  image: {
    width: "100%",
    height: 188,
    borderRadius: 16,
    marginBottom: 16
  }
  //Body
})

