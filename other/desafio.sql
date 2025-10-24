-- 1. Escreva a consulta SQL para listar o nome de todos os alunos matriculados na   disciplina de Cálculo do professor João. 
SELECT a.nome AS ALUNOS
FROM professor p
JOIN disciplina d ON p.codp = d.codp
JOIN aluno_disciplina ad ON d.codd = ad.codd
JOIN aluno a ON ad.coda = a.coda
WHERE p.nome = 'João' AND d.nome = 'Cálculo'
ORDER BY a.nome;

-- 2 Escreva a consulta SQL para exibir a quantidade de alunos por disciplinas. 
 SELECT d.nome AS DISCIPLINA,
 	COUNT(ad.coda) AS TOTAL_ALUNOS
 FROM disciplina d
 INNER JOIN aluno_disciplina ad ON d.codd = ad.codd
 GROUP BY d.nome
 ORDER BY d.nome;

-- 3  Escreva a consulta SQL para listar as disciplinas que todos os professores lecionam. 
SELECT d.nome AS DISCIPLINA 
FROM disciplina d
GROUP BY d.nome
HAVING COUNT(DISTINCT d.codp) = (SELECT COUNT(*) FROM professor); 

-- 4. Escreva a consulta SQL que exibe o total de professores. 
 SELECT COUNT(codp) AS TOTAL_PROFESSOR FROM professor; 

-- 5 Escreva a consulta SQL para listar todos os alunos que cursaram alguma disciplina do ano 2000 até 2020. 
SELECT DISTINCT a.nome AS NOME_ALUNO,
ad.ano AS ANO FROM aluno a
INNER JOIN aluno_disciplina ad ON a.coda = ad.coda
WHERE ad.ano BETWEEN 2000 AND 2020;
