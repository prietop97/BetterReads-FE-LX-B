import React from "react";

import { Flex, Text, Button } from "@chakra-ui/core";

import { SearchBar, Header } from "../../common";

function DashboardContainer() {
  return (
    <>
      <Header />

      <SearchBar labelId="21" name="theSearch" placeholder="Find your book" />

      <Flex justify="space-between" m="1rem 4rem">
        <Flex width="60%" direction="column">
          <Text
            m=".5rem 1rem"
            color="#4e4c4a"
            fontSize="1.25rem"
            fontWeight="bold"
            lineHeight="1.875rem"
            pb="1rem"
            borderBottom="1.5px solid#d9d9d980"
          >
            In progress
          </Text>
          <Text
            m=".5rem 1rem"
            color="#4e4c4a"
            fontSize="1.25rem"
            fontWeight="bold"
            lineHeight="1.875rem"
            pb="1rem"
            borderBottom="1.5px solid#d9d9d980"
          >
            To be read
          </Text>
          <Text
            m=".5rem 1rem"
            color="#4e4c4a"
            fontSize="1.25rem"
            fontWeight="bold"
            lineHeight="1.875rem"
          >
            Finished
          </Text>
        </Flex>
        <Flex m="1rem 4rem" direction="column" w="13rem">
          <Text
            fontSize="1.5rem"
            color="#547862"
            lineHeight="1.875rem"
            fontWeight="bold"
            fontFamily="Frank Ruhl Libre"
          >
            My Shelves
          </Text>
          <Text m="0.5rem 0" color="#4e4c4a" lineHeight="1.375rem">
            Create shelves and add books to your custom shelf.
          </Text>
          <Button
            fontWeight="500"
            bg="none"
            width="10rem"
            fontSize="1rem"
            color="#d24719"
            border="1px solid #d24719"
            lineHeight="1.375rem"
            cursor="pointer"
            _hover="none"
          >
            Create new shelf
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default DashboardContainer;