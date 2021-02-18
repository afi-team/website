module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-189765364-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-remove-serviceworker",
    "gatsby-plugin-no-sourcemaps"
  ],
};
