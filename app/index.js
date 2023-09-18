import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/Header";
import ReligionCard from "../components/ReligionCard";
import { ScrollView } from "react-native";

{
  /* <Text>Hello</Text>
        <Link href="/about">Aboutttttttttttttt</Link>
        <Link href="/user/bacon">View user</Link> */
}

{
  /* <Header /> */
}
export default function Page() {
  return (
    <>
      <SafeAreaProvider>
        <ScrollView>
          <ReligionCard
            cardTitle="सनातन/हिंदू धर्म (Hinduism)"
            cardImage="../assets/hindu.jpg"
            cardButtonColor="#FFA500"
            buttonRedirectUrl="/hindugods/mainhindugods"
          />
          <ReligionCard
            cardTitle="बौद्ध धर्म (Budhism)"
            cardImage="../assets/shikh.jpg"
            cardButtonColor="#0000FF"
            buttonRedirectUrl=""
          />
          <ReligionCard
            cardTitle="इस्लाम धर्म (Islamism)"
            cardImage="../assets/muslim.jpeg"
            cardButtonColor="#008000"
            buttonRedirectUrl=""
          />
          <ReligionCard
            cardTitle="ईसाई धर्म (Christianity)"
            cardImage="../assets/cristian.jpg"
            cardButtonColor="#000000"
            buttonRedirectUrl=""
          />
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
}
