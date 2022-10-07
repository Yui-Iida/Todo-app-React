import { Button } from '@chakra-ui/react';

const MyButton = props => {
  return (
    <>
      <Button
        size="sm"
        m="3"
        borderRadius="8px"
        color="white"
        type="submit"
        {...props}
      ></Button>
    </>
  );
};

export default MyButton;
