import { HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreSkeleton from "./GenreSkeleton";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();
  const skeletons1 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons1.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Img
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
