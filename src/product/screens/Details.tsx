import React from "react";

import {Product} from "../types";
import mock from "../mock";
import { Box, Container, Stack,StackDivider,Text,Divider, color, Link } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {

  return (
    <Stack>
      <Box >
        <Container maxWidth="container.xl" paddingX={2} paddingY={2}>
          <Stack spacing={4}>
            <Stack direction="row" paddingY={0}>
               <Text fontSize="sm" fontWeight={500}>También puede interesarte:</Text>
            </Stack>
            <Stack colorScheme="red" direction="row" fontSize="sm" fontWeight={400} divider={<StackDivider/>} spacing={1}>
              <Text>Volver al listado</Text>
              <Link>Juegos y Juguetes</Link>
              <Link>Peluches</Link>
              <Link>Stitch</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>

  );
  /*{ <div>{`<DetailsScreen /> para ${product.title}`}</div>; }*/
};

export default DetailsScreen;
