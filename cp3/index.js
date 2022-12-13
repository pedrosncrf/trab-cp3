/* 1- Crie uma função construtora ou Classe Aluno que tenha como atributos: nome (string),
quantidade de faltas (número) e notas (array de números). */

/* 2-Na função construtora crie o método calcularMedia que retorna a média de suas notas.
Também haverá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
Crie alguns alunos para testar a sua função de construtora. */

aula  Aluno  {
    construtor ( nome  =  '' ,  faltas  =  0 ,  notas  =  [ ] )  {
      isso . nome  =  nome ;
      isso . falta  =  falta ;
      isso . notas  =  notas ;
    }

    addFaltas ( )  {
      isso . falta ++ ;
    }

    calcularMedia ( )  {
      deixe  total  =  isso . notas . reduzir ( ( acc ,  valor )  =>  ( acc  +  valor ) ) ;
      let  media  =  total  /  this . notas . comprimento ;
       mídia de retorno
    }
  }

  /* 3-crie o objeto literal cursor que tem como atributos: nome do cursor
  (string), nota de aprovação (number), faltas máximas (number) e uma
  lista de alunos (um array composto por alunos criados no passo 2). */

  /* 4-Crie o método que permite adicionar alunos à lista do curso, ou seja, quando conduzido nosso método
  em nosso objeto curso, deve adicionar um aluno a mais na propriedade lista de estudantes do objeto
  curso. */

  /* 5-Crie um método para o objeto curso que recebe um aluno (como parâmetro) e retorne true se ele esperar no curso ou false em caso de reprovação.
  Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas.
  Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

  /* 6- Crie um método para o objeto curso que percorra a lista de alunos e retorne um array de booleanos com os resultados
    se os alunos aprovaram ou não. */

  const  CURSO  =  {
    nome_do_curso : 'Programação Imperativa' ,
    nota_de_aprovacao : 7 ,
    faltas_maxima : 5 ,
    estudantes : [ ] ,

    contribuirAluno ( nome ,  faltas ,  notas )  {
      const  NOVO_ALUNO  =  novo  Aluno ( nome ,  faltas ,  notas ) ;
      isso . estudantes . empurre ( NOVO_ALUNO ) ;
    } ,

    buscar Aluno ( nome )  {
      for  ( deixar  aluno  deste  . estudantes ) { _ 
        if  ( nome . toLowerCase ( )  ==  aluno . nome . toLowerCase ( ) )  {
          retorno  aluno ;
        }  senão  {
          falso ;
        }
      }
    } ,

    alunoAprovou ( nome )  {
      let  alunoEncontrado  =  this . buscarAluno ( nome ) ;
      if  ( alunoEncontrado . calcularMedia ( )  >=  this . nota_de_aprovacao  &&  alunoEncontrado . faltas  <  this . faltas_maxima )  {
        retorna  verdadeiro ;
      }  else  if  ( alunoEncontrado . calcularMedia ( )  >=  ( ( this . nota_de_aprovacao  *  10  /  100 )  +  this . nota_de_aprovacao )  &&  alunoEncontrado . faltas  ==  this . faltas_maxima )  {
        retorna  verdadeiro ;
      }  senão  {
        retorna  falso ;
      }
    } ,

    alunosAprovados ( )  {
      let  alunosAprovados  =  [ ] ;
      for  ( deixar  aluno  deste  . estudantes ) { _ 
        alunosAprovados . push ( {  nome : aluno . nome ,  aprovado : this . alunoAprovou ( aluno . nome )  } )
      }
      return  alunosAprovados ;
    } ,
  }

  CURSO . adicionarAluno ( "Caue" ,  ​​5 ,  [ 7 ,  8 ,  9 ] ) ;
  CURSO . adicionarAluno ( "Luan" ,  3 ,  [ 10 ,  8 ,  9 ] ) ;
  CURSO . contribuirAluno ( "Ederson" ,  6 ,  [ 10 ,  9 ,  10 ] ) ;
  CURSO . adicionarAluno ( "Eduardo" ,  7 ,  [ 8 ,  9 ,  6 ] ) ;
  CURSO . adicionarAluno ( "Vanessa" ,  2 ,  [ 8 ,  9.5 ,  10 ] ) ;
  CURSO . adicionarAluno ( "Pedro" ,  4 ,  [ 7 ,  9 ,  10 ] ) ;



  console . registro (
    CURSO . alunosAprovados ( )
  ) ;