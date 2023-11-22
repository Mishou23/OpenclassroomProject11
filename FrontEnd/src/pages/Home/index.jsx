import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import image1 from "../../assets/images/icon-chat.png";
import image2 from "../../assets/images/icon-money.png";
import image3 from "../../assets/images/icon-security.png";
import "./index.css";

function Home() {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          imageSrc={image1}
          imageAlt={"Chat Icon"}
          title={"You are our #1 priority"}
          text={
            "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          }
        />
        <Feature
          imageSrc={image2}
          imageAlt={"Money Icon"}
          title={"More savings means higher rates"}
          text={
            "The more you save with us, the higher your interest rate will be!"
          }
        />
        <Feature
          imageSrc={image3}
          imageAlt={"Security Icon"}
          title={"Security you can trust"}
          text={
            "We use top of the line encryption to make sure your data and money is always safe."
          }
        />
      </section>
    </main>
  );
}

export default Home;
