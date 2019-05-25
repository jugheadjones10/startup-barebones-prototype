
var pictures = [
    null,
    "pendulum",
    "car",
    "covalent",
    "magnet2",
    "pendulum",
    "car",
    "covalent",
    "magnet2",
    "pendulum",
    "car",
    "covalent",
    "magnet2"
]

for (var i = 1; i < 13; i++) {

    var question = document.querySelector(`.question${i}`)
    question.insertAdjacentHTML("afterbegin", `
<div class="question-thumbnail">
    <div class="thumbnail-overlay">
            A bar of mass m is pulled by means of a thread up an inclined plane forming an angle a with the horizontal (Fig. 1.13). 
            The coefficient of friction is equal to k. Find the angle p which the thread must form with the inclined plane for the tension of the thread to be minimum. What is it equal to? 
    </div>
</div>

<div class="question-author"> 
    Kim Young Jin
</div>

<div class="author-reputation">
    ${Math.round(Math.random()*1000)}
</div>

<div class="question-views">
    <img src="./assets/icons/eye.svg" width="15px" height="15px">
    ${Math.round(Math.random()*1000)}
</div>

<div class="question-tags"> 
    <div>electromagnetism</div>
    <div>physics</div>
    <div>a-level</div>
    <div>grade 10</div>
</div>
    `)

    question.style.gridArea = `question${i}`


    var questionThumbnail = document.querySelector(`.question${i} .question-thumbnail`)
    questionThumbnail.style.backgroundImage = `url("assets/questions/${pictures[i]}.png")`

}