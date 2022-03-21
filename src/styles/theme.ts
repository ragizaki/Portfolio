// const theme: ThemeInterface = {
//     dark:
//     primary: '#1e96fc',
//     white: '#fff',
//     black: '#000',
//     hover: '#3da5d9',
// };

const genericThemes = {
    primary: '#1e96fc',
    white: '#fff',
    black: '#000',
    hover: '#3da5d9',
};

export const lightTheme: Theme = {
    body: '#FFF',
    text: '#363537',
    toggleBorder: '#363537',
    background: '#363537',
    ...genericThemes,
};
export const darkTheme: Theme = {
    body: '#363537',
    text: '#f8edeb',
    toggleBorder: '#6B8096',
    background: '#999',
    ...genericThemes,
};

export default interface Theme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
    primary: string;
    black: string;
    hover: string;
    white: string;
}
