export default function manifest() {
  return {
    name: "Vedista",
    short_name: "Vedista",
    description:
      "Vedista — търговия със зърнени култури, маслодайни семена и фуражни суровини.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ee",
    theme_color: "#10281e",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
