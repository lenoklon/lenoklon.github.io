'use strict';

		/* OUR OBJECT WITH QUESTIONS AND ANSWERS OF TEST*/

$(function  () {
	
	var $testData = {
		header: 'Programming Test',
		questions: [{
			title:'Question №1',
			radio:'one',
			id: ['1', '2', '3'],
			answers:['Variant of answer №1', 'Vaiant of answer №2', 'Variant of answer №3'],
			correct:1
		},
		{
			title: "Question №2",
			radio:'two',
			id:['1', '2', '3'],
			answers:['Variant of answer №1', 'Vaiant of answer №2', 'Variant of answer №3'],
			correct:2
		},
		{
			title:'Question №3',
			radio:'three',
			id:['1', '2', '3'],
			answers:['Variant of answer №1', 'Vaiant of answer №2', 'Variant of answer №3'],
			correct:3
		}],

		submit:'Check my results'
	};

				/*SAVING in LStorage*/
	localStorage.setItem ('test', JSON.stringify($testData));

			/*RENDERING WITH TEMPLATE*/

	var $data = JSON.parse(localStorage.getItem('test')); /*reading datas from LS*/

	var $html = $('#test').html();  /*creating template*/

	var $content = tmpl($html, $data); /*adding info in template*/

	$('.wrapper').append($content);

			/*MODAL WINDOW and CHECKING OF ANSWERS*/

	function showModal(e) {
		e.preventDefault();

		var $modal = $('<div class="modal"></div>');
		var $result = 0;
		var $answer = $('input:checked');
		var $correct = [];

		for (var i = 0; i < $testData.questions.length; i++) {
			$correct[i] = $testData.questions[i].correct;

			if($($answer[i]).attr('id') == $correct[i]) {
				$result += 1;
			} else {
				$modal.append('<p class="incorrect"> Answer on question number ' + (i+1) + ' is <b>wrong</b></p>');
			}
		}

		$modal.append('<h3 class="result">Amount of right answers: '+ $result + '</h3><hr');

		if ($result == $testData.questions.length) {
			$modal.append('<h3>Congratulation! You successfully passed the test</h3>');
		} else {
			$modal.append('<h3>Try again</h3>');
		}



		$modal.append('<button>Close and try again</button>'); /*nulling*/

		$('body').append($modal);

		$('button').one('click', function (e) {
			e.preventDefault();
			$modal.detach();
			$('input').attr('checked', false);
		})

	}

	$('button').on('click', showModal);

	return this;
});