import dayjs from "dayjs";

module.exports = (req, res) => {
    const now = dayjs().format();
    res.status(200).send(`[node] Now: ${now}`);
};
