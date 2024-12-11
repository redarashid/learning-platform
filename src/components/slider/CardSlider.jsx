import Slider from "react-slick";
import "./CardSlider.css";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // عدد الكروت الظاهرة
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, title: "ريادة الأعمال", img: "/public/images/managers.jpg" },
    { id: 2, title: "مقدمة في ريادة الأعمال", img: "/public/images/Agile-Project-Management.jpg" },
    { id: 3, title: "خطوات في السوق", img: "/public/images/Arab_bank.png" },
    { id: 4, title: "إدارة المشاريع باستخدام الأجايل", img: "/public/images/AR.png" },
  ];

  return (
    <div className="slider-container" style={{direction: "column"}}>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="card-content">
              <img src={card.img} alt={card.title}  />
              <h3>{card.title}</h3>
              <button className="button">تخصص</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
