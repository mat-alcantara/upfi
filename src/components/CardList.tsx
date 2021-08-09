import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onClose, onOpen } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (imgUrl: string): void => {
    setSelectedImg(imgUrl);

    onOpen();
  };

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid column={3} spacing={40}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      {selectedImg && (
        <ModalViewImage
          isOpen={isOpen}
          imgUrl={selectedImg}
          onClose={onClose}
        />
      )}
    </>
  );
}
