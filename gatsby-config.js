module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-189765364-1",
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet"
  ],
};
