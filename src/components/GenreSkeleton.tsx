import { List, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List paddingY="5px" borderRadius="{8}">
      <Skeleton height="32px"></Skeleton>
    </List>
  );
};

export default GenreSkeleton;
