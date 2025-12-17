const posts = [
  {
    title: "Loop Line Delivery — Postmortem",
    date: "2025-01",
    url: "2025-01-loop-line-postmortem.html"
  }
];

const list = document.getElementById("blog-list");
posts.forEach(p => {
  const li = document.createElement("li");
  li.innerHTML = `<a href="${p.url}">${p.title}</a> (${p.date})`;
  list.appendChild(li);
});
