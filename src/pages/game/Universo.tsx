import React from 'react';
import { 
  Box, 
  VStack, 
  Heading, 
  Grid, 
  GridItem, 
  Button, 
  useColorModeValue 
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Universo: React.FC = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const cardBgColor = useColorModeValue('white', 'gray.700');

  const menuItems = [
    { name: 'Missões', icon: '🚀' },
    { name: 'Recursos', icon: '⚡' },
    { name: 'Tecnologias', icon: '🔬' },
    { name: 'Naves', icon: '🛸' },
    { name: 'Planetas', icon: '🌍' },
    { name: 'Configurações', icon: '⚙️' }
  ];

  return (
    <Box 
      bg={bgColor} 
      minHeight="100vh" 
      p={8}
    >
      <VStack spacing={8} align="stretch">
        <Heading 
          textAlign="center" 
          size="2xl" 
          color="blue.500"
        >
          Central de Controle do Universo
        </Heading>

        <Grid 
          templateColumns="repeat(3, 1fr)" 
          gap={6}
        >
          {menuItems.map((item, index) => (
            <GridItem key={item.name}>
              <MotionBox
                bg={cardBgColor}
                borderRadius="xl"
                p={6}
                textAlign="center"
                boxShadow="md"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Box fontSize="4xl" mb={4}>
                  {item.icon}
                </Box>
                <Button 
                  variant="solid" 
                  colorScheme="blue" 
                  size="lg" 
                  width="full"
                >
                  {item.name}
                </Button>
              </MotionBox>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Universo;
