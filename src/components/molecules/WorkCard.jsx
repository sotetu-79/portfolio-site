import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";

function WorkCard({ src, title }) {
  return (
    <Box
      sx={{
        pb: "6",
        px: "1",
        borderRadius: "md",
      }}
    >
      <Image
        src={src}
        alt="Sample Image"
        transition="0.3s"
        cursor="pointer"
        sx={{ w: "26rem", _hover: { filter: "brightness(1.2)" } }}
      />
      <Text variant="primary" mt="3">
        {title}
      </Text>
    </Box>
  );
}

export default WorkCard;
