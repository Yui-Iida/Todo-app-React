import { ChakraProvider, Button, ButtonGroup, Stack } from '@chakra-ui/react';
import { useTheme } from '../context/ThemeContext';

const ThemeButton = () => {
  //   const [value, setValue] = useState('Pop');
  const [theme, setTheme] = useTheme();
  const THEMES = ['pop', 'pastel', 'retro'];

  const changeTheme = e => {
    setTheme(e.target.value);
    console.log(theme);
  };

  return (
    <ChakraProvider>
      <Stack spacing={1} pt={2} pr={4} direction="row" justify="end">
        {THEMES.map(_theme => {
          return (
            <>
              <Button
                bg="gray.300"
                size="xs"
                color="white"
                value={_theme}
                // checked={theme === _theme}
                onClick={changeTheme}
              >
                {_theme}
              </Button>
            </>
          );
        })}
      </Stack>
    </ChakraProvider>
  );
};

export default ThemeButton;
