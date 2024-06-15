const errorHandlers = (err, _, res, __) => {
  console.log(err)
  res.status(err.status);
  res.send(err);
};

module.exports = [errorHandlers];