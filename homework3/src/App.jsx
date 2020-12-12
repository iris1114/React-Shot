import Header from "./component/Header";
import Card from "./component/Card";
import LandingBtn from "./component/LandingBtn";
import Info from "./component/Info";
import InfoList from "./component/InfoList";
import Button from "./component/Btn";
import "./index.css";
import "./common.css";
import Footer from "./component/Footer";


const App = () => {

  const heroData = {
    text: "We design and develop award-winning applications",
    imgSrc: "../../image/hero.png",
  }

  const aboutData = {
    title: "About Us",
    text: "Oursky is a team of talented developers, designers, data scientists, product and project managers and QA engineers working from Hong Kong, London, and Taipei. Using cutting-edge technologies, we are an end-to-end digital product, web, and mobile app development consultancy whose creations have garnered millions of downloads and awards from the Apple App Store and Asia Smart Apps Awards.",
    imgSrc: "../../image/about.png",
  }

  const cardsData = [
    {
      id:"card1",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: "../../image/card1.png",
      text: "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    },
    {
      id:"card2",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: "../../image/card2.png",
      text: "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    },
    {
      id:"card3",
      title: "Case Study",
      subtitle: "ASOS",
      bgImage: "../../image/card3.gif",
      text: "We helped ASOS create a browsing experience where 4,000 new fashion items are published weekly."
    }
  ]

  const serviceInfo = {
    title: "Digital transformation powered by ingenuity",
    texts:[
      "We don’t just build apps. Oursky creates digital experiences that help our partners succeed in today’s fast-paced business landscape.",
      "We work with founders in creating their blueprints for success — from minimum viable products (MVPs) to interactive prototypes. Oursky uses an iterative approach to help startups launch faster, scale quickly, and deliver great user experience.",
      "Oursky partners with enterprises to fast-track their digital transformation, helping them adopt and transition to cloud-native technologies and microservices."
    ],
    link:"More on our core services",
  }

  const serviceList = {
    title: "Core Services",
    lists: [
      {
        title: "Digital Product Development",
        text: "Scalable machine learning and artificial intelligence (AI) solutions",
        img: "../../image/service1.svg"
      },
      {
        title: "Digital Product Development",
        text: "Scalable machine learning and artificial intelligence (AI) solutions",
        img: "../../image/service2.svg"
      },
      {
        title: "Digital Product Development",
        text: "Scalable machine learning and artificial intelligence (AI) solutions",
        img: "../../image/service3.png"
      },
      {
        title: "Digital Product Development",
        text: "Scalable machine learning and artificial intelligence (AI) solutions",
        img: "../../image/service4.svg"
      }
    ] 
}

const productInfo = {
  title: "We’re your low-code solution for your next IT project.",
  texts:[
    "We develop various open-source solutions that can be used by developers and organizations around the world to solve problems.",
    "At the heart of Oursky is the art of software engineering: translating expertise and ideas into opportunities.",
  ]
}

const productList = {
  title: "Product",
  lists: [
    {
      title: "Digital Product Development",
      text: "Scalable machine learning and artificial intelligence (AI) solutions",
      img: "../../image/product1.png"
    },
    {
      title: "Digital Product Development",
      text: "Scalable machine learning and artificial intelligence (AI) solutions",
      img: "../../image/product2.png"
    },
    {
      title: "Digital Product Development",
      text: "Scalable machine learning and artificial intelligence (AI) solutions",
      img: "../../image/product3.png"
    }
  ] 
}

const partners = [
  {img: "../../image/partner_logo1.svg"},
  {img: "../../image/partner_logo2.svg"},
  {img: "../../image/partner_logo3.svg"},
  {img: "../../image/partner_logo4.svg"},
  {img: "../../image/partner_logo5.svg"},
  {img: "../../image/partner_logo6.svg"},
  {img: "../../image/partner_logo7.svg"},
  {img: "../../image/partner_logo8.svg"},
]


  return (
    <>
      <Header></Header>
      <main>

        <section className="hero-section">
          <div className="container d-flex flex-column align-items-center justify-content-center">

              <div className="row align-items-center">
                  <div className="col-md-6 col-12">
                    <h1 className="f-lg-6xl text-white text-center f-4xl mb-5">{heroData.text}</h1>
                  </div>
                  <div className="col-md-6 col-12">
                    <img className="img-fluid" src={heroData.imgSrc} alt="img"/>
                  </div>
              </div>
              <div className="row lading-btn">
                <div className="col-12 bg-white p-3 rounded shadow-lg">
                  <LandingBtn text="Learn more about how we digitally transform businesses by creating amazing digital products."></LandingBtn>
                </div>
              </div>
          </div>
        </section>

        <section className="about-section">
              <div className="container">
                  <div className="row">
                      <div className="col col-md-7 col-12">
                          <h2 className="f-lg-m mb-3">{aboutData.title}</h2>
                          <p className="f-lg-2xl f-xl">{aboutData.text}</p>
                      </div>
                      <div className="col col-md-5 col-12 mx-auto text-center">
                          <img className="bg-info w-75 img-fluid" src={aboutData.imgSrc} alt="img"/>
                      </div>
                  </div>
              </div>
          </section>


          <section className="cards-section">
            <div className="container">
              <div className="cards d-flex justify-content-between mb-5">
                <div className="row mx-auto">
                {
                  cardsData.map((card) => {
                    return(
                      <div className="col-12 col-md-6 col-lg-4 mb-4" key={card.id}>
                        <Card card={card}></Card>
                      </div>
                    );
                  })
                }
                </div>
              </div>
              <div className="pl-3 pl-md-5">
                <LandingBtn  text="Explore more of our work"></LandingBtn>
              </div>
            </div>
          </section>

          <section className="service-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 mb-5">
                  <Info info={serviceInfo}></Info>
                </div>
                <div className="col-12 col-md-6">
                  <InfoList serviceList={serviceList}></InfoList>
                </div>
              </div>
            </div>
          </section>

          <section className="product-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-6 order-2 order-md-1">
                <InfoList serviceList={productList}></InfoList>
                </div>
                <div className="col-12 col-md-6 order-1 order-md-2  mb-5">
                   <Info info={productInfo}></Info>
                </div>
              </div>
            </div>
          </section>

          <section className="paertner-section">
            <div className="container">
              <h2 className="f-lg-3xl text-center mb-5">We help companies around the world bring their ideas to life.</h2>
              <div className="row d-flex align-items-center">
                {
                  partners.map((partner, index)=>{
                    return(
                      <div className="col-6 col-md-3 text-center" key={index}>
                        <img className="w-75 img-fluid" src={partner.img} alt="img"/>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          </section>

          <section className="contact-section">
            <div className="container text-center">
              <h2 className="f-lg-3xl mb-3">We build award-winning digital products.</h2>
              <p className="f-lg-2xl mb-5">Oursky can help you create one.</p>
              <Button text="Let’s talk!"></Button>
            </div>
          </section>
      </main>
      <Footer></Footer>
  
    </>
  );
}

export default App;

