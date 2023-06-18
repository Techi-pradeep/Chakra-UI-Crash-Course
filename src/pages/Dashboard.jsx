import { Box, SimpleGrid } from "@chakra-ui/react";

export default function Dashboard() {

  return (
    <SimpleGrid p="10px" columns={4} spacing={10} minChildWidth={250}>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
      <Box bg="white" height="200px" border="1px solid"></Box>
    </SimpleGrid>
  )
}

/*Grid vs SimpleGrid
A Grid component allows you to create a complex grid layout with multiple rows and columns. You can customize the sizing of each grid item and adjust the gap between them. This component does not have a default responsive behavior.

On the other hand, a SimpleGrid is a simpler version of the Grid and provides a default responsive behavior. It automatically adjusts the number of columns based on the screen size, making it easier to create responsive grid layouts. Additionally, the SimpleGrid component provides some basic styling out of the box, such as padding and spacing between grid items.

*/
