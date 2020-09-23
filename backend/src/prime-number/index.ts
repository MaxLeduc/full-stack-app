const { Router } = require("express");
const router = Router();

const getTopNews = async (req, res) => {
  const data = {
    data: [
      {
        id: 1,
      },
      {
        id: 2,
      },
    ],
  };

  res.send(data);
};

router.get("/", getTopNews);

module.exports = router;
