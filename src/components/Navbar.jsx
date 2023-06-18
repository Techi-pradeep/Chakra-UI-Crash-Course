import { Flex, Heading, Box, Text, Button, Spacer, HStack } from "@chakra-ui/react"

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />

      <HStack spacing="20px"> 
        <Box bg="gray.200" p="10px">M</Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>

    // <Flex bg="gray.200" justify="space-between" wrap="wrap" gap={2}>
    //   <Box w="150px" h="50px" bg="red">1</Box>
    //   <Box w="150px" h="50px" bg="blue">2</Box>
    //   <Box w="150px" flexGrow="1" h="50px" bg="green">3</Box>
    //   <Box w="150px" flexGrow="2" h="50px" bg="yellow">4</Box>
    // </Flex>
  )
}

/*In the provided context, `HStack` is a Chakra UI component used to horizontally stack its child elements, with a specified spacing between the elements.

`as` is a prop that can be passed to the `Flex` component to indicate a different HTML element to render instead. In this case, the `as` prop is set to "nav" to indicate that the `Flex` element should be rendered as a `<nav>` element.

`ColorScheme` is a prop that can be passed to the `Button` component. It is used to set the background color and text color of the button based on a pre-defined color scheme provided by Chakra UI, such as "purple" in this case. 
spacing is a prop that is used with the HStack component to define the space between its child elements horizontally.

gap is a prop that is used with the Flex component to define the space between its child elements without growing the elements themselves. It is used to create gaps between items in a grid-like layout, where each item has a fixed width and height.
*/
