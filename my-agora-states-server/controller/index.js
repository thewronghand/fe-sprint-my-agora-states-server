const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if (Object.keys(req.query).length === 0) {
      return res.status(200).send(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let discussion = discussionsData.find((item) => item.id === Number(id)); //id값이 문자열 형태로 수신되므로 숫자로 바꿔주어야 한다.
    if (discussion) {
      return res.status(200).json(discussion);
    }
    return res.status(404).send("Not Found");
  },
};

module.exports = {
  discussionsController,
};
