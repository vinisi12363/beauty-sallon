import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/banner.png";
import image2 from "../../assets/img2.png";
import { Subtitle } from "../Subtitle/Subtitle";
import { CarouselContainer, CarouselBox } from "./style";

export default function CarouselSection() {
  return (
    <CarouselContainer>
      <CarouselBox>
        <Carousel autoPlay width={"40%"}  interval={5000} infiniteLoop>
          <div>
            <img alt="" src={image1} />

            <Subtitle
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut tortor facilisis, gravida nunc nec, tempor diam. Proin pretium quam sed posuere ultricies. Fusce semper rhoncus justo, eget elementum purus pellentesque non. Proin dictum ultrices nisi non vulputate. Etiam efficitur tincidunt sollicitudin. Cras consequat neque non velit molestie tempor. Nunc eget luctus nisl, ut ornare augue. Aenean auctor ligula at velit efficitur consectetur. Etiam dui justo, aliquet ac arcu id, ultricies mattis tortor. In non rutrum eros."
              textColor="black"
              textSize="25px"
            ></Subtitle>
          </div>
          <div>
            <img alt="" src={image1} />
            <p className="legend">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut
              tortor facilisis, gravida nunc nec, tempor diam. Proin pretium
              quam sed posuere ultricies. Fusce semper rhoncus justo, eget
              elementum purus pellentesque non. Proin dictum ultrices nisi non
              vulputate. Etiam efficitur tincidunt sollicitudin. Cras consequat
              neque non velit molestie tempor. Nunc eget luctus nisl, ut ornare
              augue. Aenean auctor ligula at velit efficitur consectetur. Etiam
              dui justo, aliquet ac arcu id, ultricies mattis tortor. In non
              rutrum eros.
            </p>
          </div>
          <div>
            <img alt="" src={image2} />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img alt="" src={image2} />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
      </CarouselBox>
    </CarouselContainer>
  );
}
