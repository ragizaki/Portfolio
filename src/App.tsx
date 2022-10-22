import { useState, useCallback, useEffect } from "react";
import GlobalStyles, { Container } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { Track } from "./lib/types";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import ProjectList from "./components/Projects/ProjectList";

// Spotify API
import { getTopTracks } from "./lib/spotify";

const THEME: { key: string; light: string; dark: string } = {
  key: "theme",
  light: "light",
  dark: "dark",
};

const App = (): JSX.Element => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [recentTrack, setRecentTrack] = useState<Track | null>(null);

  useEffect(() => {
    if (localStorage) {
      const userTheme: string | null = localStorage.getItem(THEME.key);
      if (userTheme && userTheme === THEME.dark) {
        setIsDark(true);
      }
    }
  }, []);

  useEffect(() => {
    (async () => {
      const res = await getTopTracks();
      const { items } = await res.json();
      const track = items[0].track;
      setRecentTrack({
        name: track.name,
        artist: track.artists[0].name,
        image: track.album.images[0].url,
        href: track.external_urls.spotify,
      });
    })();
  }, []);

  window.addEventListener("beforeunload", () => {
    localStorage.setItem(THEME.key, isDark ? THEME.dark : THEME.light);
  });

  const toggleTheme = useCallback(() => {
    setIsDark((prevTheme) => !prevTheme);
  }, [setIsDark]);

  return (
    // @ts-ignore
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      {
        // @ts-ignore
        <GlobalStyles />
      }
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      <Container>
        <Home track={recentTrack} />
        <Experience />
        <ProjectList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
