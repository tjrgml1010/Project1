import StopWatch from './components/Stopwatch';
import { StyleSheet, View } from 'react-native';


export default function App() {

  const [cnt, setCnt] = useState(0);



  return (
    <View style={styles.container}>
        <StopWatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
