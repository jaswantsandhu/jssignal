const { signal, effect } = window.JSSignal;
const count = signal(10);
const name = signal("John");

effect(() => {
  document.getElementById("countDisplay").textContent = count.get();
}, [count]);

effect(() => {
  document.getElementById("nameDisplay").textContent = name.get();
}, [name]);

document.getElementById("incrementCount").addEventListener("click", () => {
  count.set(count.get() + 1);
});

document.getElementById("changeName").addEventListener("click", () => {
  const newName = name.get() === "John" ? "Jane" : "John";
  name.set(newName);
});
