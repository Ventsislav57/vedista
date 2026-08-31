export default function manifest() {
  return {
    name: "Vedista",
    short_name: "Vedista",
    description:
      "Vedista — търговия със зърнени култури, маслодайни семена и фуражни суровини.",
    start_url: "/",
    display: "standalone",
    background_color: "#fbf7ee",
    theme_color: "#0f2438",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
