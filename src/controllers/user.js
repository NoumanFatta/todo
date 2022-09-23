import * as jose from "jose";

const secret = new TextEncoder().encode("NoumanAminFatta");

export const loginUser = async (user) => {
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

  const token = await new jose.SignJWT({
    id: userFound.id,
    email: userFound.email,
  })
    .setProtectedHeader({ alg: "HS256" })
    .sign(secret);
  success = true;
  return { token, success };
};
