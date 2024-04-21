// import {createContext} from "react"
// import { createTheme } from '@mui/material/styles'

// export const ThemeContext = createContext();

// export const ThemeContextProvider({children}) => {

//     const customTheme = createTheme({
//         palette: {
//             primary: {
//                 main: '#504908'
//             }
//         }
//     });

//     return(
//         <ThemeContext.Provider value={customTheme}>
//             {children}
//         </ThemeContext.Provider>
//     )
// }


// copilot

// // ThemeContext.jsx

// import React, { createContext } from 'react';
// import { createTheme } from '@mui/material/styles';

// // Create a context for your custom theme
// const ThemeContext = createContext();

// // Define your custom theme
// const customTheme = createTheme({
//     palette: {
//         primary: {
//             main: '#504908'
//         }
//     }
// });

// // Create a provider component to wrap your app with the custom theme
// const ThemeProvider = ({ children }) => {
//     return (
//         <ThemeContext.Provider value={customTheme}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

// export { ThemeContext, ThemeProvider };
