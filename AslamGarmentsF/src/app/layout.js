// import Navbar from "./Components/Navbar"
// import FootBar from "./Components/footer"
import "./globals.css"
import 'swiper/css';
// import "./assets/js/main.js"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Home Page</title>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-straight/css/uicons-regular-straight.css"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com" 
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Lexend:wght@100..900&display=swap"
        />

      </head>
      <body>
        {/* <Navbar page={"Home"}/> */}
        {children}
        {/* <FootBar/> */}
      </body>
    </html>
  )
}
