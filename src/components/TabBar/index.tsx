import * as S from './style';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { iconGenerate } from './actions';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <S.Container>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];

        const handleTabPress = () => {
          navigation.navigate(route.name);
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        if (route.name === 'WorkoutStack') {
          return (
            <S.MiddleTab
              key={index}
              onPress={handleTabPress}
              isFocused={isFocused}
              underlayColor="none"
            >
              <S.TabMiddleIcon source={iconGenerate(route.name)} />
            </S.MiddleTab>
          );
        } else {
          return (
            <S.Tab key={index} underlayColor="transparent" onPress={handleTabPress}>
              <>
                <S.TabIcon source={iconGenerate(route.name)} />
                <S.Label isFocused={isFocused}>{label as string}</S.Label>
              </>
            </S.Tab>
          );
        }
      })}
    </S.Container>
  );
};

export default TabBar;
