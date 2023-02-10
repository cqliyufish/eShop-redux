import { Image, Body, DirectoryItemContainer } from "./directoryItem.style";
import { Link } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <Image imageUrl={imageUrl} />
      <Body to={"shop/" + title}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
