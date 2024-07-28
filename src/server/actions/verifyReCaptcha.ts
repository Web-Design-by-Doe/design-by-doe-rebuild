"use server";

export default async function verifyReCaptcha(token: string) {
  const captchaSecretKey = process.env.GRECAPTCHA_SECRETKEY!;

  const googleParams = `secret=${captchaSecretKey}&response=${token}`;

  let response;

  try {
    response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?${googleParams}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => res.json());

    console.log("😀", response);
  } catch (error) {
    console.error("🤯", error);
    return {
      status: 500,
      body: {
        success: false,
        message: "reCaptcha failed",
      },
    };
  } finally {
    console.log("🤔", response);
    if (response && response.success && response.score > 0.5) {
      return {
        status: 200,
        body: {
          success: true,
          message: "reCaptcha passed",
        },
      };
    } else {
      return {
        status: 200,
        body: {
          success: false,
          message: "reCaptcha failed",
        },
      };
    }
  }
}
