import React from "react";
import { ScrollView, Text, View } from "react-native";
import ReligionCard from "../../components/ReligionCard";
import { Button } from "@rneui/themed";
import { Redirect, router } from "expo-router";

const shivaavatar = () => {
  const redirectToHome = () => {
    router.replace("/");
  };
  const redirectBack = () => {
    router.replace("/hindugods/mainhindugods");
  };
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <Button color="secondary" onPress={redirectBack}>
          Back
        </Button>
        <Button color="secondary" onPress={redirectToHome}>
          Home
        </Button>
      </View>
      <ScrollView>
        <ReligionCard
          cardType="maingod"
          cardTitle="वीरभद्र अवतार (Virbhadra Avatar)"
          cardText="भगवान भोलेनाथ को यज्ञ में ना बुलाने की वजह से जब सती माता ने प्रजापति दक्ष के द्वारा आयोजित यज्ञ कुंड में अपने प्राणों की आहुति दे दी थी तो भगवान भोलेनाथ अत्यधिक क्रोधित हुए और उन्होंने वीरभद्र अवतार को प्रकट किया। "
          cardImage="virbhadra"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle="पिप्पलाद अवतार"
          cardText="भोलेनाथ के दूसरे अवतार पिप्पलाद हैं। इन्होंने एक बार जब देवताओं से पूछा कि ऐसी क्या वजह थी कि मेरे पिताजी दधीचि मुझे जन्म से पहले ही छोड़कर मृत्यु लोग चले गए तो देवताओं ने बताया कि इसके पीछे शनि ग्रह की दृष्टि जिम्मेदार है। इस पर पिप्पलाद काफी क्रोधित हुए और उन्होंने शनि को नछत्र मंडल से गिरने का श्राप दे दिया।"
          cardImage="pippalad"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle="भैरव अवतार"
          cardText="भैरव अवतार भी भगवान भोलेनाथ का ही है। एक बार ब्रह्मा भगवान और विष्णु भगवान आपस में एक दूसरे को श्रेष्ठ बता रहे थे तभी वहां से एक पुरुष की आकृति दिखाई दी। इस पर ब्रह्मा जी ने कहा कि चंद्रशेखर तुम मेरी शरण में चले जाओ।

यह बातें सुनकर के भगवान भोलेनाथ अत्यंत क्रोधित हुए और उन्होंने उस पुरुष आकृति से कहा कि काल की तरह शोभित होने की वजह से आप साक्षात्कार कालराज हैं और भीषण होने की वजह से आप भैरव हैं।"
          cardImage="bhairava"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle="शरभावतार"
          cardText="भगवान शिव के द्वारा जो छठा अवतार लिया गया था उसे शरभावतार कहा गया। इस अवतार में भगवान भोलेनाथ का आधा स्वरूप हिरण और आधा स्वरूप शरभ पक्षी था। 

जब हिरण्यकशिपु राक्षस का वध करने के पश्चात भी नरसिंह देवता का क्रोध शांत नहीं हुआ तो देवताओं के आव्हान पर नरसिंह देवता का क्रोध शांत करने के लिए भगवान भोलेनाथ ने इस अवतार को ग्रहण किया था और इसी अवतार में वह नरसिंह भगवान के पास पहुंचे और उनकी स्तुति की परंतु फिर भी नरसिंह भगवान शांत नहीं हुए। "
          cardImage="sharbhavtar"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle="ऋषि दुर्वासा"
          cardText="पुत्र प्राप्ति के लिए सती अनुसूया के पति ऋषि अत्री ने एक पर्वत पर कठोर तपस्या की और उनकी तपस्या से खुश होकर के ब्रह्मा, विष्णु और महेश तीनों उनके आश्रम पर पहुंचे और तीनों ने कहा कि हमारे अंग से ही तुम्हारे तीन पुत्र पैदा होंगे।

जो हर जगह विख्यात होंगे और तुम्हारा सम्मान करेंगे और समय गुजरने के पश्चात ब्रह्मा जी के अंश से चंद्रमा, विष्णु जी के अंश से दत्तात्रेय और भोलेनाथ के अंश से मुनिवर दुर्वासा पैदा हुए। इस प्रकार भोलेनाथ जी का आठवां अवतार ऋषि दुर्वासा हुए जो अपने आप में एक प्रकांड ज्ञानी और सिद्धि धारक थे।"
          cardImage="hrishi"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle=" हनुमान"
          cardText="देवता और दानवो के बीच जब विष्णु जी के मोहनी रूप के द्वारा अमृत बांटा जा रहा था तो भगवान भोलेनाथ मोहिनी रूप को देख करके अपने आप को रोक ना सके और उनका वीर्य निकल गया और सप्त ऋषियों ने भोलेनाथ जी के वीर्य को कुछ पत्ते पर इकट्ठा कर लिया।

और समय आने पर इसी वीर्य के द्वारा वानर राज केसरी की पत्नी अंजनी के कान के माध्यम से गर्भ में स्थापित किया गया और उसी से महा पराक्रमी, महा बलशाली और प्रबल राम भक्त भगवान श्री हनुमान जी का जन्म हुआ जिन्हें 1000 से भी अधिक हाथियों का बल प्राप्त था और इन्हें भूत-प्रेत का काल माना जाता है।"
          cardImage="hanuman"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
        <ReligionCard
          cardType="maingod"
          cardTitle="यक्ष अवतार"
          cardText="देवताओं के अभिमान को तोड़ने के लिए भोलेनाथ जी के द्वारा यक्ष अवतार लिया गया था क्योंकि जब समुद्र मंथन हो रहा था तब उसमें से निकले हुए जहर को भोलेनाथ जी ने अपने गले में ग्रहण करके रोक लिया था और उसके पश्चात जो अमृत कलश निकला।

 उसमें से अमृत पान करके सभी देवता तो अमर हो गए और उन्हें अभिमान हो गया कि वह सबसे शक्तिशाली है और इसी अभिमान को खत्म करने के लिए शंकर भगवान के द्वारा यक्ष का रूप धारण किया गया।

और देवताओं के आगे एक तिनका रखा गया और उसे जलाने के लिए, काटने के लिए, उड़ाने के लिए या फिर डुबोने के लिए कहा गया। 

हालांकि कोई भी देवता ऐसा नहीं कर सका। तब एक आकाशवाणी हुई जिसमें यह कहा गया कि भगवान भोलेनाथ ही सबसे बलशाली हैं और तब सभी देवताओं ने भोलेनाथ जी से क्षमा याचना की।"
          cardImage="yakshya"
          cardButtonColor="#FFA500"
          buttonRedirectUrl=""
        />
      </ScrollView>
    </>
  );
};

export default shivaavatar;
