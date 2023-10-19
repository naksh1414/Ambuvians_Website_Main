import React, { useState, useEffect } from "react";
import "./MeetOurTeam.css";

const slideWidth = 30;

const _items = [
  {
    player: {
      title: "Dr. Rahat Ullah Khan",
      desc: "Former Director",
      image: "./images/About-images/Rahat.jpeg",
      linkedin: "https://www.linkedin.com/in/rahatullahkhan",
    },
  },
  {
    player: {
      title: "Yash Kumar Goel",
      desc: "Founder & CEO (ED)",
      image: "./images/About-images/yash2.jpeg",
      linkedin: "https://www.linkedin.com/in/yash-kumar-goel-b60ba2221",
    },
  },
  {
    player: {
      title: "Vishesh",
      desc: "Web Tech Lead",
      image: "./images/About-images/vishesh.jpeg",
      linkedin: "https://www.linkedin.com/in/vishesh-maurya-48b1b8257",
    },
  },
  // {
  //   player: {
  //     title: "Vidushi Singhal",
  //     desc: "CPO ( Chief Product Officer )",
  //     image: "./images/About-images/Vidushi1.png",
  //     linkedin: "https://www.linkedin.com/in/vidushi-singhal-ba3980226",
  //   },
  // },
  {
    player: {
      title: "Nakshatra Manglik",
      desc: "Strategic Team Core Member",
      image: "/images/About-images/nakshatra.jpeg",
      linkedin: "https://www.linkedin.com/in/nakshatra-manglik",
    },
  },
  {
    player: {
      title: "Vishnu Kumar Varma",
      desc: "Web Tech Core Member",
      image: "/images/About-images/vishnu.jpeg",
      linkedin:
        "https://www.linkedin.com/in/%E1%B4%A0%C9%AA%EA%9C%B1%CA%9C%C9%B4%E1%B4%9C-%E1%B4%8B%E1%B4%9C%E1%B4%8D%E1%B4%80%CA%80-%E1%B4%A0%E1%B4%87%CA%80%E1%B4%8D%E1%B4%80-217814220",
    },
  },
  //   {
  //     player: {
  //       title: "Vibhav Bhartiya",
  //       desc: "Web Tech Core Member",
  //       image: "/images/About-images/vibhav.jpeg",
  //       linkedin: "https://www.linkedin.com/in/nakshatra-manglik",
  //     },
  //   },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    },
    player: _items[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx }) => {
  const item = createItem(pos, idx, activeIdx);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const itemElement = document.querySelector(`.carousel__slide-item-${idx}`);
    itemElement.addEventListener("mouseenter", handleMouseEnter);
    itemElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      itemElement.removeEventListener("mouseenter", handleMouseEnter);
      itemElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [idx]);

  return (
    <li
      className={`carousel__slide-item carousel__slide-item-${idx}`}
      style={item.styles}
    >
      <div className="carousel__slide-item-img-link">
        <img
          src={item.player.image}
          alt={item.player.title}
          className="team-img"
        />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
        <a
          className="linkedin-link"
          href={item.player.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/About-images/linkedin.webp" alt="LinkedIn" />
        </a>
      </div>
    </li>
  );
};

const keys = Array.from(Array(_items.length).keys());

const MeetOurTeam = () => {
  const [items, setItems] = useState(keys);
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  const handleDotClick = (idx) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);

  // Function to handle automatic slide change
  const autoNextSlide = () => {
    nextClick();
  };

  useEffect(() => {
    // Set an interval to automatically change slides every 5 seconds
    const intervalId = setInterval(autoNextSlide, 5000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h6 className="meet-our-team">Meet Our Team</h6>
      <div className="carousel__wrap">
        <div className="carousel__inner">
          <button
            className="carousel__btn carousel__btn--prev"
            onClick={() => prevClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--left" />
          </button>
          <div className="carousel__container gap">
            <ul className="carousel__slide-list ">
              {items.map((pos, i) => (
                <CarouselSlideItem
                  key={i}
                  idx={i}
                  pos={pos}
                  activeIdx={activeIdx}
                />
              ))}
            </ul>
          </div>
          <button
            className="carousel__btn carousel__btn--next"
            onClick={() => nextClick()}
          >
            <i className="carousel__btn-arrow carousel__btn-arrow--right" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MeetOurTeam;
