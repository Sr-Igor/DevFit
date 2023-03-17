import { View, Text, Button } from 'react-native';

const StackDefault = (props: {
  navigation: { navigate: (arg0: string, arg1: { name: string }) => void };
}) => {
  const handleNavigate = () => {
    props.navigation.navigate('TabDefault', { name: 'TabDefault' });
  };

  return (
    <View>
      <Text>StackDefault</Text>

      <Button title="Go to TabDefault" onPress={handleNavigate} />
    </View>
  );
};

export default StackDefault;
