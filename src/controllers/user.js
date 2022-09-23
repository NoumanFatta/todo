import * as jose from "jose";

const secret = new TextEncoder().encode("NoumanAminFatta");

export const loginUser = async (user) => {
  //   const jwt = await new jose.SignJWT({ foo: "bar" })
  //     .setProtectedHeader({ alg: "HS256" })
  //     .sign(secret);
  //     console.log(jwt)
  //   const { payload } = await jose.jwtVerify(
  //     "eyJhbGciOiJIUzI1NiJ9.eyJmb28iOiJiYXIifQ.iPFY1ibZc5dTBzRD46ma-Du0avf20nYKtQQsgnyf7ZM",
  //     secret
  //   );

  //   console.log(payload);
  const { email, password } = user;
  let success = false;
  const userData = JSON.parse(localStorage.getItem("users"));
  const userFound = userData.find((user) => user.email === email);
  if (!userFound) {
    return { msg: "Please enter correct details", success };
  }
  if (userFound.password !== password) {
    return { msg: "Please enter correct details", success };
  }

  const token = await new jose.SignJWT({ id: userFound.id })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
  success = true;
  return { token, success };
};
