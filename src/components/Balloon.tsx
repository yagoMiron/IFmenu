import React from "react";
import { View, Text, StyleSheet, ViewStyle } from "react-native";

type BalloonProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  style?: ViewStyle;
};

export default function Balloon({
  children,
  direction = "left",
  backgroundColor = "#fff",
  textColor = "#000",
  borderColor = "#ddd",
  style,
}: BalloonProps) {
  return (
    <View
      style={{
        ...styles.container,
        alignItems: direction === "right" ? "flex-end" : "flex-start",
      }}
    >
      <View style={[styles.bubble, { backgroundColor }, style]}>
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>

        {direction === "left" ? (
          <>
            {/* Triângulo de borda (cinza) */}
            <View
              style={[
                styles.triangleBorderLeft,
                { borderRightColor: borderColor },
              ]}
            />
            {/* Triângulo principal (preenchido) */}
            <View
              style={[
                styles.triangleLeft,
                { borderRightColor: backgroundColor },
              ]}
            />
          </>
        ) : (
          <>
            <View
              style={[
                styles.triangleBorderRight,
                { borderLeftColor: borderColor },
              ]}
            />
            <View
              style={[
                styles.triangleRight,
                { borderLeftColor: backgroundColor },
              ]}
            />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    width: "100%",
    marginVertical: 8,
  },
  bubble: {
    maxWidth: "80%",
    padding: 10,
    borderRadius: 12,
    position: "relative",
    borderWidth: 2,
    borderColor: "#ccc", // borda cinza
  },
  text: {
    fontSize: 16,
  },

  // === ESQUERDA ===
  triangleBorderLeft: {
    position: "absolute",
    left: -13,
    top: 12,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderRightWidth: 13,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#ccc", // borda cinza
  },
  triangleLeft: {
    position: "absolute",
    left: -9,
    top: 13,
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderRightWidth: 11,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },

  // === DIREITA ===
  triangleBorderRight: {
    position: "absolute",
    right: -15,
    top: 12,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderLeftWidth: 13,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderLeftColor: "#ccc",
  },
  triangleRight: {
    position: "absolute",
    right: -11,
    top: 13,
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderBottomWidth: 7,
    borderLeftWidth: 11,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
});
