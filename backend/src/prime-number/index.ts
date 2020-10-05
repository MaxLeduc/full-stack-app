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
      {
        id: 3,
      },
      {
        id: 4,
      },
    ],
  };

  res.send(data);
};

router.get("/", getTopNews);

module.exports = router;
