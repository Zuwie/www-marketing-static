import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function OptionalSlider({images, width = 640, height = 640, className = ''}) {
  return (
    <>
      {images.length === 1 ? (
        <Image
          src={images[0]}
          alt=""
          width={640}
          height={640}
          className={className}
        />
      ) : (
        <Splide className={className}>
          {images.map((image) => (
            <SplideSlide key={image}>
              <Image
                src={image}
                alt=""
                width={width}
                height={height}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </>
  )
}