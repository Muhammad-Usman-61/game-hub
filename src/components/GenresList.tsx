import { HStack, Img, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/img-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading &&
        skeletons1.map((skeleton) => <GenreSkeleton key={skeleton} />)}
      <List>
        {data.map((genre) => (
          <ListItem
            key={genre.id}
            padding="5px 5px"
            backgroundColor={genre.id === selectedGenre?.id ? "#ffffff29" : ""}
            _hover={{ backgroundColor: "#ffffff29" }}
            borderRadius={8}
            onClick={() => onSelectGenre(genre)}
            cursor="pointer"
          >
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
