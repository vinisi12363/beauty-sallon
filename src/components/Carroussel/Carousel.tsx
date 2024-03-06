import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/banner.png";
import image2 from "../../assets/img2.png";
import { Subtitle } from "../Subtitle/Subtitle";
import { CarouselContainer, CarouselBox, CarouselBoxContainer } from "./style";
import { useState } from "react";

export default function CarouselSection() {
  const  [windowSize] = useState(window.innerWidth)
  return (
    <CarouselContainer>
      <CarouselBoxContainer>
        <CarouselBox>
          <Carousel 
              autoPlay 
              width={windowSize >= 415 ? "50%" : "65%"} 
              interval={5000} 
              infiniteLoop 
              stopOnHover
              showArrows={true}
              showThumbs={false}
            >
            <div className="testBox">
              <img alt="" src={image1} />
              
              <Subtitle
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam citudin. Cras consequat neque non velit molestie tempor. Nunc eget luctus nisl, ut ornare augue. Aenean auctor ligula at velit efficitur consectetur. Etiam dui justo, aliquet ac arcu id, ultricies mattis tortor. In non rutrum eros."
                textColor="black"
                textSize="15px"
              ></Subtitle>
            </div>
            <div>
              <img alt="" src={image1} />
              <Subtitle
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam citudin. Cras consequat neque non velit molestie tempor. Nunc eget luctus nisl, ut ornare augue. Aenean auctor ligula at velit efficitur consectetur. Etiam dui justo, aliquet ac arcu id, ultricies mattis tortor. In non rutrum eros."
                textColor="black"
                textSize="15px"
              ></Subtitle>
            </div>
            <div>
              <img alt="" src={image2} />
              <Subtitle
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam citudin. Cras consequat neque non velit molestie tempor. Nunc eget luctus nisl, ut ornare augue. Aenean auctor ligula at velit efficitur consectetur. Etiam dui justo, aliquet ac arcu id, ultricies mattis tortor. In non rutrum eros."
                textColor="black"
                textSize="15px"
              ></Subtitle>
            </div>
            <div>
              <img alt="" src={image2} />
              <p className="legend">Legend 4</p>
            </div>
          </Carousel>
        </CarouselBox>
      </CarouselBoxContainer>
    </CarouselContainer>
  );
}
