import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Platform,
} from "react-native";

export const MealItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.select({
      ios: "visible",
      android: "hidden",
    }),
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
