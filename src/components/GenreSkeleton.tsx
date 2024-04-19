import { List, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <List paddingY="5px">
      <Skeleton height="42px"></Skeleton>
    </List>
  );
};

export default GenreSkeleton;
