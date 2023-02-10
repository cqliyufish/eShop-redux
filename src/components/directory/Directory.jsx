import React from "react";
import { Container } from "./directory.style";
import DirectoryItem from "components/directoryItem/DirectoryItem.";
export default function Directory({ categories }) {
  return (
    <Container>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </Container>
  );
}
