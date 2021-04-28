import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Login template | Gabriel Costa"
        description="Template de login feito por Gabriel Costa"
        openGraph={{
          type: "website",
          locale: "pt-BR",
          url: "https://www.gabrielcribeiro.com/",
          site_name: "Gabriel Costa",
          images: [
            {
              url: "/login.jpg",
              width: 289,
              height: 383,
              alt: "Login template | Gabriel Costa",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
