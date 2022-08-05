const btns=document.querySelectorAll('.btn');
const box1=document.querySelector('.box1');
const box2=document.querySelector('.box2');
const box3=document.querySelector('.box3');

const questions=document.querySelector('.question-text');

btns.forEach(function(btn){
	btn.addEventListener('click', function(e){
		const questions=e.currentTarget.parentElement.parentElement;
		questions.classList.toggle('show-text');
	})
})