import React from "react";

import { Button } from "@rneui/themed";
import { Card, Icon } from "@rneui/themed";
import { Image } from "react-native";
import { View } from "react-native";

const ReligionCard = ({
  cardTitle,
  buttonRedirectUrl,
  cardButtonColor,
  cardImage,
}) => {
  return (
    <Card>
      <Card.Title>{cardTitle}</Card.Title>
      <Card.Divider />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "5px",
          borderRadius: "25px",
        }}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={
            cardImage == "../assets/hindu.jpg"
              ? require("../assets/hindu.jpg")
              : cardImage == "../assets/muslim.jpeg"
              ? require("../assets/muslim.jpeg")
              : cardImage == "../assets/shikh.jpg"
              ? require("../assets/shikh.jpg")
              : cardImage == "../assets/cristian.jpg"
              ? require("../assets/cristian.jpg")
              : require("../assets/cristian.jpg")
          }
        />
      </View>
      <Button
        icon={
          <Icon name="code" color="#FFFFFF" iconStyle={{ marginRight: 10 }} />
        }
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
          marginTop: 5,
          backgroundColor: cardButtonColor,
        }}
        title="Explore"
      />
    </Card>
  );
};

export default ReligionCard;
