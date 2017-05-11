var formulario = document.querySelector(".form-group");

function adicionarTarefa(){
if(textarea.value !="")
	var div = document.createElement ("div");
	div.classList.add("tarefa");
	div.innerHTML = '<h3>'+textarea.value+'</h3>'
				+'<div class="botoes linha">'
				+'<button class="botao editar">'
					+'<i class="fa fa-pencil" ></i>'
				+'</button>'
				+'<button class="botao feito">'
					+'<i class="fa fa-check" ></i>'
				+'</button>'
				+'</div>';

var tarefas = document.querySelector(".tarefas");
tarefas.appendChild(div);

formulario.onsubmit = adicionarTarefa;

}
var botaoChecar = div.querySelector(".botao.feito");
		function checar(){
			var tarefa = this.parentNode.parentNode;	
			if(tarefa.classList.contains("feito")){
			   tarefa.classList.remove("feito");
			}else{
				tarefa.classList.add("feito");
			}

		}
		botaoChecar.onclick = checar;

	var botaoRemover= div.querySelector(".botao.remover");
	function remover(){
		var tarefa = this.parentNode.parentNode;
		tarefa.remove();
		}
		botaoRemover.onclick = remover;
	}else{
		textarea.parentNode.classList.add("errado");
	}
	return false;
}


var textarea= document.querySelector(".inputMensagem");
function validarPreenchimento(){
	if(textarea.value != ""){
		textarea.parentNode.classList.remove("errado");
	}else{
		textarea.parentNode.classList.add("errado");
	}
}
textarea.onblur = validarPreenchimento;
