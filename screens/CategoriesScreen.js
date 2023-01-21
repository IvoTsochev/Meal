import { StyleSheet, View, FlatList } from "react-native";
import { CatetgoryGridTile } from "../components/CatetgoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

export const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CatetgoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
