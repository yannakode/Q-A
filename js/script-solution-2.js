const questions=document.querySelectorAll('.questions');
console.log(questions);
questions.forEach(function(question){
	const btn=question.querySelector('.btn');
	console.log(btn);
	btn.addEventListener('click', function(){
		questions.forEach(function(q){
			console.log(question);
			console.log(q);
			if(q!==question){
				q.classList.remove('show-text');
			}
		});
	});
	question.classList.toggle('show-text');
})