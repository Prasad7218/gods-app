import React from "react";
import { Button } from "@rneui/themed";
import { Card, Icon } from "@rneui/themed";
import { Image } from "react-native";
import { View } from "react-native";
import { Redirect, router } from "expo-router";
import { Text } from "react-native";
const ReligionCard = ({
  cardType,
  cardTitle,
  cardText,
  buttonRedirectUrl,
  cardButtonColor,
  cardImage,
}) => {
  const redirectToUrl = () => {
    router.replace(buttonRedirectUrl);
  };
  return (
    <Card>
      <Card.Title h4={true}>{cardTitle}</Card.Title>
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
          style={
            cardType == "maingod"
              ? { width: 250, height: 250 }
              : { width: 150, height: 150 }
          }
          source={
            cardImage == "../assets/hindu.jpg"
              ? require("../assets/hindu.jpg")
              : cardImage == "../assets/muslim.jpeg"
              ? require("../assets/muslim.jpeg")
              : cardImage == "../assets/shikh.jpg"
              ? require("../assets/shikh.jpg")
              : cardImage == "../assets/cristian.jpg"
              ? require("../assets/cristian.jpg")
              : cardImage == "vishnu"
              ? require("../assets/hindugods/vishnu.jpg")
              : cardImage == "brahma"
              ? require("../assets/hindugods/brahma.jpg")
              : cardImage == "mahesh"
              ? require("../assets/hindugods/mahesh.jpg")
              : cardImage == "matsya"
              ? require("../assets/vishnu_avatars/matsya.jpg")
              : cardImage == "kurma"
              ? require("../assets/vishnu_avatars/kurma.jpg")
              : cardImage == "varah"
              ? require("../assets/vishnu_avatars/varah.jpg")
              : cardImage == "narsingha"
              ? require("../assets/vishnu_avatars/narsinha.jpg")
              : cardImage == "parshuram"
              ? require("../assets/vishnu_avatars/parshuram.jpg")
              : cardImage == "ram"
              ? require("../assets/vishnu_avatars/shriram.jpg")
              : cardImage == "krishna"
              ? require("../assets/vishnu_avatars/krishna.jpg")
              : cardImage == "buddha"
              ? require("../assets/vishnu_avatars/buddha.jpg")
              : cardImage == "kalki"
              ? require("../assets/vishnu_avatars/kalki.jpg")
              : cardImage == "vaman"
              ? require("../assets/vishnu_avatars/vaman.jpg")
              : require("../assets/favicon.png")
          }
        />
      </View>
      <Text style={{ marginBottom: 10, marginTop: 10 }}>{cardText}</Text>
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
        onPress={redirectToUrl}
        title="Explore"
      />
    </Card>
  );
};

export default ReligionCard;
