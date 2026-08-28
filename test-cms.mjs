
const apiUrl = "https://dev-vision-api.aptoro.ai/api/v1/cms";
const email = "admin@example.com";
const password = "admin123@321";

async function test() {
  console.log("1. Logging in...");
  const loginRes = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  
  const loginData = await loginRes.json();
  if (!loginData.data?.token) {
    console.error("Login failed:", loginData);
    return;
  }
  const token = loginData.data.token;
  console.log("Login success! Token acquired.");

  console.log("\n2. Testing Contact Form...");
  const contactRes = await fetch(`${apiUrl}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      first_name: "Test",
      last_name: "User",
      email: "test@vision148.com",
      phone: "123456789",
      message: "This is a test contact message from the build script.",
      subject: "Contact Form Submission",
      source: "vision148",
    }),
  });
  const contactData = await contactRes.json();
  console.log("Contact Response:", contactData);

  console.log("\n3. Testing Apply Form...");
  const applyRes = await fetch(`${apiUrl}/contacts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      first_name: "Apply",
      last_name: "Test",
      email: "apply@vision148.com",
      phone: "987654321",
      message: "Intro: Developer Test\n\nMessage: This is a test application.",
      subject: "Register Your Interest",
      source: "vision148",
    }),
  });
  const applyData = await applyRes.json();
  console.log("Apply Response:", applyData);
}

test();
