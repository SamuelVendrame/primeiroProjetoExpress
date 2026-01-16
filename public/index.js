
document.getElementById("botao").addEventListener("click", async () => {
  const res = await fetch("/users")
  const text = await res.text();
  
  const div = document.createElement("div");

  div.textContent = text;

  document.getElementById("container").appendChild(div);
});