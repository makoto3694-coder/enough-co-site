const contactForm = document.querySelector("#contact-form");

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const company = String(data.get("company") || "").trim();
  const email = String(data.get("email") || "").trim();
  const tel = String(data.get("tel") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !message) {
    alert("お名前、メールアドレス、お問い合わせ内容を入力してください。");
    return;
  }

  const subject = `【Enough & Co.】お問い合わせ: ${name}`;
  const body = [
    "Enough & Co. へのお問い合わせ",
    "",
    `お名前: ${name}`,
    `会社名: ${company}`,
    `メールアドレス: ${email}`,
    `電話番号: ${tel}`,
    "",
    "お問い合わせ内容:",
    message,
  ].join("\n");

  const mailto = new URL("mailto:enough.co.jp@gmail.com");
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", body);
  window.location.href = mailto.toString();
});
