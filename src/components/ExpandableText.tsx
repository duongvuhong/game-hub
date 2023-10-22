import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
  maxChar?: number;
}

const ExpandableText = ({ children, maxChar = 200 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= maxChar) return <Text>{children}</Text>;

  const summary = children.slice(0, maxChar) + '...';

  return (
    <Text>
      {expanded ? children : summary}
      <Button
        fontWeight='bold'
        colorScheme='yellow'
        size='xs'
        marginLeft={2}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
