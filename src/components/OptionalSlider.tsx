import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function OptionalSlider({images, width = 640, height = 640, className = ''}) {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {images.length === 1 ? (
        <Image
          src={images[0]}
          alt=""
          width={width}
          height={height}
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