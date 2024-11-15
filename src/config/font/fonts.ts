import {
  Inter,
  Montserrat_Alternates,
  UnifrakturMaguntia,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const titleFont = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export const goticaFont = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: "400",
});
