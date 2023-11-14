import React from "react";
import { View, StyleSheet } from "react-native";

type CardProps = {
  bg?: string;
} & View["props"];

const Card = ({ bg, children }: CardProps) => {
  return (
    <View testID="card" style={[styles.card, { backgroundColor: bg }]}>
      {children}
    </View>
  );
};
export { Card };

const styles = StyleSheet.create({
  card: {
    padding: 20,
    elevation: 10,
    shadowOpacity: 1,
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: "#000",
    backgroundColor: "#d3d3d3",
    shadowOffset: { width: 5, height: 5 },
  },
});
