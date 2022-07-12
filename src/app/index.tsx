import React from "react";
import {Container, Stack, Box,Image,Input, Icon, StackDivider,Text} from "@chakra-ui/react";
import {AiOutlineSearch} from 'react-icons/ai';
import {FiPrinter} from 'react-icons/fi';
import {IoLocationOutline} from 'react-icons/io5';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import  logo  from '../assets/logo.png';
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" padding={2}>
        <Container maxWidth="container.xl" paddingX={2}>
            <Stack spacing={3}>
                <Stack direction="row" justifyContent="space-between">
                    <Stack direction="row" spacing={12} flex={1}>
                        <Image src={logo} objectFit="contain"/>
                            <Stack direction="row"
                                   divider={<StackDivider/>}
                                   backgroundColor="white"
                                   padding={2}
                                   boxShadow="md"
                                   borderRadius="sm"
                                   alignItems="center"
                                   width ="100%"
                                   maxWidth={600}>
                                  <Input variant="unstyled" paddingX={4}/>
                                  <Icon as={AiOutlineSearch} width={5} height={5} color="gray.400"></Icon>
                             </Stack>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={3} color="blackAlpha.700">
                             <Icon as={FiPrinter} width={7} height={7}></Icon>
                             <Text fontSize="md" fontWeight={400}>Compra tu Point y Qr a $189</Text>
                      </Stack>
                  </Stack>
                      <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Stack direction="row" spacing={12}  alignItems="baseline">
                                <Stack direction="row" spacing={0}>
                                    <Stack direction="row" alignItems="center">
                                      <Icon as={IoLocationOutline} width={6} height={6}/>
                                    </Stack>
                                   <Stack spacing={0}>
                                     <Text lineHeight="none" fontSize="xs" color="blackAlpha.500"> Ingresa tu</Text>
                                     <Text lineHeight="none" fontSize="sm">código postal</Text>
                                   </Stack>
                                 </Stack>
                                     <Stack direction="row" spacing={5} color="blackAlpha.600" fontSize="sm">
                                       <Text>Categorías</Text>
                                       <Text>Ofertas</Text>
                                       <Text>Historial</Text>
                                       <Text>Supermercado</Text>
                                       <Text>Moda</Text>
                                       <Text>Vender</Text>
                                       <Text>Ayuda</Text>
                                     </Stack>
                          </Stack>
                          <Stack direction="row" alignItems="baseline" color="blackAlpha.800" spacing={3} fontSize="sm" fontWeight={400}>
                             <Text>Crea tu cuenta</Text>
                             <Text>Ingresa</Text>
                             <Text>Mis compras</Text>
                             <Icon as={AiOutlineShoppingCart} width={5} height={5}/>
                          </Stack>
                      </Stack>
             </Stack>
        </Container>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default App;
