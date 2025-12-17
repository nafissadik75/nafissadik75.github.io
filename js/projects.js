const projects = [
  {
    title: "Loop Line Delivery",
    description: "A conveyor-loop puzzle prototype made for GMTK.",
    url: "/projects/loop-line-delivery.html"
  },
  {
    title: "Garden Defense",
    description: "A garden-themed tower defense experiment.",
    url: "/projects/garden-defense.html"
  }
];

const grid = document.getElementById("project-grid");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h4>${p.title}</h4>
    <p>${p.description}</p>
    <a href="${p.url}">View project →</a>
  `;
  grid.appendChild(card);
});
