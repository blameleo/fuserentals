const axios = require("axios");

const getUserToken = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const content = { email, password };
    // console.log(content);

    const response = await axios.post(
      "https://voucherapi.demos.classicinformatics.net/api/POS/PaymentPinVerification",
      content,
      {
        headers: {
          "Content-Length": JSON.stringify(content).length.toString(),
          Host: "voucherapi.demos.classicinformatics.net",
          "User-Agent": "Your User Agent String",
          Accept: "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, compress, deflate, br",
          Connection: "keep-alive",
        },
      }
    );

    // Check if the request was successful (status code 200)
    // res.status(200).json(response.data);
    if (response.data.result.token) {
      req.userToken = response.data.result.token;
      next();
    } else {
      throw new Error("Invalid credentials");
    }
    // console.log(response.data.result.token);
  } catch (error) {
    // Handle errors and send an error response
    // console.error(error);
    res.status(500).json({ error: "user not found" });
  }
};

const makePayment = async (req, res) => {
  try {
    const { password, amount } = req.body;

    const content = {
      merchantUserId: "9906e153-4368-4dd0-9442-a56ddfdad734",
      pin: password,
      productId: "TEST1010",
      amount,
    };
    const authToken = req.userToken;
    console.log(authToken);
    console.log(content);
    const response = await axios.post(
      "https://voucherapi.demos.classicinformatics.net/api/Transactions/voucherpayment",
      content,
      {
        headers: {
          "Content-Length": JSON.stringify(content).length.toString(),
          Host: "voucherapi.demos.classicinformatics.net",
          "User-Agent": "Your User Agent String",
          Accept: "application/json, text/plain, */*",
          "Accept-Encoding": "gzip, compress, deflate, br",
          Connection: "keep-alive",
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

module.exports = {
  getUserToken,
  makePayment,
};
