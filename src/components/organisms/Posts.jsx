import "react-multi-carousel/lib/styles.css";
import sample from "../../assets/sample.png";
import sample2 from "../../assets/sample2.png";
import { Box, Text, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import PostCard from "../molecules/PostCard";

const Posts = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <VStack w="100%" justify="center">
        <Box borderBottom="2px solid" borderColor="accent.500" px="10">
          <Text variant="headline">Posts</Text>
        </Box>
      </VStack>
      <Box mt="16" w="68vw" mx="auto">
        <Box>
          <Box
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          ></Box>
        </Box>
      </Box>

      <Box w="90%" mx="auto" align="center" pl="2">
        <Slider {...settings}>
          <PostCard src={sample} title={"記事1"} />
          <PostCard src={sample2} title={"記事2"} />
          <PostCard src={sample} title={"記事3"} />
          <PostCard src={sample2} title={"記事4"} />
          <PostCard src={sample} title={"記事5"} />
          <PostCard src={sample2} title={"記事6"} />
        </Slider>
      </Box>
    </>
  );
};

export default Posts;
