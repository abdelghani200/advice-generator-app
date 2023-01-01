const adviceBtn = document.querySelector(".advice-btn");
const adviceId = document.querySelector(".advice-id");
const advicetext = document.querySelector(".advice-text");

const fetchData = async () => {

   const res = await fetch("https://api.adviceslip.com/advice");
   const data = await res.json();
   const { slip } = data;
   console.log(data);
   adviceId.innerHTML = `#${slip.id}`;
   advicetext.innerHTML = slip.advice;
};

fetchData();

adviceBtn.addEventListener("click", fetchData);


