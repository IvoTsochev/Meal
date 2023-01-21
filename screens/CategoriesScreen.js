import { StyleSheet, View, FlatList } from "react-native";
import { CatetgoryGridTile } from "../components/CatetgoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CatetgoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

export const CategoriesScreen = () => {
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
